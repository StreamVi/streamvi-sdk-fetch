import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { IntegrationApi, StreamViSdkConfig } from '../src';

describe('Generated integration requests', () => {
  it('sends the new integration request with its version, OAuth token and request ID', async () => {
    const captured: Array<{ url: string; requestId: string | string[] | undefined; authorization: string | undefined }> = [];
    const expected = {
      results: [{ code: 'project:read', title: 'Read project', description: 'Read project details', implies: [] }],
      scope_mode: 'selected',
    };
    const server = createServer((request, response) => {
      captured.push({
        url: request.url!,
        requestId: request.headers['x-client-request-id'],
        authorization: request.headers.authorization,
      });
      response.writeHead(200, { 'content-type': 'application/json' });
      response.end(JSON.stringify(expected));
    });
    await new Promise<void>((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', resolve);
    });

    try {
      const configuration = new StreamViSdkConfig({
        accessToken: 'local-test-token',
        basePath: `http://127.0.0.1:${(server.address() as AddressInfo).port}`,
      }).configuration;
      const requestId = '2c3d4e5f-1234-4567-89ab-0123456789ab';
      const response = await new IntegrationApi(configuration).methodIntegrationScopesV1(
        { language: 'en', X_Client_Request_Id: requestId },
        { signal: AbortSignal.timeout(5000) },
      );
      expect(response).toEqual(expected);
      expect(captured).toHaveLength(1);
      const url = new URL(captured[0].url, 'http://127.0.0.1');
      expect(url.pathname).toBe('/method/integration/scopes');
      expect(url.searchParams.get('v')).toBe('1');
      expect(url.searchParams.get('language')).toBe('en');
      expect(captured[0].requestId).toBe(requestId);
      expect(captured[0].authorization).toBe('oauth local-test-token');
    } finally {
      await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    }
  });
});
