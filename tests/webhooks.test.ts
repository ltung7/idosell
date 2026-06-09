// vitest tests for the webhook dispatcher
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createHmac } from 'node:crypto';
import { webhooks } from '../dist/webhooks';
import { normalizeIaiRequest } from '../dist/webhooks.normalizer';

const API_VERSION = '8';
const SIGNATURE_KEY = 'secret-hmac-key';
const TOKEN = 'authentication-bearer-token'

// Helper to build a Request with appropriate headers and body
function buildRequest({
    body,
    eventType = 'productUpdated',
    objectType = 'product',
}: {
    body: unknown;
    eventType?: string;
    objectType?: string;
}) {
    const rawBody = JSON.stringify(body);
    const signature = createHmac('sha256', SIGNATURE_KEY).update(rawBody).digest('hex');
    const headers = new Headers({
        'Content-Type': 'application/json',
        'x-iai-api-version': API_VERSION,
        'x-iai-event-time': new Date().toISOString(),
        'x-iai-event-type': eventType,
        'x-iai-event-uid': 'uid-123',
        'x-iai-object-type': objectType,
        'x-iai-panel-id': '1',
        'x-iai-signature': signature,
        'x-iai-webhook-time': new Date().toISOString(),
        'authorization': `Bearer ${TOKEN}`,
    });
    return new Request('https://api.example.com/webhook', {
        method: 'POST',
        headers,
        body: rawBody,
    });
}

describe('WebhookChain dispatcher', () => {
    let mockHandler: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        mockHandler = vi.fn();
    });

    it('routes a matching event to the registered handler', async () => {
        const requestBody = {
            results: [{ productDisplayedCode: 'ABC123' }],
        };
        const req = buildRequest({ body: requestBody });

        const chain = webhooks
            .validateHeaders((h) => h.token === TOKEN)
            .validateSignature(SIGNATURE_KEY)
            .on('productUpdated', mockHandler);

        const result = await chain.handle(req);

        expect(result).toEqual({ matched: true, eventType: 'productUpdated' });
        expect(mockHandler).toHaveBeenCalledTimes(1);
        const ctx = mockHandler.mock.calls[0][0];
        expect(ctx.body).toEqual(requestBody);
        expect(ctx.headers.eventType).toBe('productUpdated');
        expect(ctx.headers.objectType).toBe('product');
    });

    it('returns unmatched when no handler is registered for the event', async () => {
        const requestBody = { foo: 'bar' };
        const req = buildRequest({ body: requestBody, eventType: 'orderCreated', objectType: 'order' });

        const chain = webhooks
            .validateHeaders((h) => h.token === TOKEN)
            .validateSignature(SIGNATURE_KEY);

        const result = await chain.handle(req);
        expect(result).toEqual({ matched: false, eventType: 'orderCreated' });
        expect(mockHandler).not.toHaveBeenCalled();
    });

    it('fails validateHeaders when token mismatched', async () => {
        const requestBody = { foo: 'bar' };
        const req = buildRequest({ body: requestBody });
        const chain = webhooks
            .validateHeaders(() => false)
            .validateSignature(SIGNATURE_KEY)
            .on('productUpdated', mockHandler);
        const result = await chain.handle(req);
        expect(result).toEqual({ matched: false, eventType: null, reason: 'validation_failed' });
    });

    it('fails validateSignature with wrong key', async () => {
        const requestBody = { foo: 'bar' };
        const req = buildRequest({ body: requestBody });
        const chain = webhooks
            .validateHeaders((h) => h.token === TOKEN)
            .validateSignature('wrong-key')
            .on('productUpdated', mockHandler);
        await expect(chain.handle(req)).rejects.toThrow('Invalid webhook signature');
    });

    it('registers handler for object type "order" and matches order events', async () => {
        const requestBody = { foo: 'bar' };
        const req = buildRequest({ body: requestBody, eventType: 'orderCreated', objectType: 'order' });
        const chain = webhooks
            .validateHeaders((h) => h.token === TOKEN)
            .validateSignature(SIGNATURE_KEY)
            .on('order', mockHandler);
        await expect(chain.handle(req)).resolves.not.toThrow();
    });

    it('normalizes request and verifies header shape', async () => {
        const requestBody = { foo: 'bar' };
        const req = buildRequest({ body: requestBody });
        const { headers } = await normalizeIaiRequest(req);
        // Basic shape checks
        expect(headers).toMatchObject({
            token: TOKEN,
            apiVersion: Number(API_VERSION),
            eventType: 'productUpdated',
            objectType: 'product',
            panelId: 1,
            signature: expect.any(String),
        });
        // Type checks for dates
        expect(headers.eventTime).toBeInstanceOf(Date);
        expect(headers.webhookTime).toBeInstanceOf(Date);
    });

    it('handleRaw processes raw webhook input correctly', async () => {
        const requestBody = { foo: 'bar' };
        const rawBody = JSON.stringify(requestBody);
        const rawHeaders = {
            'content-type': 'application/json',
            'x-iai-api-version': API_VERSION,
            'x-iai-event-time': new Date().toISOString(),
            'x-iai-event-type': 'productUpdated',
            'x-iai-event-uid': 'uid-123',
            'x-iai-object-type': 'product',
            'x-iai-panel-id': '1',
            'x-iai-signature': createHmac('sha256', SIGNATURE_KEY).update(rawBody).digest('hex'),
            'x-iai-webhook-time': new Date().toISOString(),
            'authorization': `Bearer ${TOKEN}`,
        } as Record<string, string>;
        const chain = webhooks
            .validateHeaders((h) => h.token === TOKEN)
            .validateSignature(SIGNATURE_KEY)
            .on('productUpdated', mockHandler);
        const result = await chain.handleRaw({ headers: rawHeaders, rawBody, body: requestBody });
        expect(result).toEqual({ matched: true, eventType: 'productUpdated' });
        expect(mockHandler).toHaveBeenCalledTimes(1);
        const ctx = mockHandler.mock.calls[0][0];
        expect(ctx.body).toEqual(requestBody);
        expect(ctx.headers.objectType).toBe('product');
    });
});
