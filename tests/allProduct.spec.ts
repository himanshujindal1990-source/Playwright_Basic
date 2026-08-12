import {test, expect} from "@playwright/test";

test ("Verify get all product title", async({page})=>{
    page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("anshika@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
    await page.locator("#login").click();
    //await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
     const products = page.locator(".card-body b");
    const productTitles = await page.locator(".card-body b").allTextContents();
    console.log(productTitles);

    

})