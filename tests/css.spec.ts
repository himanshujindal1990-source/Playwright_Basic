/*CSS locator: 
Tag with id – "tag#id"
Tag with class - "tag.class
Tag with any other attribute – "tag[attribute = value]"
Tag with class and attribute – "tag.class[attribute = value]"

Syntax: Page.locator("css/xpath") */

import {test, expect} from "@playwright/test";

test("verify css locators", async({page})=> {
await page.goto("https://demowebshop.tricentis.com/");

//1. tag#Id css locator:
await page.locator("input#small-searchterms").fill("laptop"); //fill the input field
//await page.locator("input#small-searchterms").press("Enter"); //press enter key

//2. tag.class:
await page.locator("input.search-box-text").fill("shirt"); //fill the input field

//3. tag[attribute = value]:
await page.locator("input[name=q]").fill("mobile"); //fill the input field

//4. tag.class[attribute = value]:
await page.locator("input.search-box-text[name=q]").fill("watch"); //fill the input field
})

