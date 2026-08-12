

/* Test1:
1. Open Application.before all

2. Login . before each
3.        find product
4. Logout  after each

Test2:
1. Open Application.before all
2. Login before each
3.     add one product to Car
4. Logout after each
 */ 

import {test, expect} from "@playwright/test";

/* test.beforeAll("Open App", async ({page})=>{
await page.goto("https://www.demoblaze.com/index.html");
}); */

test.beforeEach("login app", async({page})=>{
await page.goto("https://www.demoblaze.com/index.html");
await page.getByRole('link', {name: 'Log in'}).click();
await page.locator("#loginusername").fill("himanshujindal");
await page.locator("#loginpassword").fill("12345");
await page.getByRole('button', {name: 'Log in'}).click();
});

test.afterEach("Logout app", async ({page})=>{
await page.getByRole('link', {name: 'Log out'}).click();
});

test("Test1: Get the products", async({page})=>{
await page.locator(".card-title a").allTextContents();
    
})

test("Test2: select the product", async({page})=>{
await page.locator(".card-title a").nth(1).click();
      page.on('dialog', (dialog)=>{
      expect(dialog.message).toBe("Product added.");
      });
await page.getByRole('link', {name: 'Add to cart'}).click();
     
})