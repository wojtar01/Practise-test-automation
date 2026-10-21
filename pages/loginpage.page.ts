import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly username: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;

    constructor(private page: Page) {
        this.username = this.page.locator('#username');
        this.password = this.page.locator('#password');
        this.submitButton = this.page.locator('#submit');
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
    }

}
