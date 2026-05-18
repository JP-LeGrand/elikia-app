import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const immediateApi = globalThis as typeof globalThis & {
    setImmediate?: typeof setImmediate;
    clearImmediate?: typeof clearImmediate;
};

if (typeof immediateApi.setImmediate !== 'function') {
    immediateApi.setImmediate = ((callback: (...args: unknown[]) => void, ...args: unknown[]) =>
        setTimeout(callback, 0, ...args)) as unknown as typeof setImmediate;
}

if (typeof immediateApi.clearImmediate !== 'function') {
    immediateApi.clearImmediate = ((handle: ReturnType<typeof setTimeout>) =>
        clearTimeout(handle)) as unknown as typeof clearImmediate;
}

const angularAppEngine = new AngularAppEngine();

function resolveContext(): unknown {
    try {
        return getContext();
    } catch {
        // Allow local/non-Netlify execution to continue with no platform context.
        return undefined;
    }
}

export async function appEngineHandler(request: Request, context?: unknown): Promise<Response> {
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
