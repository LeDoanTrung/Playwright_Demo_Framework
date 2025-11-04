# Unsplash Playwright Automation Framework

This project is an automation testing framework for Unsplash using Playwright. It supports both UI and API testing with a well-structured Page Object Model pattern.

## 📋 Features

- Page Object Model implementation
- UI and API testing support
- Parallel test execution
- Multiple browser support (Chrome, Firefox)
- HTML test reports
- Configuration management
- Custom element wrapper
- Shared fixtures and hooks

## 🗂️ Project Structure

```
├── configurations/              # Configuration management
│   ├── appsettings.json        # Environment configurations and test settings
│   └── configuration.js        # Configuration loader and manager
├── constant/                   # Application constants
│   ├── api-constant.js        # API endpoints and routes
│   └── filePath_constant.js   # File paths and locations
├── core/                      # Core framework components
│   ├── api/                   
│   │   └── api-client.js      # Base API client for HTTP requests
│   ├── browser/               
│   │   ├── browser-management.js  # Browser initialization and control
│   │   └── browser-utils.js   # Browser utility functions
│   ├── element/               
│   │   └── element.js         # Custom element wrapper and actions
│   ├── extension/             
│   │   └── rest-extension.js  # REST API helper functions
│   ├── fixture/               
│   │   └── base-fixture.js    # Base test fixtures
│   └── util/                  
│       └── json_helper.js     # JSON manipulation utilities
├── data-provider/            
│   └── data-provider.js       # Test data management and providers
├── fixtures/                  
│   └── page-fixture.js        # Page-specific test fixtures
├── hooks/                     
│   └── hooks.js              # Test hooks for setup and teardown
├── page-object/              # Page Object Model implementation
│   ├── base-page.js         # Base page with common functions
│   ├── edit-profile-page.js # Profile editing page objects
│   ├── home-page.js        # Home page objects and actions
│   ├── login-page.js       # Login page objects and actions
│   ├── profile-page.js     # Profile page objects
│   └── user-portfolio-page.js # Portfolio page objects
├── resource/                # Test resources
│   └── schema/             # API response schemas
│       ├── liked-photos-schema.json
│       ├── list-photos-schema.json
│       └── photographer-schema.json
├── services/               # API service layer
│   ├── photo-service.js   # Photo-related API services
│   ├── photographer-service.js # Photographer API services
│   └── user-service.js    # User management services
├── share-data/            # Shared test data
│   └── data-storage.js    # Data sharing between tests
├── test-data/            # Test data files
│   ├── photographer-data.js # Photographer test data
│   └── user-data.js      # User test data
└── tests/                # Test suites
    ├── api-test/         # API test cases
    │   └── user-profile-test.spec.js
    └── ui-test/          # UI test cases
        ├── follow-photographer-test.spec.js
        ├── like-photos-test.spec.js
        └── update-user-profile-test.spec.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LeDoanTrung/Playwright_Demo_Framework.git
```

2. Navigate to the project directory:
```bash
cd Unspash_Playwright_Automation
```

3. Install dependencies:
```bash
npm install
```

4. Install Playwright browsers:
```bash
npx playwright install
```

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test tests/ui-test/update-user-profile-test.spec.js
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
```

### Run tests in UI mode
```bash
npx playwright test --ui
```

### View test report
```bash
npx playwright show-report
```

## 📊 Test Report

After running the tests, an HTML report will be generated in the `playwright-report` directory. You can view it by running:
```bash
npx playwright show-report
```

## 🏗️ Framework Architecture

### Core Components

#### 1. Configuration Management (`configurations/`)
- **appsettings.json**: Stores environment-specific configurations, test settings, and global parameters
- **configuration.js**: Manages loading and accessing configuration values throughout the framework

#### 2. Core Framework (`core/`)
- **API Client** (`core/api/`): Base HTTP client with request/response handling
- **Browser Management** (`core/browser/`): Controls browser lifecycle and provides utilities
- **Element Wrapper** (`core/element/`): Custom element handling with enhanced actions
- **Extensions** (`core/extension/`): Additional utilities for REST API testing
- **Base Fixtures** (`core/fixture/`): Fundamental test fixtures for setup/teardown
- **Utilities** (`core/util/`): Helper functions for common operations

#### 3. Page Object Model (`page-object/`)
- Implements the Page Object pattern for UI test maintainability
- Each page has its own class with locators and actions
- Inherits from `base-page.js` for common functionality
- Separates UI interaction logic from test logic

#### 4. Service Layer (`services/`)
- Provides API interaction abstraction
- Implements business logic for API operations
- Separates API calls from test logic
- Handles response parsing and validation

#### 5. Test Data Management
- **Data Provider** (`data-provider/`): Manages test data sources
- **Test Data** (`test-data/`): Static test data files
- **Shared Data** (`share-data/`): Runtime data sharing between tests

#### 6. Test Organization (`tests/`)
- **API Tests** (`api-test/`): End-to-end API test scenarios
- **UI Tests** (`ui-test/`): End-to-end browser test scenarios
- Uses fixtures for setup/teardown
- Implements test hooks for common operations

#### 7. Resource Management (`resource/`)
- **JSON Schemas** (`schema/`): API response validation schemas
- Ensures API response structure consistency

### Framework Features

1. **Parallel Execution**
   - Tests can run concurrently for faster execution
   - Isolated test contexts prevent interference

2. **Cross-browser Testing**
   - Supports multiple browsers (Chrome, Firefox)
   - Consistent behavior across browsers

3. **Reporting**
   - HTML test reports with detailed results
   - Screenshots and videos for failed tests
   - Execution timeline and test durations

4. **Data Management**
   - External test data files
   - Runtime data sharing
   - Environment-specific configurations

5. **API Testing**
   - Request/response validation
   - Schema validation
   - Status code verification
   - Response body assertions

6. **UI Testing**
   - Page Object Model
   - Element wrapper for reliable interactions
   - Automatic waiting mechanisms
   - Screenshot capture on failure
- `BasePage`: Contains common functionality for all pages
- Individual page objects inherit from BasePage
- Encapsulated element locators and page-specific methods

### Core Components
- Element wrapper for simplified element handling
- Browser management utilities
- API client for API testing
- Custom fixtures and hooks

### Test Organization
- Separate directories for UI and API tests
- Clear separation of test data and test logic
- Shared fixtures for common setup/teardown

## 🔧 Configuration

The framework uses configuration files in the `configurations` directory:
- `appsettings.json`: Environment-specific settings
- `configuration.js`: Configuration helper methods

## 📝 Test Examples

### UI Test Example
```javascript
test('Update user profile', async ({ page }) => {
    await loginPage.login(email, password);
    await profilePage.updateProfile(newName, bio);
    await expect(profilePage.successMessage).toBeVisible();
});
```

### API Test Example
```javascript
test('Get user profile via API', async () => {
    const response = await userService.getUserProfile(username);
    expect(response.status()).toBe(200);
});
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## 📄 License

This project is licensed under the MIT License.