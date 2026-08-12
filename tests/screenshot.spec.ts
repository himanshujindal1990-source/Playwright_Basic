import {test, expect} from "@playwright/test"

test('take screenshot', async ({page})=>{

await page.goto("https://www.demoblaze.com/index.html");

//await page.screenshot({path: 'Screenshots/image1.png'});// take screen shot

//1. take another screen shot with timestamp
//await page.screenshot({path: 'Screenshots/image1'+ Date.now() +'.png'}); // added Date.now(method to capture timstamp)

//2. take full page screenshot
//await page.screenshot({path: 'Screenshots/image1'+ Date.now() +'.png', fullPage: true});

//3. take partucular element screenshot by giving locator
await page.locator("[alt='First slide']").screenshot({path: 'Screenshots/image1.png'})

// better to set up in config file under use{
//                                            screenshot: 'only-on-failure',

})