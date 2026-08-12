import {test, expect, chromium} from "@playwright/test"

//aproach1:by Passing the http credentials along with browser context

test ("Auth pop up approach 1", async ({browser})=>{

    const context = await browser.newContext({httpCredentials: {username:'admin', password: 'admin'}});
    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    const text = page.getByText("Basic Auth");
    await expect(text).toBeVisible();
    })

    //Approach2: by passing the credentials in the URLS itself.

test ("Auth pop up Approach2", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    const text = page.getByText("Basic Auth");
    await expect(text).toBeVisible();
    await page.waitForTimeout(5000);


    })