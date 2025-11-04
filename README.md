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
├── configurations/       # Configuration files
├── constant/            # Constants for API and file paths
├── core/               
│   ├── api/            # API client
│   ├── browser/        # Browser management
│   ├── element/        # Element handling
│   ├── fixture/        # Base fixtures
│   └── extension/      # Framework extensions
├── page-object/        # Page Objects
├── services/           # API services
├── tests/
│   ├── api-test/       # API tests
│   └── ui-test/        # UI tests
└── test-data/          # Test data
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LeDoanTrung/Unspash_Playwright_Automation.git
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

### Page Object Model
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