# StreamVi SDK (Fetch-based)

Библиотека для работы с API StreamVi вместе с примером авторизации через OAuth с помощью библиотеки [passport-streamvi](https://www.npmjs.com/package/passport-streamvi).

Это версия StreamVi SDK на основе fetch API. Оригинальная версия на основе axios доступна по адресу: [https://github.com/StreamVi/streamvi-sdk](https://github.com/StreamVi/streamvi-sdk)

Документация по API методам доступна на: [https://dev.streamvi.io](https://dev.streamvi.io)

## Возможности

- ✅ SDK библиотека StreamVi для TypeScript/JavaScript
- ✅ Построена на нативном fetch API (без внешних HTTP зависимостей)
- ✅ Готовые примеры использования с авторизацией OAuth2

## Установка

### Установка из GitHub репозитория

```bash
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git
```

### Установка определённой версии/тега

```bash
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git#v1.0.1
```

### Установка для разработки (клонирование репозитория)

```bash
git clone https://github.com/StreamVi/streamvi-sdk-fetch.git
cd streamvi-sdk-fetch
npm install
```

## Конфигурация

Создайте файл `.env` в корне проекта:

```bash
STREAMVI_CLIENT_ID=ваш_client_id
STREAMVI_CLIENT_SECRET=ваш_client_secret
CALLBACK_URL=http://localhost:3000/auth/streamvi/callback
PORT=3000
```

## Использование

### Импорт модулей после установки

После установки из GitHub вы можете импортировать модули следующим образом:

```typescript
// Импорт основного класса конфигурации
import { StreamViSdkConfig } from 'streamvi-sdk-fetch';

// Импорт конкретных API классов и перечислений
import { 
  UserProjectApi, 
  UserProjectGetProjectInfoV1LanguageEnum,
  PaySettingApi,
  PaySettingGetSettingV3LanguageEnum 
} from 'streamvi-sdk-fetch';
```

### Запуск примера сервера для авторизации через StreamVi

Если вы клонировали репозиторий для разработки:

```bash
npm run example
```

Откройте http://localhost:3000 и выполните вход через StreamVi.

### Пример получения информации о проекте через SDK

```typescript
import { StreamViSdkConfig, UserProjectApi, UserProjectGetProjectInfoV1LanguageEnum } from 'streamvi-sdk-fetch';

async function getProjectInfo(accessToken: string, projectId: number, language: UserProjectGetProjectInfoV1LanguageEnum = UserProjectGetProjectInfoV1LanguageEnum.ru) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const userProjectApi = new UserProjectApi(sdkConfig.configuration);

  const response = await userProjectApi.userProjectGetProjectInfoV1({
    language: language,
    project_id: projectId
  });
  return response; // Ответ содержит данные напрямую, доступ через response.data.name, response.data.photo_100 и т.д.
}

// Пример использования:
const projectInfo = await getProjectInfo(accessToken, projectId);
console.log(projectInfo.data.name); // Название проекта
console.log(projectInfo.data.photo_100); // URL аватара проекта
```

### Пример использования PaySetting API с версией 3

```typescript
import { StreamViSdkConfig, PaySettingApi, PaySettingGetSettingV3LanguageEnum } from 'streamvi-sdk-fetch';

async function getPaySettings(accessToken: string, projectId: number, language: PaySettingGetSettingV3LanguageEnum = PaySettingGetSettingV3LanguageEnum.ru) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const paySettingApi = new PaySettingApi(sdkConfig.configuration);

  const response = await paySettingApi.paySettingGetSettingV3({
    language: language,
    project_id: projectId
  });
  return response; // Ответ содержит данные напрямую, доступ через response.data
}
```

### Полный рабочий пример

```typescript
import { 
  StreamViSdkConfig, 
  UserProjectApi, 
  UserProjectGetProjectInfoV1LanguageEnum,
  PaymentApi,
  PaymentGetPaymentHistoryV1LanguageEnum 
} from 'streamvi-sdk-fetch';

class StreamViClient {
  private config: StreamViSdkConfig;

  constructor(accessToken: string) {
    this.config = new StreamViSdkConfig({ accessToken });
  }

  async getProjectInfo(projectId: number, language = UserProjectGetProjectInfoV1LanguageEnum.ru) {
    const api = new UserProjectApi(this.config.configuration);
    return await api.userProjectGetProjectInfoV1({
      language,
      project_id: projectId
    });
  }

  async getPaymentHistory(projectId: number, language = PaymentGetPaymentHistoryV1LanguageEnum.ru) {
    const api = new PaymentApi(this.config.configuration);
    return await api.paymentGetPaymentHistoryV1({
      language,
      project_id: projectId
    });
  }
}

// Использование
const client = new StreamViClient('ваш_токен_доступа');
const projectInfo = await client.getProjectInfo(123);
console.log(projectInfo.data);
```

## Доступные API

После генерации доступны следующие API-клиенты:

- [AnalyticsApi](src/generated/api2/docs/AnalyticsApi.md)
- [AuthApi](src/generated/api2/docs/AuthApi.md)
- [BlogPageApi](src/generated/api2/docs/BlogPageApi.md)
- [BlogPageTagApi](src/generated/api2/docs/BlogPageTagApi.md)
- [BroadcastApi](src/generated/api2/docs/BroadcastApi.md)
- [CentrifugeApi](src/generated/api2/docs/CentrifugeApi.md)
- [ChannelApi](src/generated/api2/docs/ChannelApi.md)
- [ChannelSettingsApi](src/generated/api2/docs/ChannelSettingsApi.md)
- [ChatGatewayApi](src/generated/api2/docs/ChatGatewayApi.md)
- [HelpPageApi](src/generated/api2/docs/HelpPageApi.md)
- [LiveApi](src/generated/api2/docs/LiveApi.md)
- [MoneyFlowApi](src/generated/api2/docs/MoneyFlowApi.md)
- [NotifyHistoryApi](src/generated/api2/docs/NotifyHistoryApi.md)
- [NotifyUserApi](src/generated/api2/docs/NotifyUserApi.md)
- [PaySettingApi](src/generated/api2/docs/PaySettingApi.md)
- [PaymentApi](src/generated/api2/docs/PaymentApi.md)
- [PaySystemApi](src/generated/api2/docs/PaySystemApi.md)
- [PayoutApi](src/generated/api2/docs/PayoutApi.md)
- [PlanRestreamApi](src/generated/api2/docs/PlanRestreamApi.md)
- [PlanStorageApi](src/generated/api2/docs/PlanStorageApi.md)
- [PlanTranscodingApi](src/generated/api2/docs/PlanTranscodingApi.md)
- [PlatformsApi](src/generated/api2/docs/PlatformsApi.md)
- [PolicyPageApi](src/generated/api2/docs/PolicyPageApi.md)
- [ProjectApi](src/generated/api2/docs/ProjectApi.md)
- [ProjectChannelApi](src/generated/api2/docs/ProjectChannelApi.md)
- [ProjectChannelInviteApi](src/generated/api2/docs/ProjectChannelInviteApi.md)
- [ProjectHistoryApi](src/generated/api2/docs/ProjectHistoryApi.md)
- [PromoApi](src/generated/api2/docs/PromoApi.md)
- [PullServersApi](src/generated/api2/docs/PullServersApi.md)
- [ReferralsApi](src/generated/api2/docs/ReferralsApi.md)
- [ReleaseApi](src/generated/api2/docs/ReleaseApi.md)
- [RtmpServerApi](src/generated/api2/docs/RtmpServerApi.md)
- [SocialsApi](src/generated/api2/docs/SocialsApi.md)
- [StreamKeyApi](src/generated/api2/docs/StreamKeyApi.md)
- [StreamPullKeysApi](src/generated/api2/docs/StreamPullKeysApi.md)
- [TranscodersApi](src/generated/api2/docs/TranscodersApi.md)
- [TransactionsApi](src/generated/api2/docs/TransactionsApi.md)
- [UserApi](src/generated/api2/docs/UserApi.md)
- [UserProjectApi](src/generated/api2/docs/UserProjectApi.md)

Список также доступен в `src/generated/api2/api.ts`

## Структура проекта

```
src/
├── generated/
│   └── api2/           # Сгенерированный API-клиент
├── scripts/            # Скрипты генерации API
└── streamvi-sdk-config.ts      # Конфигурация SDK

example/
├── server.ts           # Основной файл сервера
├── config/
│   ├── passport.ts     # Конфигурация Passport.js
│   └── session.ts      # Конфигурация сессий
├── routes/
│   └── index.ts        # Маршруты приложения
└── helpers/            # Вспомогательные функции
```

## Пример приложения

В папке `example/` находится полноценное Express приложение, демонстрирующее:

- Авторизацию через StreamVi OAuth2
- Получение информации о проекте
- Обработку ошибок авторизации
- Управление сессиями пользователей
- Правильное отображение ошибок и обратную связь с пользователем

### Структура примера

- **server.ts** — основной файл сервера с настройкой middleware и валидацией окружения
- **config/passport.ts** — конфигурация стратегии авторизации StreamVi с правильной обработкой ошибок
- **config/session.ts** — настройки сессий Express с учетом безопасности
- **routes/index.ts** — маршруты для авторизации, отображения данных и комплексной обработки ошибок

### Функциональность примера

1. **Главная страница** (`/`) — отображает информацию о проекте с аватаром и деталями, или предлагает авторизацию
2. **Авторизация** (`/auth/streamvi`) — перенаправляет на StreamVi для авторизации
3. **Callback** (`/auth/streamvi/callback`) — обрабатывает результат авторизации с детальной обработкой ошибок
4. **Выход** (`/logout`) — очищает сессию пользователя и перенаправляет на главную
5. **Обработка ошибок** (`/login`) — отображает ошибки авторизации с подробной информацией
6. **Управление сессиями** — безопасно хранит токены доступа и ID проектов

### Поток авторизации

Пример демонстрирует полный поток OAuth2:

1. Пользователь посещает главную страницу
2. Если не авторизован, видит кнопку входа
3. Нажатие на вход перенаправляет на OAuth2 endpoint StreamVi
4. После авторизации StreamVi перенаправляет обратно с кодом авторизации
5. Обработчик callback обменивает код на токен доступа
6. Токен доступа и ID проекта сохраняются в сессии
7. Пользователь перенаправляется на главную страницу с информацией о проекте

### Обработка ошибок

Пример включает комплексную обработку ошибок:

- **Валидация окружения** — проверяет наличие необходимых переменных окружения при запуске
- **Ошибки авторизации** — отображает подробные сообщения об ошибках от StreamVi
- **Ошибки API** — показывает ошибки ответов API с полным контекстом
- **Ошибки сессий** — обрабатывает уничтожение и пересоздание сессий
- **Сетевые ошибки** — корректная обработка проблем с сетью

## Миграция с axios на fetch

Начиная с версии 2.0, SDK использует нативный fetch API вместо axios. Это изменение приносит несколько преимуществ:

- **Отсутствие внешних зависимостей** - уменьшает размер бандла
- **Лучшая совместимость с браузерами** - fetch нативно поддерживается в современных браузерах
- **Улучшенная производительность** - нет дополнительных накладных расходов HTTP-клиента

### Ключевые изменения:

1. **Структура ответов остается прежней** - ответы API по-прежнему содержат ту же структуру данных
2. **Обработка ошибок** - ошибки теперь являются нативными ошибками fetch вместо ошибок axios
3. **Конфигурация** - тот же интерфейс StreamViSdkConfig, но внутренне использует fetch

### Миграция кода:

Никаких изменений в существующем коде не требуется! API интерфейс остается идентичным:

```typescript
// Этот код работает так же, как и раньше
const response = await userProjectApi.userProjectGetProjectInfoV1({
  language: language,
  project_id: projectId
});
// Доступ к данным через response.data.name, response.data.photo_100 и т.д.
```

## Генерация API-клиента

API-клиент автоматически генерируется из OpenAPI спецификации StreamVi со встроенной коррекцией ошибок и оптимизацией.

### Обновление API-клиента

Чтобы обновить API-клиент после изменений на сервере:

```bash
npm run gen:api-prod
npm run build
```

Эта команда скачивает последнюю спецификацию API и генерирует оптимизированный TypeScript клиент.

> **Для разработчиков библиотеки**: См. [README_DEVELOPMENT.md](README_DEVELOPMENT.md) для подробной информации о процессе генерации, коррекции ошибок и рабочих процессах разработки.

## Скрипты

- `npm run example` — запуск примера сервера с авторизацией
- `npm run build` — сборка проекта
- `npm run gen:api-prod` — генерация API с production-сервера
- `npm run lint` — проверка кода

## Лицензия

MIT

## Генерация документации

Для генерации документации используйте:

```
npm run build:docs
```

## Форматирование кода

Проверить форматирование:

```
npm run prettier
```

Автоформатирование:

```
npm run format
``` 