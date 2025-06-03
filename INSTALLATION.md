# StreamVi SDK Installation Guide / Руководство по установке StreamVi SDK

## English

### Installation from GitHub

You can install the StreamVi SDK directly from the GitHub repository:

```bash
# Install latest version
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git

# Install specific version/tag
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git#v1.0.1

# Install specific branch
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git#main
```

### Usage after installation

After installation, import the modules in your project:

```typescript
// Main configuration
import { StreamViSdkConfig } from 'streamvi-sdk-fetch';

// API classes and enums
import { 
  UserProjectApi, 
  UserProjectGetProjectInfoV1LanguageEnum,
  PaySettingApi,
  PaymentApi 
} from 'streamvi-sdk-fetch';

// Usage example
const config = new StreamViSdkConfig({ accessToken: 'your_token' });
const userProjectApi = new UserProjectApi(config.configuration);

const projectInfo = await userProjectApi.userProjectGetProjectInfoV1({
  language: UserProjectGetProjectInfoV1LanguageEnum.en,
  project_id: 123
});
```

### Development installation

For development or contributing:

```bash
git clone https://github.com/StreamVi/streamvi-sdk-fetch.git
cd streamvi-sdk-fetch
npm install
npm run build
```

---

## Русский

### Установка из GitHub

Вы можете установить StreamVi SDK напрямую из GitHub репозитория:

```bash
# Установить последнюю версию
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git

# Установить определённую версию/тег
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git#v1.0.1

# Установить определённую ветку
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git#main
```

### Использование после установки

После установки импортируйте модули в вашем проекте:

```typescript
// Основная конфигурация
import { StreamViSdkConfig } from 'streamvi-sdk-fetch';

// API классы и перечисления
import { 
  UserProjectApi, 
  UserProjectGetProjectInfoV1LanguageEnum,
  PaySettingApi,
  PaymentApi 
} from 'streamvi-sdk-fetch';

// Пример использования
const config = new StreamViSdkConfig({ accessToken: 'ваш_токен' });
const userProjectApi = new UserProjectApi(config.configuration);

const projectInfo = await userProjectApi.userProjectGetProjectInfoV1({
  language: UserProjectGetProjectInfoV1LanguageEnum.ru,
  project_id: 123
});
```

### Установка для разработки

Для разработки или внесения вклада:

```bash
git clone https://github.com/StreamVi/streamvi-sdk-fetch.git
cd streamvi-sdk-fetch
npm install
npm run build
```

---

## Package.json configuration

If you want to save the dependency in your package.json:

```json
{
  "dependencies": {
    "streamvi-sdk-fetch": "git+https://github.com/StreamVi/streamvi-sdk-fetch.git"
  }
}
```

Or with specific version:

```json
{
  "dependencies": {
    "streamvi-sdk-fetch": "git+https://github.com/StreamVi/streamvi-sdk-fetch.git#v1.0.1"
  }
}
```

## Yarn installation

If you use Yarn instead of npm:

```bash
# Latest version
yarn add git+https://github.com/StreamVi/streamvi-sdk-fetch.git

# Specific version
yarn add git+https://github.com/StreamVi/streamvi-sdk-fetch.git#v1.0.1
``` 