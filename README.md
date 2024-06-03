# Mobile Automation Testing Setup

This repository contains the code for automating tests for the login functionality of the demo mobile application using Appium, WebDriverIO, Cucumber, and TypeScript.

## Installation and Setup

1. **Install Dependencies:**
   ```sh
   npm install
   ```

2. **Configure `wdio.conf.ts`:**

   Update the `wdio.conf.ts` file with the appropriate configuration for your Appium server and mobile application. Ensure you set the correct `platformName`, `deviceName`, `platformVersion`, `app`, and `automationName` according to your testing environment.


3. **Run Tests:**

   For Android:
   ```sh
   npm run test-android
   ```

   For iOS:
   ```sh
   npm run test-ios
   ```

## Project Structure

- **`features`**: Contains Cucumber feature files specifying test scenarios.
- **`features/step-definitions`**: Contains TypeScript files defining step definitions for Cucumber scenarios.
- **`pages`**: Contains classes for each page, implementing page object model design.
- **`app`**: Directory for storing the mobile application APK file.
- **`output/allure-results`**: Directory where Allure results are stored.
- **`output/allure-report`**: Directory where the Allure report is generated.
- **`tsconfig.json`**: TypeScript configuration file.
- **`wdio.conf.ts`**: WebDriverIO configuration file.
- **`.gitignore`**: Specifies files and directories to be ignored by git.

## Tools and Tech
* **Appium**: A tool for automating native, mobile web, and hybrid applications on iOS and Android platforms.
* **WebDriverIO**: A Next-gen WebDriver test framework for Node.js.
* **Cucumber**: A tool for running automated tests written in plain language.
* **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
* **Allure**: A flexible, lightweight multi-language test report tool that shows a very concise representation of what has been tested in a neat web report form.

## Test Scenarios

The tests are designed using Behavior-Driven Development (BDD) principles. The feature file contain scenarios that describe the expected behavior of the application in various situations.

## Generate Allure Reports

Allure is used to generate comprehensive and interactive test reports. The test results are saved in the `output/allure-results` directory, and the reports are generated in the `output/allure-report` directory. You can view the report by running:

Command to generate allure reports
```sh
allure generate output/allure-result --clean -o output/allure-report
```

Command to view allure results
```sh
allure serve output/allure-results
```

To generate and serve the Allure report, use:
```sh
npm run allure-report
```

This command will generate the report and open it in your default web browser.

## Notes

- The tests are written in TypeScript and use WebDriverIO for interacting with the mobile application through Appium.
- Cucumber is used for writing BDD-style test scenarios.
- Ensure that the `appium` service is installed and configured properly in the `wdio.conf.ts` file.
- The `.gitignore` file is configured to ignore unnecessary files and directories from being tracked by git, such as `node_modules`, `output`, and environment-specific files.
