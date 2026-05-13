import { verifyEmailConnection } from './contact.email';

export async function smtpTestController(request: Request): Promise<Response> {
    if (request.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Send a POST request to test the email connection.' }), {
            status: 405,
            headers: { 'content-type': 'application/json; charset=utf-8' }
        });
    }

    try {
        const result = await verifyEmailConnection();
        return new Response(JSON.stringify(result), {
            status: result.success ? 200 : 502,
            headers: { 'content-type': 'application/json; charset=utf-8' }
        });
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        const isConfigError = err.message.startsWith('Missing required environment variable');
        return new Response(
            JSON.stringify({
                success: false,
                error: isConfigError
                    ? 'Missing email configuration. Check /api/health for details.'
                    : err.message
            }),
            {
                status: 500,
                headers: { 'content-type': 'application/json; charset=utf-8' }
            }
        );
    }
}
