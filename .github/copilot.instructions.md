# GitHub Copilot Instructions

## Language Requirements
- Always generate code and comments in English, regardless of input language
- Use clear and descriptive variable/method names in English
- Document complex logic with English comments

## Architecture & Design Patterns
### Page Object Model (POM)
1. **Page Objects**
   - Create separate page classes for each web page
   - Place in `/page-object` directory
   - Follow naming convention: `{PageName}Page.js`
   - Include only page-specific locators and methods

2. **Base Classes**
   - Implement common functionality in base classes
   - Example: `BasePage.js` for shared page methods
   - Example: `BaseTest.js` for common test setup/teardown

3. **Components**
   - Create reusable components for repeated elements
   - Place in `/components` directory
   - Example: `Header.js`, `Footer.js`, `Navigation.js`

## Code Organization
### Directory Structure
```
├── page-object/          # Page Object classes
├── components/           # Reusable UI components
├── tests/               # Test files
├── core/                # Core functionality
├── utils/               # Utility functions
├── config/              # Configuration files
└── data/                # Test data
```

### File Naming Conventions
- Use kebab-case for file names: `login-page.js`
- Use PascalCase for class names: `LoginPage`
- Use camelCase for method names: `clickLoginButton`
- Use UPPER_SNAKE_CASE for constants: `DEFAULT_TIMEOUT`

## Code Quality Guidelines
### Method Design
1. **Single Responsibility**
   - Each method should do one thing well
   - Keep methods under 20 lines
   - Extract repeated code into helper methods

2. **Reusability**
   - Create utility functions for common operations
   - Use parameters instead of hardcoding values
   - Design methods to be flexible and configurable

3. **Method Naming**
   - Action methods: start with verb (click, input, select)
   - Getter methods: start with get/is/has
   - Assertion methods: start with verify/assert/expect

### Code Reuse Strategy
1. **Before Creating New Code**
   - Search existing codebase for similar functionality
   - Use semantic_search tool to find related code
   - Check utility classes for existing methods

2. **Reducing Duplication**
   - Extract common UI interactions to BasePage
   - Create shared utility functions
   - Use inheritance for similar components
   - Implement interface patterns for common behaviors

### Best Practices
1. **Locators**
   - Store in page objects as class properties
   - Use data-testid when possible
   - Prefer CSS selectors over XPath
   - Use meaningful names describing element purpose

2. **Async/Await**
   - Always use async/await for asynchronous operations
   - Handle timeouts and waits properly
   - Use explicit waits over implicit waits

3. **Error Handling**
   - Implement try-catch blocks for critical operations
   - Create custom error classes if needed
   - Log meaningful error messages

4. **Test Data**
   - Use data providers/factories
   - Avoid hardcoding test data
   - Implement data cleanup in teardown

## Documentation Requirements
1. **Method Documentation**
```javascript
/**
 * @description Performs login with given credentials
 * @param {string} username - User's email or username
 * @param {string} password - User's password
 * @returns {Promise<void>}
 * @example
 * await loginPage.login('user@example.com', 'password123');
 */
```

2. **Class Documentation**
```javascript
/**
 * @class LoginPage
 * @description Page object for the login page containing all related actions
 * @extends BasePage
 */
```

## Example Implementation
```javascript
export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailInput = '[data-testid="email-input"]';
        this.passwordInput = '[data-testid="password-input"]';
        this.loginButton = '[data-testid="login-button"]';
    }

    /**
     * @description Enters email in the login form
     * @param {string} email - User's email
     */
    async enterEmail(email) {
        await this.page.fill(this.emailInput, email);
    }

    /**
     * @description Performs complete login flow
     * @param {string} email - User's email
     * @param {string} password - User's password
     */
    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}
```

## Review Checklist
- [ ] Code follows POM structure
- [ ] Methods are small and focused
- [ ] No code duplication
- [ ] Proper error handling
- [ ] Documentation is complete
- [ ] Naming follows conventions
- [ ] Tests are independent
- [ ] Proper async/await usage
- [ ] Locators are maintainable