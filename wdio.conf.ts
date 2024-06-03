import * as dotenv from 'dotenv';
import {hooks} from "./hooks";

dotenv.config();

const androidCapabilities = {
    platformName: 'Android',
    'appium:deviceName': 'Pixel_6_Pro_API_31',
    'appium:platformVersion': '12.0',
    'appium:app': './app/myDemoAppRN.apk',
    'appium:automationName': 'UiAutomator2',
    'appium:newCommandTimeout': 500
};

const iosCapabilities = {
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 15 Pro Max',
    'appium:platformVersion': '17.2',
    'appium:app': './app/MyRNDemoApp.app',
    'appium:automationName': 'XCUITest',
    'appium:newCommandTimeout': 500
};

const isAndroid = process.env.PLATFORM === 'android';

export const config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './features/**/*.feature'
    ],
    capabilities: [isAndroid ? androidCapabilities : iosCapabilities],
    services: ['appium'],
    framework: 'cucumber',
    cucumberOpts: {
        require: [`./step-definitions/**/*.ts`],
        tagExpression: '',
        timeout: 60000,
        strict: true
    },
    reporters: [
        ['allure', {
            outputDir: './output/allure-result/',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true,
        }],
    ],
    ...hooks,
};
