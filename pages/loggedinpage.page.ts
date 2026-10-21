import { Page, Locator } from "@playwright/test";

export class LoggedInPage {
    readonly logoutButton: Locator;

    constructor(private page: Page) {
        this.logoutButton = this.page.getByRole('link', { name: 'Log out' });
    }

    async logout() {
        await this.logoutButton.click();
    }

}
