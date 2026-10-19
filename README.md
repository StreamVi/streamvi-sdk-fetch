# StreamVi SDK (Fetch-based)

## Version 3.0.0

Regenerated from the production API schema: 354 operations, including 73 new operations. Before upgrading from 2.x, read the [changes and migration notes](CHANGELOG.md). Some method signatures have changed.

Library for working with StreamVi API along with OAuth authorization example using [passport-streamvi](https://www.npmjs.com/package/passport-streamvi) library.

This is a fetch-based version of the StreamVi SDK. The original axios-based version is available at: [https://github.com/StreamVi/streamvi-sdk](https://github.com/StreamVi/streamvi-sdk)

API methods documentation is available at: [https://dev.streamvi.io](https://dev.streamvi.io)

## Features

- ✅ StreamVi SDK library for TypeScript/JavaScript
- ✅ Built on native fetch API (no external HTTP dependencies)
- ✅ Ready-to-use examples with OAuth2 authorization

## Installation

### Install from GitHub repository

```bash
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git
```

### Install specific version/tag

```bash
npm install git+https://github.com/StreamVi/streamvi-sdk-fetch.git#v3.0.0
```

### Install for development (clone repository)

```bash
git clone https://github.com/StreamVi/streamvi-sdk-fetch.git
cd streamvi-sdk-fetch
npm install
```

## Configuration

Create a `.env` file in the project root:

```bash
STREAMVI_CLIENT_ID=your_client_id
STREAMVI_CLIENT_SECRET=your_client_secret
CALLBACK_URL=http://localhost:3000/auth/streamvi/callback
PORT=3000
```

## Usage

### Import modules after installation

After installing from GitHub, you can import the modules like this:

```typescript
// Import main configuration class
import { StreamViSdkConfig } from 'streamvi-sdk-fetch';

// Import specific API classes and enums
import { 
  ProjectApi, 
  UserProjectGetProjectInfoV1LanguageEnum,
  PaySettingApi,
  PaySettingGetSettingV3LanguageEnum 
} from 'streamvi-sdk-fetch';
```

### Running example server for StreamVi authorization

If you cloned the repository for development:

```bash
npm run example
```

Open http://localhost:3000 and login via StreamVi.

### Example of getting project information via SDK

```typescript
import { StreamViSdkConfig, ProjectApi, UserProjectGetProjectInfoV1LanguageEnum } from 'streamvi-sdk-fetch';

async function getProjectInfo(accessToken: string, projectId: number, language: UserProjectGetProjectInfoV1LanguageEnum = UserProjectGetProjectInfoV1LanguageEnum.ru) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const projectApi = new ProjectApi(sdkConfig.configuration);

  const response = await projectApi.userProjectGetProjectInfoV1({
    language: language,
    project_id: projectId
  });
  return response; // Response contains data directly, access via response.data.name, response.data.photo_100, etc.
}

// Usage example:
const projectInfo = await getProjectInfo(accessToken, projectId);
console.log(projectInfo.data.name); // Project name
console.log(projectInfo.data.photo_100); // Project avatar URL
```

### Example of using PaySetting API with version 3

```typescript
import { StreamViSdkConfig, PaySettingApi, PaySettingGetSettingV3LanguageEnum } from 'streamvi-sdk-fetch';

async function getPaySettings(accessToken: string, projectId: number, language: PaySettingGetSettingV3LanguageEnum = PaySettingGetSettingV3LanguageEnum.ru) {
  const sdkConfig = new StreamViSdkConfig({ accessToken });
  const paySettingApi = new PaySettingApi(sdkConfig.configuration);

  const response = await paySettingApi.paySettingGetSettingV3({
    language: language,
    project_id: projectId
  });
  return response; // Response contains data directly, access via response.data
}
```

### Complete working example

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

  async getProjectInfo(projectId: number, language = UserProjectGetProjectInfoV1LanguageEnum.en) {
    const api = new ProjectApi(this.config.configuration);
    return await api.userProjectGetProjectInfoV1({
      language,
      project_id: projectId
    });
  }

  async getPaymentList(language = PaymentListV1LanguageEnum.en, pageSize = 10, page = 1) {
    const api = new PaymentApi(this.config.configuration);
    return await api.paymentListV1({
      language,
      pageSize,
      page
    });
  }
}

// Usage
const client = new StreamViClient('your_access_token');
const projectInfo = await client.getProjectInfo(123);
console.log(projectInfo.data);
```

## Available APIs

After generation, the following API clients are available:

The full class list is available in the [generated client exports](src/generated/api2/src/apis/index.ts). Each class file contains method signatures, parameters and response types.

## Project Structure

```
src/
├── generated/
│   └── api2/           # Generated API client
├── scripts/            # API generation scripts
└── streamvi-sdk-config.ts      # SDK configuration

example/
├── server.ts           # Main server file
├── config/
│   ├── passport.ts     # Passport.js configuration
│   └── session.ts      # Session configuration
├── routes/
│   └── index.ts        # Application routes
└── helpers/            # Helper functions
```

## Example Application

The `example/` folder contains a complete Express application demonstrating:

- Authorization via StreamVi OAuth2
- Getting project information
- Authorization error handling
- User session management
- Proper error display and user feedback

### Example Structure

- **server.ts** - main server file with middleware setup and environment validation
- **config/passport.ts** - StreamVi authorization strategy configuration with proper error handling
- **config/session.ts** - Express session settings with security considerations
- **routes/index.ts** - routes for authorization, data display, and comprehensive error handling

### Example Functionality

1. **Home page** (`/`) - displays project information with avatar and details, or offers authorization
2. **Authorization** (`/auth/streamvi`) - redirects to StreamVi for authorization
3. **Callback** (`/auth/streamvi/callback`) - handles authorization result with detailed error processing
4. **Logout** (`/logout`) - clears user session and redirects to home
5. **Error handling** (`/login`) - displays authorization errors with detailed information
6. **Session management** - stores access tokens and project IDs securely

### Authorization Flow

The example demonstrates a complete OAuth2 flow:

1. User visits the home page
2. If not authorized, they see a login button
3. Clicking login redirects to StreamVi OAuth2 endpoint
4. After authorization, StreamVi redirects back with authorization code
5. The callback handler exchanges the code for access token
6. Access token and project ID are stored in session
7. User is redirected to home page showing project information

### Error Handling

The example includes comprehensive error handling:

- **Environment validation** - checks for required environment variables on startup
- **Authorization errors** - displays detailed error messages from StreamVi
- **API errors** - shows API response errors with full context
- **Session errors** - handles session destruction and recreation
- **Network errors** - graceful handling of network issues

## Migration from Axios to Fetch

`streamvi-sdk` and `streamvi-sdk-fetch` are separate packages. When switching transports, update imports, language constants and response/error handling:

- Axios returns an `AxiosResponse`; its `.data` is the HTTP response body. Fetch returns the parsed body directly. A `data` field defined by the API itself is still preserved.
- An unsuccessful HTTP response throws `ResponseError` with `error.response.status`. Network errors and missing required parameters use different error types.
- Language enum members are `ru` and `en` in Fetch, compared with `Ru` and `En` in Axios.
- Transport options are `RequestInit` options, such as `signal`, instead of Axios options such as `timeout`.
- The optional request ID property is `X_Client_Request_Id` in Fetch and `'X-Client-Request-Id'` in Axios.

For changes from SDK 2.x to 3.0.0, see the [release notes](CHANGELOG.md).

## API Client Generation

The API client is automatically generated from the StreamVi OpenAPI specification with built-in error correction and optimization.

### Update API client

To update the API client after server changes:

```bash
npm run gen:api-prod
npm run build
```

This command downloads the latest API specification and generates an optimized TypeScript client.

> **For library developers**: See [README_DEVELOPMENT_EN.md](README_DEVELOPMENT_EN.md) for detailed information about the generation process, error correction, and development workflows.

## Scripts

- `npm run example` - run example server with authorization
- `npm run build` - build the project
- `npm run gen:api-prod` - generate API from production server
- `npm run lint` - code check

## License

MIT

## Documentation Generation

To generate documentation, use:

```
npm run build:docs
```

## Code Formatting

To check formatting:

```
npm run prettier
```

To auto-format:

```
npm run format
```