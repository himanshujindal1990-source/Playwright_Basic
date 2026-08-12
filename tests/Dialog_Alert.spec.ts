/* There are three types of dialogs
1. alert(), confrim(), prompt()
2. by default dialogs are auto dismissed by playwright
3. dialog handler before click by dialog.accept() or dialog.dismiss()
4. Syntax:
   page.on('dialog', (dialog) => {
   dialog.type()
   dialog.message()
   dialog.accept()    }); */



//1. Simple alert

import {test, expect} from "@playwright/test"

test ("simple alert dialog i.e. alert", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/");

// Register dialog  handler event
page.on('dialog', (dialog) => {
 
    console.log(dialog.type()); // to find dialog type
    expect(dialog.type()).toContain("alert");

    console.log(dialog.message()); // to find message on dialog
    expect(dialog.message()).toContain("I am an alert box!")
    dialog.accept();
   })

await page.getByRole('button', {name: 'Simple Alert'}).click();// before click event, register dialog handler event
});


//2. confirmation alert - dialog:

test ("confirmation alert dialog ", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/");

// Register dialog handler event in similar way
page.on('dialog', (dialog) => {
 
    console.log(dialog.type()); // to find dialog type
    expect(dialog.type()).toContain("confirm");

    console.log(dialog.message()); // to find message on dialog
    expect(dialog.message()).toContain("Press a button!")
    dialog.accept(); // or dialog.dismiss();
   })

await page.getByRole('button', {name: 'Confirmation Alert'}).click();// before click event, register dialog handler event
expect(await page.getByText("You pressed OK!").innerText()).toContain("You pressed OK!");
});


//3. Prompt alert - dialogs

test ("Prompt alert dialog ", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/");

// Register dialog handler event in similar way
page.on('dialog', (dialog) => {
 
    console.log(dialog.type()); // to find dialog type
    expect(dialog.type()).toContain("prompt");

    console.log(dialog.message()); // to find message on dialog
    expect(dialog.message()).toContain("Please enter your name:");
    
    console.log(dialog.defaultValue()); // to find default value in input box

    dialog.accept("Himanshu"); // or we can pass new value in accept method
   })

await page.getByRole('button', {name: 'Prompt Alert'}).click();// before click event, register dialog handler event
expect(await page.getByText("Hello Himanshu! How are you today?").textContent()).toContain("Hello Himanshu! How are you today?");
});