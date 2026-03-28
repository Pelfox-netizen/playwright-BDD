# Playwright BDD Demo

A Behavior-Driven Development (BDD) testing framework combining Playwright and Cucumber for end-to-end testing with human-readable test scenarios.

## Overview

This project demonstrates how to use Playwright with Cucumber to write and execute BDD tests. It allows you to write test scenarios in Gherkin language (feature files) and implement the corresponding step definitions in TypeScript.

## Technologies & Tools

- **Playwright** - Cross-browser end-to-end testing framework
- **Cucumber** - BDD framework for writing tests in Gherkin syntax
- **playwright-bdd** - Integration library connecting Playwright and Cucumber
- **TypeScript** - Type-safe testing code
- **Node.js** - JavaScript runtime

## Project Structure

```
playwright-BDD/
├── features/                      # BDD feature files
│   ├── lighthouse-ai-home.feature # Feature scenarios in Gherkin
│   └── steps/
│       └── homepage.steps.ts      # Step definitions for homepage tests
│   └── support/
│       └── hooks.ts               # Test hooks (before/after scenarios)
├── tests/                         # Traditional Playwright tests
│   └── example.spec.ts
├── playwright-report/             # Generated Playwright test reports
├── test-results/                  # Test execution results
├── cucumber.cjs                   # Cucumber configuration
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Project dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # This file
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd playwright-BDD
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

### BDD Tests (Cucumber + Playwright)
Run all BDD tests:
```bash
npm run test:bdd
```

View the BDD test report:
```bash
npm run test:bdd:report
```

### Playwright Tests
Run all Playwright tests:
```bash
npm test
```

Run tests in headed mode (with browser UI):
```bash
npm run test:headed
```

Run tests in UI mode (interactive test explorer):
```bash
npm run test:ui
```

View Playwright test report:
```bash
npm run report
```

## Writing BDD Tests

### Create a Feature File
Feature files go in `features/` directory with `.feature` extension:

```gherkin
Feature: Homepage functionality

  Scenario: User can access the homepage
    Given the user navigates to the homepage
    When the page loads
    Then the homepage is displayed
```

### Create Step Definitions
Step definitions go in `features/steps/` directory with `.steps.ts` extension:

```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';

let page: Page;

Given('the user navigates to the homepage', async () => {
  page = await browser.newPage();
  await page.goto('https://example.com');
});

Then('the homepage is displayed', async () => {
  expect(await page.title()).toContain('Example');
});
```

## Test Hooks

Test hooks are configured in `features/support/hooks.ts` for setup and teardown operations:

```typescript
import { Before, After } from '@cucumber/cucumber';

Before(async function() {
  // Setup before each scenario
});

After(async function() {
  // Cleanup after each scenario
});
```

## Configuration Files

- `playwright.config.ts` - Playwright configuration (browsers, baseURL, timeout, etc.)
- `cucumber.cjs` - Cucumber configuration (step definitions location, reporting)
- `tsconfig.json` - TypeScript compiler options

## Best Practices

1. **Keep scenarios simple** - Each scenario should test one behavior
2. **Use meaningful step descriptions** - Steps should be understandable by non-technical stakeholders
3. **Follow DRY principle** - Reuse step definitions across multiple scenarios
4. **Use page object model** - Create helper classes for page interactions
5. **Run tests in CI/CD** - Automate test execution in your pipeline

## Troubleshooting

### Tests fail to run
- Ensure all dependencies are installed: `npm install`
- Check that browsers are properly installed: `npx playwright install`

### TypeScript errors
- Verify TypeScript configuration in `tsconfig.json`
- Run `npm run test:bdd` to compile and execute

### Report not generating
- Check Cucumber configuration in `cucumber.cjs`
- Ensure write permissions in project directory

## Contributing

1. Create a new feature file for your scenario
2. Implement step definitions in the steps directory
3. Run tests locally before pushing
4. Ensure all tests pass in CI/CD pipeline

## License

[Add your license here]

## Support

For issues or questions, please open an issue in the repository.
