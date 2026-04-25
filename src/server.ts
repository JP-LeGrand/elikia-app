import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

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
    // Example API endpoints can be defined here.
    // Uncomment and define endpoints as necessary.
    // const pathname = new URL(request.url).pathname;
    // if (pathname === '/api/hello') {
    //     return Response.json({ message: 'Hello from the API' });
    // }

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
