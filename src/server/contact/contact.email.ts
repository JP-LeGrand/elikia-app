import nodemailer from 'nodemailer';
import { ContactFormPayload } from './contact.types';

declare const Netlify: { env: { get(key: string): string | undefined } } | undefined;

interface SmtpConfig {
    smtpHost: string;
    smtpPort: number;
    smtpUser: string;
    smtpPassword: string;
    useImplicitTls: boolean;
    requireStartTls: boolean;
    contactToEmail: string;
    contactFromEmail: string;
    subjectPrefix: string;
}

interface ResendConfig {
    apiKey: string;
    contactToEmail: string;
    contactFromEmail: string;
    subjectPrefix: string;
}

export type EmailTransport = 'resend' | 'smtp';

function getEnvVar(name: string): string | undefined {
    if (typeof Netlify !== 'undefined' && Netlify?.env) {
        return Netlify.env.get(name);
    }
    return process.env[name];
}

function getRequiredEnvVar(name: string): string {
    const value = getEnvVar(name);
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export function getActiveTransport(): EmailTransport {
    return getEnvVar('RESEND_API_KEY') ? 'resend' : 'smtp';
}

function buildTextBody(payload: ContactFormPayload): string {
    return [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        '',
        payload.message
    ].join('\n');
}

function buildHtmlBody(payload: ContactFormPayload): string {
    return [
        `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
        `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>`,
        `<p><strong>Message:</strong></p>`,
        `<p>${escapeHtml(payload.message).replace(/\n/g, '<br/>')}</p>`
    ].join('');
}

// --- Resend HTTP transport ---

function getResendConfig(): ResendConfig {
    const apiKey = getRequiredEnvVar('RESEND_API_KEY');
    const fromEmail = getEnvVar('CONTACT_FROM_EMAIL') || getEnvVar('SMTP_USER');
    const toEmail = getEnvVar('CONTACT_TO_EMAIL') || getEnvVar('SMTP_USER');

    if (!fromEmail) {
        throw new Error('Missing required environment variable: CONTACT_FROM_EMAIL (needed for Resend transport)');
    }
    if (!toEmail) {
        throw new Error('Missing required environment variable: CONTACT_TO_EMAIL (needed for Resend transport)');
    }

    return {
        apiKey,
        contactToEmail: toEmail,
        contactFromEmail: fromEmail,
        subjectPrefix: getEnvVar('CONTACT_SUBJECT_PREFIX') || 'Website Contact',
    };
}

async function sendViaResend(payload: ContactFormPayload): Promise<void> {
    const config = getResendConfig();

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: `Elikia Contact Form <${config.contactFromEmail}>`,
            to: [config.contactToEmail],
            reply_to: `${payload.name} <${payload.email}>`,
            subject: `${config.subjectPrefix}: ${payload.subject}`,
            text: buildTextBody(payload),
            html: buildHtmlBody(payload),
        }),
    });

    if (!response.ok) {
        const errorBody = await response.text();
        const error = new Error(`Resend API error (${response.status}): ${errorBody}`);
        (error as { code?: string }).code = response.status === 401 || response.status === 403 ? 'EAUTH' : 'ERESEND';
        throw error;
    }
}

async function verifyResendConnection(): Promise<{ success: boolean; transport: string; error?: string; code?: string }> {
    try {
        const config = getResendConfig();
        const response = await fetch('https://api.resend.com/domains', {
            headers: { 'Authorization': `Bearer ${config.apiKey}` },
        });

        if (response.ok) {
            return { success: true, transport: 'resend' };
        }

        const errorBody = await response.text();
        return {
            success: false,
            transport: 'resend',
            error: `Resend API returned ${response.status}: ${errorBody}`,
            code: response.status === 401 || response.status === 403 ? 'EAUTH' : 'ERESEND',
        };
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        return { success: false, transport: 'resend', error: err.message };
    }
}

// --- SMTP transport ---

function resolveTlsMode(port: number): { useImplicitTls: boolean; requireStartTls: boolean } {
    if (port === 465) {
        return { useImplicitTls: true, requireStartTls: false };
    }
    if (port === 587) {
        return { useImplicitTls: false, requireStartTls: true };
    }
    throw new Error(`Unsupported SMTP_PORT: ${port}. Use 465 (SSL/TLS) or 587 (STARTTLS).`);
}

function getSmtpConfig(): SmtpConfig {
    const smtpHost = getRequiredEnvVar('SMTP_HOST');
    const smtpPort = Number(getRequiredEnvVar('SMTP_PORT'));
    const smtpUser = getRequiredEnvVar('SMTP_USER');
    const smtpPassword = getRequiredEnvVar('SMTP_PASSWORD');
    const { useImplicitTls, requireStartTls } = resolveTlsMode(smtpPort);

    return {
        smtpHost,
        smtpPort,
        smtpUser,
        smtpPassword,
        useImplicitTls,
        requireStartTls,
        contactToEmail: getEnvVar('CONTACT_TO_EMAIL') || smtpUser,
        contactFromEmail: getEnvVar('CONTACT_FROM_EMAIL') || smtpUser,
        subjectPrefix: getEnvVar('CONTACT_SUBJECT_PREFIX') || 'Website Contact'
    };
}

function createSmtpTransporter(config: SmtpConfig) {
    return nodemailer.createTransport({
        host: config.smtpHost,
        port: config.smtpPort,
        secure: config.useImplicitTls,
        requireTLS: config.requireStartTls,
        auth: {
            user: config.smtpUser,
            pass: config.smtpPassword
        },
        tls: {
            minVersion: 'TLSv1.2'
        },
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 7000
    });
}

async function sendViaSmtp(payload: ContactFormPayload): Promise<void> {
    const config = getSmtpConfig();
    const transporter = createSmtpTransporter(config);

    await transporter.sendMail({
        from: `"Elikia Contact Form" <${config.contactFromEmail}>`,
        to: config.contactToEmail,
        replyTo: `"${payload.name}" <${payload.email}>`,
        subject: `${config.subjectPrefix}: ${payload.subject}`,
        text: buildTextBody(payload),
        html: buildHtmlBody(payload)
    });
}

async function verifySmtpConnectionInternal(): Promise<{ success: boolean; transport: string; host: string; port: number; error?: string; code?: string }> {
    const config = getSmtpConfig();
    const transporter = createSmtpTransporter(config);

    try {
        await transporter.verify();
        return { success: true, transport: 'smtp', host: config.smtpHost, port: config.smtpPort };
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        const code = (error as { code?: string })?.code;
        return { success: false, transport: 'smtp', host: config.smtpHost, port: config.smtpPort, error: err.message, code: code || undefined };
    }
}

// --- Public API ---

export async function sendContactEmail(payload: ContactFormPayload): Promise<void> {
    if (getActiveTransport() === 'resend') {
        return sendViaResend(payload);
    }
    return sendViaSmtp(payload);
}

export async function verifyEmailConnection(): Promise<{ success: boolean; transport: string; host?: string; port?: number; error?: string; code?: string }> {
    if (getActiveTransport() === 'resend') {
        return verifyResendConnection();
    }
    return verifySmtpConnectionInternal();
}
