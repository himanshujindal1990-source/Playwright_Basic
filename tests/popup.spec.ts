import {test, expect, chromium} from "@playwright/test"

test ("Validate Pop up", async ({browser})=>{

//const browser = await chromium.launch();
const context = await browser.newContext();
const page1    = await context.newPage();
await page1.goto("https://testautomationpractice.blogspot.com/");

//page1.waitForEvent('popup');
//page1.getByRole("button", {name: 'Popup Windows'}).click();

const [page2] = await Promise.all([page1.waitForEvent('popup'), page1.getByRole("button", {name: 'Popup Windows'}).click() ])

const page1Title = await page1.title();
console.log(page1Title);

const page2url = await page2.url();
console.log(page2url);

})