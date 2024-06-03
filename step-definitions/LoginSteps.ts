import {Given, Then, When} from '@cucumber/cucumber';
import CatalogPage from "../pages/CatalogPage";
import LoginPage from "../pages/LoginPage";

Given('I am on the login page', async () => {
    console.log("Navigating to the login page...");
    await CatalogPage.clickOnMenuButton();
    await LoginPage.clickOnLoginOption()
});

When('I attempt to login with locked user', async () => {
    const lockedUsername =  process.env.LOCKED_USERNAME as string;
    const lockedPassword = process.env.LOCKED_PASSWORD as string;
    console.log(`Login with username ${lockedUsername} and password ${lockedPassword}`);
    await LoginPage.updateUsernameField(lockedUsername);
    await LoginPage.updatePasswordField(lockedPassword);
    await LoginPage.clickOnLoginButton();
});

When('I attempt to login with {string} and {string}', async (username: string, password: string) => {
    console.log(`Login with username ${username} and password ${password}`);
    await LoginPage.updateUsernameField(username);
    await LoginPage.updatePasswordField(password);
    await LoginPage.clickOnLoginButton();
});

When('I attempt to login with valid user', async () => {
    const validUsername =  process.env.VALID_USERNAME as string;
    const validPassword = process.env.VALID_PASSWORD as string;
    console.log(`Login with username ${validUsername} and password ${validPassword}`);

    await LoginPage.updateUsernameField(validUsername);
    await LoginPage.updatePasswordField(validPassword);
    await LoginPage.clickOnLoginButton();
});

Then('I should see a generic error message indicating {string}', async (message: string) => {
    console.log(`Assertion on generic error message - ${message}`);
    const errorMessage = await LoginPage.getGenericErrorMessageText();
    expect(errorMessage).toMatch(message);
});

Then('I should see a username error message indicating {string}', async (message: string) => {
    console.log(`Assertion on username error message - ${message}`);
    const errorMessage = await LoginPage.getUsernameErrorMessageText();
    expect(errorMessage).toMatch(message);
});

Then('I should see a password error message indicating {string}', async (message: string) => {
    console.log(`Assertion on password error message - ${message}`);
    const errorMessage = await LoginPage.getPasswordErrorMessageText();
    expect(errorMessage).toMatch(message);
});

Then('I should be redirected to the product catalog page', async () => {
    console.log(`Assertion on successful login`);
    expect(await CatalogPage.isProductHeaderDisplayed()).toBeTruthy();
    console.log("Product catalog page is displayed.");
});
