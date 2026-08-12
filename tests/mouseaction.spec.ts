import {test, expect} from "@playwright/test"

test ("mouse hover action", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.getByRole('button', {name: 'Point Me'}).hover(); //mouse hover on the element
    page.locator(".dropdown-content a").nth(1).click();
    await page.waitForTimeout(5000);
})

test ("right click", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole('button', {name: 'Point Me'}).click({button:'right'});// perform right click
    await page.waitForTimeout(5000);
})

test ("double click", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole('button', {name: 'Copy Text'}).dblclick();// perform right click
    await page.waitForTimeout(3000);
})

test ("drag and drop", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole('button', {name: 'Copy Text'}).dblclick();// perform right click
    await page.waitForTimeout(3000);
})