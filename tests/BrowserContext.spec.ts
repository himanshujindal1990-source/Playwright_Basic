// browser ---> Context -----> Page
// Browser: Chromium, firefox, webkit
// context: A browser can have multiple context / multiple sessions
// page: A context can have multiple pages (new tab, window, and popup)


import {test, expect, chromium} from "@playwright/test"

test ("Browser Context", async ()=>{

const browser = await chromium.launch();
const context = await browser.newContext();
//const page  = await context.newPage();
//await page.goto("https://testautomationpractice.blogspot.com/")

//create two pages from the context

const page1 = await context.newPage();
const page2 = await context.newPage();

await page1.goto("https://testautomationpractice.blogspot.com/");
await page1.waitForTimeout(3000);

await page2.goto("https://demowebshop.tricentis.com/");
await page2.waitForTimeout(3000);


});