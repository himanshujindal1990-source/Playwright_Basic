import {test, expect} from "@playwright/test";


//shadow dom can be located in playwright with any locator except xpath.

test ("shadowdom", async({page})=> {

    await page.goto("https://shop.polymer-project.org/");
    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click();
    await page.waitForTimeout(3000);
    const allProducts = await page.locator("div.title").all();
    console.log(allProducts.length);
    expect(allProducts.length).toBe(16);

})