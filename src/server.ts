// Polyfill setImmediate for bundled environments (e.g. Netlify SSR) where it is stripped by esbuild.
if (typeof globalThis.setImmediate === 'undefined') {
    (globalThis as unknown as Record<string, unknown>)['setImmediate'] = (fn: () => void) => setTimeout(fn, 0);
}

import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';
import dotenv from 'dotenv';
import { contactController } from './server/contact/contact.controller';
import { smtpTestController } from './server/contact/smtp-test.controller';
import { healthController } from './server/health/health.controller';

dotenv.config();

const angularAppEngine = new AngularAppEngine();
const routeHandlers: Record<string, (request: Request) => Promise<Response>> = {
    '/api/contact': contactController,
    '/api/health': (req) => Promise.resolve(healthController(req)),
    '/api/smtp-test': smtpTestController
};

function resolveContext(): unknown {
    try {
        return getContext();
    } catch {
        // Allow local/non-Netlify execution to continue with no platform context.
        return undefined;
    }
}

export async function appEngineHandler(request: Request, context?: unknown): Promise<Response> {
    const pathname = new URL(request.url).pathname;
    const routeHandler = routeHandlers[pathname];
    if (routeHandler) {
        return routeHandler(request);
    }

    const result = await angularAppEngine.handle(request, context);
    return result || new Response('Not found', { status: 404 });
}

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
    return appEngineHandler(request, resolveContext());
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
