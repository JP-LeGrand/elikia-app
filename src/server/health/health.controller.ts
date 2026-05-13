declare const Netlify: { env: { get(key: string): string | undefined } } | undefined;

const REQUIRED_ENV_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'];
const OPTIONAL_ENV_VARS = ['CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL', 'CONTACT_SUBJECT_PREFIX'];
const SAFE_TO_DISPLAY = ['SMTP_HOST', 'SMTP_PORT', 'CONTACT_SUBJECT_PREFIX'];

function getEnvVar(name: string): string | undefined {
    if (typeof Netlify !== 'undefined' && Netlify?.env) {
        return Netlify.env.get(name);
    }
    return process.env[name];
}

export function healthController(_request: Request): Response {
    const netlifyRuntime = typeof Netlify !== 'undefined' && !!Netlify?.env;

    const env: Record<string, boolean | string> = {};
    for (const varName of [...REQUIRED_ENV_VARS, ...OPTIONAL_ENV_VARS]) {
        const value = getEnvVar(varName);
        if (SAFE_TO_DISPLAY.includes(varName) && value) {
            env[varName] = value;
        } else {
            env[varName] = !!value;
        }
    }

    const allRequiredPresent = REQUIRED_ENV_VARS.every((v) => !!getEnvVar(v));

    const smtpHost = getEnvVar('SMTP_HOST') || '';
    const smtpPort = getEnvVar('SMTP_PORT') || '';
    const warnings: string[] = [];
    if (smtpHost === 'send.one.com') {
        warnings.push(
            'SMTP_HOST is set to "send.one.com" which is for email clients only. ' +
            'Change SMTP_HOST to "mailout.one.com" in your Netlify environment variables to send emails from this website.'
        );
    }
    if (smtpPort && !['465', '587', '25'].includes(smtpPort)) {
        warnings.push(
            `SMTP_PORT is set to "${smtpPort}" which is not a standard one.com SMTP port. ` +
            'Use 587 (STARTTLS, recommended), 465 (SSL/TLS), or 25 (STARTTLS/none).'
        );
    }

    return new Response(
        JSON.stringify({
            status: allRequiredPresent ? 'ok' : 'degraded',
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
