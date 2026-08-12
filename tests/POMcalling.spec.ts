import{test, expect, Page} from "@playwright/test"
import{LoginPage} from "../Pages/LoginPage";

test ('Validate Logins', async ({page})=>{

        await page.goto("https://www.demoblaze.com/");

        const login:LoginPage = new LoginPage(page); // created a object for LoginPage class.
         
        await login.clickLoginLink();
        await login.fillUserName("Himanshujindal");
        await login.fillPassword("12345");
        await login.clickLoginButton();
        await expect(page.locator("#logout2")).toHaveText('Log out');
        });

test ('Validate Logins by one mothod calling', async ({page})=>{

       await page.goto("https://www.demoblaze.com/");

       const login:LoginPage = new LoginPage(page); // created a object for LoginPage class.

        await login.performLogin("Himanshujindal", "12345");
        await expect(page.locator("#logout2")).toHaveText('Log out');
         
        });