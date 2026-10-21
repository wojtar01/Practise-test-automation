import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginpage.page";
import { LoggedInPage } from "../pages/loggedinpage.page";

type Pages = {
    loginPage: LoginPage;
    loggedInPage: LoggedInPage;
};

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    loggedInPage: async ({ page }, use) => {
        await use(new LoggedInPage(page))
    },
});

export { expect } from '@playwright/test';