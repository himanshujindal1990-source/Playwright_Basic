import {test, expect} from "@playwright/test";

test ('Browser context more details', async ({browser})=>{

 //const browser = await chromium.launch();

 const context = await browser.newContext({

    viewport: {width:1200, height:800},
    ignoreHTTPSErrors: true
 });
 
 const page = await context.newPage();
 //await page.goto("https://google.com");

})