import {test, expect} from "@playwright/test";

//test syntax: test("test name", () => {test steps})

test("verify the title of the page", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    let pageTitle:string = await page.title(); //get the title of the page
    expect(pageTitle).toBe("Practice Page"); //assertion
});