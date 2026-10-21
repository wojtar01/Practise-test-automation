import { test, expect } from '../fixtures/page.fixture';
import { Credentials } from '../data/test.data';

test.beforeEach(async ({ page }) => {
    await page.goto('')
    await page.pause()
})

test("Happy Path + Logout", async ({ page, loginPage, loggedInPage }) => {

    await loginPage.login(Credentials.standardUser.username, Credentials.standardUser.password)

    await expect(page).toHaveURL(/.*logged-in-successfully/);
    await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
    await expect(page.getByRole('strong')).toContainText('Congratulations student. You successfully logged in!');
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    await loggedInPage.logout()


});

test("Negative username", async ({ page, loginPage }) => {
    await loginPage.login(Credentials.invalidLogin.username, Credentials.invalidLogin.password)
    await expect(page.locator('#error')).toContainText('Your username is invalid!');

})

test("Negative password", async ({ page, loginPage }) => {
    await loginPage.login(Credentials.invalidPassword.username, Credentials.invalidPassword.password)
    await expect(page.locator('#error')).toContainText('Your password is invalid!');
})
