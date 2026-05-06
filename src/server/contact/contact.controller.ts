import { sendContactEmail } from './contact.email';
import { validateContactPayload } from './contact.validation';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, number[]>();

function jsonResponse(status: number, payload: unknown): Response {
    return new Response(JSON.stringify(payload), {
        status,
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    });
}

function getClientIp(request: Request): string {
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }

    return request.headers.get('x-nf-client-connection-ip')?.trim() || 'unknown';
}

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const recentRequests = (rateLimitStore.get(ip) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

    if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
        rateLimitStore.set(ip, recentRequests);
        return true;
    }

    recentRequests.push(now);
    rateLimitStore.set(ip, recentRequests);
    return false;
}

export async function contactController(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
        return jsonResponse(405, { message: 'Method not allowed' });
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
        return jsonResponse(429, { message: 'Too many requests. Please try again later.' });
    }

    let rawBody: unknown;
    try {
        rawBody = await request.json();
    } catch {
        return jsonResponse(400, { message: 'Invalid request payload.' });
    }

    const payload = validateContactPayload(rawBody);
    if (!payload) {
        return jsonResponse(400, { message: 'Validation failed.' });
    }

    try {
        await sendContactEmail(payload);
        return jsonResponse(200, { message: 'Message sent successfully.' });
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        console.error('Contact form email failed:', err.message, err.stack);
        return jsonResponse(500, { message: 'Unable to send message at the moment.' });
    }
}
