import { Configuration, ConfigurationParameters } from './generated/api2/src/runtime';

/**
 * Конфигурация SDK для работы с API StreamVi
 *
 * @example
 * ```typescript
 * const config = new StreamViSdkConfig({
 *   accessToken: 'your_access_token',
 *   basePath: 'https://napi.streamvi.io'
 * });
 * ```
 */
export class StreamViSdkConfig {
  private _accessToken: string;
  private readonly _parameters: ConfigurationParameters;
  private readonly _configuration: Configuration;

  /**
   * Создает новый экземпляр конфигурации SDK
   *
   * @param config - Объект конфигурации
   * @param config.accessToken - Токен доступа для авторизации API запросов
   * @param config.basePath - Базовый URL API (по умолчанию: https://napi.streamvi.io)
   */
  constructor({ accessToken, basePath = 'https://napi.streamvi.io' }: { accessToken: string, basePath?: string }) {
    this._accessToken = accessToken;
    this._parameters = {
      basePath,
      accessToken: `oauth ${accessToken}`,
      headers: { Authorization: `oauth ${accessToken}` },
    };
    this._configuration = new Configuration(this._parameters);
  }

  /**
   * Возвращает объект конфигурации для API клиентов
   *
   * @returns Конфигурация с настроенной авторизацией и базовым путем
   */
  get configuration() {
    return this._configuration;
  }

  /**
   * Устанавливает новый токен доступа
   *
   * @param token - Новый токен доступа
   */
  set accessToken(token: string) {
    this._accessToken = token;
    this._parameters.accessToken = `oauth ${token}`;
    this._parameters.headers = {
      ...this._parameters.headers,
      Authorization: `oauth ${token}`,
    };
  }

  /**
   * Возвращает текущий токен доступа
   *
   * @returns Текущий токен доступа
   */
  get accessToken() {
    return this._accessToken;
  }
}
