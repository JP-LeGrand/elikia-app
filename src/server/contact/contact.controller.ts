import { sendContactEmail } from './contact.email';
import { validateContactPayload } from './contact.validation';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const EMAIL_SEND_TIMEOUT_MS = 8000;
const rateLimitStore = new Map<string, number[]>();

class EmailSendTimeoutError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailSendTimeoutError';
    }
}

async function withEmailTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
        const timeoutHandle = setTimeout(() => {
            reject(new EmailSendTimeoutError(`Email send timed out after ${timeoutMs}ms`));
        }, timeoutMs);

        promise
            .then((value) => {
                clearTimeout(timeoutHandle);
                resolve(value);
            })
            .catch((error) => {
                clearTimeout(timeoutHandle);
                reject(error);
            });
    });
}

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
        await withEmailTimeout(sendContactEmail(payload), EMAIL_SEND_TIMEOUT_MS);
        return jsonResponse(200, { message: 'Message sent successfully.' });
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        const code = (error as { code?: string })?.code;
        const isConfigError = err.message.startsWith('Missing required environment variable');
        const isTimeoutError = error instanceof EmailSendTimeoutError || code === 'ETIMEDOUT';

        if (isConfigError) {
            console.error('Contact form config error:', err.message);
            return jsonResponse(500, {
                message: 'Server configuration error. Check that all SMTP environment variables are set.'
            });
        }

        console.error('Contact form SMTP error:', { code, message: err.message, stack: err.stack });

        let userMessage = 'Unable to send message. Please try again later.';
        if (code === 'EAUTH') {
            userMessage = 'Unable to send message. Please try again later.';
            console.error('Hint: SMTP authentication failed. Verify SMTP_USER and SMTP_PASSWORD are correct and that the email account is active on one.com.');
        } else if (code === 'ESOCKET' || code === 'ECONNECTION') {
            userMessage = 'Unable to send message. Please try again later.';
            console.error('Hint: Could not connect to the mail server. Verify SMTP_HOST is "mailout.one.com" (not "send.one.com") and SMTP_PORT is 587 or 465.');
        } else if (isTimeoutError || code === 'ECONNREFUSED') {
            userMessage = 'Unable to send message. Please try again later.';
            console.error('Hint: Mail server connection timed out or was refused. If SMTP_HOST is "send.one.com", change it to "mailout.one.com".');
        }

        return jsonResponse(isTimeoutError ? 504 : 500, { message: userMessage });
    }
}
