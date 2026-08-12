import{test, expect} from "@playwright/test"

let Products: string[] = ['laptop', 'gift card', 'smartphone'];

for (const item of Products) {

test("Search test for " + item, async ({page})=>{ // make paramter and pass

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator(".search-box-button").click();
    await page.locator(".product-title a").nth(0).textContent();
    await expect(page.locator(".product-title a").nth(0)).toContainText(item, {ignoreCase: true });
})
}