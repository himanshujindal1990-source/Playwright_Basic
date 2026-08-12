/*keyboard methods:
insertText()
press() to press any button from keybaord
type()
down() 
up()

await page.keyboard.press("A")

*/

import {test, expect} from '@playwright/test'

test ('Keybaord actions', async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#input1").focus();  // or click()

await page.keyboard.insertText("Himanshu"); // type from keybaord

await page.keyboard.press("Tab"); // press tab

await page.keyboard.press("Enter")

await page.keyboard.press("Tab"); // press tab

await page.keyboard.insertText("Jindal"); 

await page.keyboard.press("Tab"); // press tab

await page.keyboard.press("Enter")


})