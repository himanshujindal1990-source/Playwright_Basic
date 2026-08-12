import {test, expect} from "@playwright/test";

test ("Comparing methods", async({page}) =>{

    await page.goto("https://demowebshop.tricentis.com/");
    const products = page.locator(".product-title");

    //1. innerText vs textContent()

    console.log(await products.nth(1).innerText()); //Extract plaint text, i,e $25 Virtual Gift Card
    console.log(await products.nth(1).textContent());// extraxt space too           $25 Virtual Gift Card, space also recevied. sometime /n
    
    console.log(await products.allInnerTexts());


})