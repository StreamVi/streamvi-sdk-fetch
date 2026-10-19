# StreamVi SDK (Fetch-based)

## Версия 3.0.0

Клиент обновлён по схеме действующего API: 354 операции, в том числе 73 новых. Перед обновлением с 2.x прочитайте [изменения и порядок перехода](CHANGELOG.md). У некоторых методов изменились аргументы.

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
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git#v3.0.0
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
  ProjectApi, 
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
import { StreamViSdkConfig, ProjectApi, UserProjectGetProjectInfoV1LanguageEnum } from 'streamvi-sdk-fetch';

async function getProjectInfo(accessToken: string, projectId: number, language: UserProjectGetProjectInfoV1LanguageEnum = UserProjectGetProjectInfoV1LanguageEnum.ru) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const projectApi = new ProjectApi(sdkConfig.configuration);

  const response = await projectApi.userProjectGetProjectInfoV1({
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
  ProjectApi, 
  UserProjectGetProjectInfoV1LanguageEnum,
  PaymentApi,
  PaymentListV1LanguageEnum 
} from 'streamvi-sdk-fetch';

class StreamViClient {
  private config: StreamViSdkConfig;

  constructor(accessToken: string) {
    this.config = new StreamViSdkConfig({ accessToken });
  }

  async getProjectInfo(projectId: number, language = UserProjectGetProjectInfoV1LanguageEnum.ru) {
    const api = new ProjectApi(this.config.configuration);
    return await api.userProjectGetProjectInfoV1({
      language,
      project_id: projectId
    });
  }

  async getPaymentList(language = PaymentListV1LanguageEnum.ru, pageSize = 10, page = 1) {
    const api = new PaymentApi(this.config.configuration);
    return await api.paymentListV1({
      language,
      pageSize,
      page
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

Список классов доступен в [экспортах сгенерированного клиента](src/generated/api2/src/apis/index.ts). В соответствующем файле класса находятся сигнатуры, параметры и типы ответов.

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

## Переход с Axios на Fetch

`streamvi-sdk` и `streamvi-sdk-fetch` являются отдельными пакетами. При смене транспорта обновите импорты, константы языка и обработку ответов и ошибок:

- Axios возвращает `AxiosResponse`, где `.data` содержит тело HTTP-ответа. Fetch возвращает разобранное тело сразу. Поле `data`, предусмотренное самим API, сохраняется.
- Неуспешный HTTP-ответ вызывает `ResponseError` со статусом `error.response.status`. Сетевые ошибки и отсутствие обязательных параметров имеют другие типы.
- Константы языка у Fetch называются `ru` и `en`, у Axios: `Ru` и `En`.
- Параметры транспорта соответствуют `RequestInit`, например `signal`, вместо параметров Axios, таких как `timeout`.
- Необязательное поле идентификатора запроса у Fetch называется `X_Client_Request_Id`, у Axios: `'X-Client-Request-Id'`.

Изменения при обновлении SDK с 2.x до 3.0.0 описаны в [заметках к выпуску](CHANGELOG.md).

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