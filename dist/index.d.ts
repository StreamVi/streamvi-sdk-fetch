/**
 * @fileoverview StreamVi SDK - библиотека для работы с API StreamVi
 *
 * Этот пакет предоставляет TypeScript/JavaScript SDK для работы с API StreamVi,
 * включая все необходимые типы, интерфейсы и клиенты API.
 *
 * @example
 * ```typescript
 * import { StreamViSdkConfig } from 'streamvi-sdk-fetch';
 * import { ProjectApi } from 'streamvi-sdk-fetch';
 *
 * const config = new StreamViSdkConfig({ accessToken: 'your_token' });
 * const projectApi = new ProjectApi(config.configuration);
 * ```
 *
 * @version 1.0.5
 * @author StreamVi <info@streamvi.io>
 * @license MIT
 */
export * from './generated/api2';
export { StreamViSdkConfig } from './streamvi-sdk-config';
//# sourceMappingURL=index.d.ts.map