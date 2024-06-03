import App from "./App";
import {$} from "@wdio/globals";

class CatalogPage extends App {
    private menuButton = this.getSelector('~open menu', '~tab bar option menu');
    private productHeader = this.getSelector(
        '//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView',
        '~container header'
    );

    public async clickOnMenuButton() {
        await $(this.menuButton).waitForDisplayed();
        await $(this.menuButton).click();
    }

    public async isProductHeaderDisplayed() {
        return await $(this.productHeader).isDisplayed();
    }
}

export default new CatalogPage();
