import App from "./App";
import {$} from "@wdio/globals";

class LoginPage extends App {

    private loginOption = this.getSelector('~menu item log in', '~menu item log in');
    private usernameField = this.getSelector('~Username input field', '~Username input field');
    private passwordField = this.getSelector('~Password input field', '~Password input field');
    private loginButton = this.getSelector('~Login button', '~Login button');
    private genericErrorMessage = this.getSelector(
        '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView',
        '~generic-error-message'
    );
    private usernameErrorMessage = this.getSelector(
        '//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView',
        '~Username-error-message'
    );
    private passwordErrorMessage = this.getSelector(
        '//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView',
        '~Password-error-message'
    );

    public async clickOnLoginOption() {
        await $(this.loginOption).waitForDisplayed();
        await $(this.loginOption).click();
    }

    public async clickOnLoginButton() {
        await $(this.loginButton).waitForDisplayed();
        await $(this.loginButton).click();
    }

    public async getGenericErrorMessageText() {
        await $(this.genericErrorMessage).waitForDisplayed();
        return $(this.genericErrorMessage).getText();
    }

    public async getUsernameErrorMessageText() {
        await $(this.usernameErrorMessage).waitForDisplayed();
        return $(this.usernameErrorMessage).getText();
    }

    public async getPasswordErrorMessageText() {
        await $(this.passwordErrorMessage).waitForDisplayed();
        return $(this.passwordErrorMessage).getText();
    }

    public async updateUsernameField(username: string) {
        await $(this.usernameField).setValue(username);
    }

    public async updatePasswordField(password: string) {
        await $(this.passwordField).setValue(password);
    }
}

export default new LoginPage();
