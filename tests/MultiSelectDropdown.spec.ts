import {test, expect} from "@playwright/test";

test ("Verify multi select drop down", async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#country").selectOption("usa");
    await page.locator("#colors").selectOption(["Red", "Green", "White"]);

    const options = page.locator("#colors>option");
    console.log(options);
    await expect(options).toHaveCount(7);

   const allOptions = (await options.allTextContents()).map(text=>text.trim());
   console.log(allOptions);

   expect(allOptions).toEqual(['Red', 'Blue', 'Green', 'Yellow', 'Red', 'White', 'Green' ]);

    await page.waitForTimeout(5000);

   

})