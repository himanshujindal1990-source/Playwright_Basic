import {test, expect, Locator} from "@playwright/test";

test ("Verify input box actions", async ({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");

//1. Input box actions: fill(), inputValue(), clear(), press(), 
 const name = page.getByPlaceholder("Enter Name");
 await expect(name).toBeVisible(); //assertion
 await name.fill("Himanshu Jindal"); //fill the input field
const nameValue = await name.inputValue(); //get the value of the input field
 //filling other input fields using placeholder locators
await page.getByPlaceholder("Enter EMail").fill("himanshujindal1990@gmail.com");
await page.getByPlaceholder("Enter Phone").fill("8375042422");
//await page.locator("textarea#textArea").fill("This is a test message");

//2. Radio button actions: check(), uncheck(), toNeChecked()
await page.locator("input#male").check(); //click the radio button
//await page.locator("input#male").uncheck(); //click the radio button
await expect(page.locator("input#male")).toBeChecked();// to check 
await page.waitForTimeout(3000);

//3. Checkbox actions: check(), uncheck(), toNeChecked()
   const days = page.getByLabel("[Sunday, Monday, Tuesday, Wednesday, Thursday, Friday]").allTextContents;
   console.log(days); 

await page.waitForTimeout(3000); //wait for 3 seconds


})