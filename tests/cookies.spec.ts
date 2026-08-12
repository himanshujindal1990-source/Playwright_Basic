import {test, expect, chromium} from "@playwright/test";

test('Browser context more details', async ({})=>{

 const browser = await chromium.launch();
 const context = await browser.newContext();
 context.addCookies( [
                        {name: 'mycookie', value:'12345', url: 'https://testautomationpractice.blogspot.com/'}
                   ] )

 const cookies = await context.cookies(); //het all the cookies
await context.clearCookies(); // clear all cookkies

 const page = await context.newPage();

 await page.goto("https://testautomationpractice.blogspot.com/");

console.log(cookies);

})