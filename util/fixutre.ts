import {test, Page } from "@playwright/test";

// 1. Define the TypeScript type for your custom fixtures
type MyFixtures = {
    authPage: Page;
};

// 2. Extend the test object by registering your fixtures
   export const customtest = test.extend<MyFixtures>({
    authPage: async ({page}, use) => 
        {
        await page.goto("https://naveenautomationlabs.com/opencart/");
        await page.getByText('My Account').first().click();
        await page.getByRole('link', { name: /Login/i }).first().click();
        await page.getByPlaceholder('E-Mail Address').fill("rashijindal@gmail.com");
        await page.getByPlaceholder('Password').fill('12345');
        await page.locator('input.btn.btn-primary').click();
        await use(page);     
        }
});
