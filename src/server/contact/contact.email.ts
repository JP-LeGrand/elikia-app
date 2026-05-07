import nodemailer from 'nodemailer';
import { ContactFormPayload } from './contact.types';

// Netlify global is available in Netlify Function runtime (including Angular SSR via @netlify/angular-runtime)
declare const Netlify: { env: { get(key: string): string | undefined } } | undefined;

interface MailConfig {
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

// Netlify.env.get() is the recommended way to access env vars in Netlify Functions;
// process.env fallback supports local development via dotenv.
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

function resolveTlsMode(port: number): { useImplicitTls: boolean; requireStartTls: boolean } {
    if (port === 465) {
        return { useImplicitTls: true, requireStartTls: false };
    }
    if (port === 587) {
        return { useImplicitTls: false, requireStartTls: true };
    }
    throw new Error(`Unsupported SMTP_PORT: ${port}. Use 465 (SSL/TLS) or 587 (STARTTLS).`);
}

function getMailConfig(): MailConfig {
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

function createContactTransporter(mailConfig: MailConfig) {
    return nodemailer.createTransport({
        host: mailConfig.smtpHost,
        port: mailConfig.smtpPort,
        secure: mailConfig.useImplicitTls,
        requireTLS: mailConfig.requireStartTls,
        auth: {
            user: mailConfig.smtpUser,
            pass: mailConfig.smtpPassword
        },
        tls: {
            minVersion: 'TLSv1.2'
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000
    });
}

export async function sendContactEmail(payload: ContactFormPayload): Promise<void> {
    const mailConfig = getMailConfig();
    console.log('Sending contact email with config:', {
        smtpHost: mailConfig.smtpHost,
        smtpPort: mailConfig.smtpPort,
        smtpUser: mailConfig.smtpUser,
        contactToEmail: mailConfig.contactToEmail,
        contactFromEmail: mailConfig.contactFromEmail,
        subjectPrefix: mailConfig.subjectPrefix
    });

    const transporter = createContactTransporter(mailConfig);

    const textBody = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        '',
        payload.message
    ].join('\n');

    const htmlBody = [
        `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
        `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>`,
        `<p><strong>Message:</strong></p>`,
        `<p>${escapeHtml(payload.message).replace(/\n/g, '<br/>')}</p>`
    ].join('');

    await transporter.sendMail({
        from: `\"Elikia Contact Form\" <${mailConfig.contactFromEmail}>`,
        to: mailConfig.contactToEmail,
        replyTo: `\"${payload.name}\" <${payload.email}>`,
        subject: `${mailConfig.subjectPrefix}: ${payload.subject}`,
        text: textBody,
        html: htmlBody
    });
}

export async function verifySmtpConnection(): Promise<{ success: boolean; host: string; port: number; error?: string; code?: string }> {
    const mailConfig = getMailConfig();
    const transporter = createContactTransporter(mailConfig);

    try {
        await transporter.verify();
        return { success: true, host: mailConfig.smtpHost, port: mailConfig.smtpPort };
    } catch (error) {
        const err = error instanceof Error ? error : new Error(String(error));
        const code = (error as { code?: string })?.code;
        return { success: false, host: mailConfig.smtpHost, port: mailConfig.smtpPort, error: err.message, code: code || undefined };
    }
}
