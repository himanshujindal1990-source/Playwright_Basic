import {test, expect, chromium} from "@playwright/test"

test ("Browser Context", async ()=>{

const browser = await chromium.launch();
const context = await browser.newContext();
const page1    = await context.newPage();
await page1.goto("https://testautomationpractice.blogspot.com/");

//context.waitForEvent('page');
//page1.getByRole("button", {name: 'New Tab'}).click();
//above two lines should execute paralelly, hence to be replaces with a new line of code with 

const [page2] = await Promise.all([context.waitForEvent('page'), page1.getByRole("button", {name: 'New Tab'}).click() ])

await page1.waitForTimeout(3000);

//2. How to  use two pagees:

//Approach1: by using context and pages() method reurn all the pages in the context
const allPages = context.pages();
console.log(await allPages[0].title());
console.log(await allPages[1].title());


//Appraoch2: by calling pages directly
const page1Title = await page1.title();
console.log(page1Title);

const page2Title = await page2.title();
console.log(page2Title);


})