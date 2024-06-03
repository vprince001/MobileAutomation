import allureReporter from '@wdio/allure-reporter';
import {browser} from '@wdio/globals';
import * as fs from "fs";

type Step = {
    id: string,
    text: string,
    type: string,
    argument: undefined,
    astNodeIds: string[],
    keyword: string
}

type Scenario = {
    id: string,
    uri: string,
    astNodeIds: string[],
    tags: [],
    name: string,
    language: string,
    steps: object[]
}

export const hooks = {
    before() {
        console.log(`Platform: ${process.env.PLATFORM}`);
    },
    onPrepare() {
        fs.rmSync('./output/allure-result/', {recursive: true, force: true});
        fs.rmSync('./output/allure-report/', {recursive: true, force: true});
    },
    beforeScenario() {
        allureReporter.addOwner('Prince Verma');
        allureReporter.addArgument('Date', new Date().toLocaleString());
        allureReporter.addDescription('Automated test', 'text');
    },
    beforeStep(step: Step, scenario: Scenario) {
        console.log(`${scenario.name}: ${step.text}`);
    },
    async afterStep() {
        await browser.takeScreenshot();
    },

};
