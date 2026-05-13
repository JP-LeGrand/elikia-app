declare const Netlify: { env: { get(key: string): string | undefined } } | undefined;

const SMTP_REQUIRED = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'];
const RESEND_REQUIRED = ['RESEND_API_KEY'];
const SHARED_OPTIONAL = ['CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL', 'CONTACT_SUBJECT_PREFIX'];
const SAFE_TO_DISPLAY = ['SMTP_HOST', 'SMTP_PORT', 'CONTACT_SUBJECT_PREFIX'];

function getEnvVar(name: string): string | undefined {
    if (typeof Netlify !== 'undefined' && Netlify?.env) {
        return Netlify.env.get(name);
    }
    return process.env[name];
}

export function healthController(_request: Request): Response {
    const netlifyRuntime = typeof Netlify !== 'undefined' && !!Netlify?.env;
    const transport = getEnvVar('RESEND_API_KEY') ? 'resend' : 'smtp';

    const allVars = [...new Set([...SMTP_REQUIRED, ...RESEND_REQUIRED, ...SHARED_OPTIONAL])];
    const env: Record<string, boolean | string> = {};
    for (const varName of allVars) {
        const value = getEnvVar(varName);
        if (SAFE_TO_DISPLAY.includes(varName) && value) {
            env[varName] = value;
        } else {
            env[varName] = !!value;
        }
    }

    const requiredVars = transport === 'resend' ? RESEND_REQUIRED : SMTP_REQUIRED;
    const allRequiredPresent = requiredVars.every((v) => !!getEnvVar(v));

    const warnings: string[] = [];

    if (transport === 'smtp') {
        const smtpHost = getEnvVar('SMTP_HOST') || '';
        if (smtpHost === 'send.one.com') {
            warnings.push('SMTP_HOST is set to send.one.com which is for email clients. For sending from a web server, use mailout.one.com instead.');
        }
        if (smtpHost.endsWith('.one.com')) {
            warnings.push('one.com SMTP servers restrict connections to their own network. Sending from Netlify will fail. Set RESEND_API_KEY to switch to the Resend HTTP transport.');
        }
    }

    if (transport === 'resend') {
        const hasFrom = !!getEnvVar('CONTACT_FROM_EMAIL') || !!getEnvVar('SMTP_USER');
        const hasTo = !!getEnvVar('CONTACT_TO_EMAIL') || !!getEnvVar('SMTP_USER');
        if (!hasFrom) {
            warnings.push('Resend transport requires CONTACT_FROM_EMAIL (or SMTP_USER as fallback).');
        }
        if (!hasTo) {
            warnings.push('Resend transport requires CONTACT_TO_EMAIL (or SMTP_USER as fallback).');
        }
    }

    return new Response(
        JSON.stringify({
            status: allRequiredPresent ? 'ok' : 'degraded',
            transport,
            runtime: netlifyRuntime ? 'netlify' : 'node',
            env,
            ...(warnings.length > 0 && { warnings })
        }),
        {
            status: 200,
            headers: { 'content-type': 'application/json; charset=utf-8' }
        }
    );
}
