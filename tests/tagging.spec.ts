import {test, expect} from "@playwright/test"

test("@regression Test1" , async ({page}) =>{
    
    page.goto("https://www.demoblaze.com/index.html");
})

test("Test2 @smoke" , async ({page}) =>{
    
    page.goto("https://www.demoblaze.com/index.html");
})

//recommended:
test("Test3" , {tag: '@smoke'},async ({page}) =>{
    
    page.goto("https://www.demoblaze.com/index.html");
})

test("Test4" , {tag: ['@regression', '@smoke']}, async ({page}) =>{
    
    page.goto("https://www.demoblaze.com/index.html");
})