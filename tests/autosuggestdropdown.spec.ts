import{test, expect, Locator} from "@playwright/test"

test ("Verify dynamic drop down or auto  suggest", async ({page})=>{

    await page.goto("https://flipkart.com/");
    await page.waitForTimeout(2000);
    await page.locator(".b3wTlE").click();
    await page.locator("input[name='q']").first().fill("smart");
    await page.waitForTimeout(3000);

    //get all suggested items > CTR SHift P on DOM > Emulate focused page 

    const options:Locator = page.locator("ul > li");
    const count = await options.count();
    console.log("Option count is:", count);
    console.log("Inner Text is",(await options.allInnerTexts()));
    console.log (await options.allTextContents());
    await options.nth(2).click();
    await page.waitForTimeout(3000);



});