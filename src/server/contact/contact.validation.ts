import { ContactFormPayload } from './contact.types';

function sanitize(value: unknown): string {
    return typeof value === 'string' ? value.trim() : '';
}

export function validateContactPayload(rawBody: unknown): ContactFormPayload | null {
    if (!rawBody || typeof rawBody !== 'object') {
        return null;
    }

    const body = rawBody as Record<string, unknown>;
    const payload: ContactFormPayload = {
        name: sanitize(body['name']),
        email: sanitize(body['email']),
        phone: sanitize(body['phone']),
        subject: sanitize(body['subject']),
        message: sanitize(body['message'])
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+]?[-()\d\s]{7,20}$/;

    if (!payload.name || payload.name.length > 100) {
        return null;
    }
    if (!payload.email || payload.email.length > 254 || !emailPattern.test(payload.email)) {
        return null;
    }
    if (!payload.phone || !phonePattern.test(payload.phone)) {
        return null;
    }
    if (!payload.subject || payload.subject.length > 140) {
        return null;
    }
    if (!payload.message || payload.message.length < 10 || payload.message.length > 2000) {
        return null;
    }

    return payload;
}
