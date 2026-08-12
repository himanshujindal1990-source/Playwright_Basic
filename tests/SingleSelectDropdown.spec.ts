import {test, expect} from "@playwright/test";

test ("Verify single select drop down", async ({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Single select drop down 
    //await page.locator("#country").selectOption("India"); // by visible text
    //await page.locator("#country").selectOption("usa"); // by value attribute
    //await page.locator("#country").selectOption({label:'United states'}); // by label attribute
    //await page.locator("#country").selectOption({index:3}); // by index attribute
    
    await page.waitForTimeout(3000); //wait for 3 seconds

    //2. check numbe of options in dropd down.
    const dropDownOptions =  page.locator("#country>option");
    await expect(dropDownOptions).toHaveCount(10);

    //3. get all the options in drop down and validate with expect
    const allOptions = (await dropDownOptions.allTextContents()).map(text=>text.trim());
    console.log(allOptions);
    expect(allOptions).toEqual(["United States","Canada","United Kingdom","Germany","France","Australia","Japan", "China","Brazil","India"]);

})