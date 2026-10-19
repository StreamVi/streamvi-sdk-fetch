import { createServer } from 'node:http';
import type { AddressInfo } from 'node:net';
import { ProjectApi, RtmpServerApi, StreamViSdkConfig } from '../src';

it('uses a replacement token in existing clients without changing another connection', async () => {
  const captured: Array<{ path: string; token?: string; marker?: string | string[] }> = [];
  const server = createServer((req, res) => {
    captured.push({ path: req.url!, token: req.headers.authorization, marker: req.headers['x-test-marker'] });
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ data: { id: 17, name: 'Local project' }, results: [] }));
  });
  await new Promise<void>(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const basePath = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    const config = new StreamViSdkConfig({ accessToken: 'old-test-token', basePath });
    config.configuration.headers!['X-Test-Marker'] = 'preserved';
    const project = new ProjectApi(config.configuration);
    const locations = new RtmpServerApi(config.configuration);
    const other = new ProjectApi(new StreamViSdkConfig({ accessToken: 'other-test-token', basePath }).configuration);
    const request = { language: 'ru' as const, project_id: 17 };
    const callExistingClients = async () => {
      await project.userProjectGetProjectInfoV1(request);
      await locations.methodRtmpServerListLocationsUnauthorizedV1({ language: 'ru' });
    };
    await callExistingClients();
    config.accessToken = 'new-test-token';
    await callExistingClients();
    await other.userProjectGetProjectInfoV1(request);
    expect(captured.map(item => item.token)).toEqual([
      ...Array(2).fill('oauth old-test-token'),
      ...Array(2).fill('oauth new-test-token'),
      'oauth other-test-token',
    ]);
    expect(captured.slice(0, 4).every(item => item.marker === 'preserved')).toBe(true);
    for (const item of captured) {
      expect(new URL(item.path, basePath).searchParams.get('v')).toBe('1');
    }
  } finally {
    server.closeAllConnections();
    await new Promise<void>((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});
