import {test, expect} from "@playwright/test"

let credentials: string [][] =[
    ['laura.taylor1234@example.com', 'test123', 'valid'],
    ['abcd@example.com', '1234', 'invalid']
];


for (let [email, password, validity] of credentials){ 

test("Validate login for "+ validity, async ({page})=> {

await page.goto("https://demowebshop.tricentis.com/login");
await page.getByRole('link', {name: 'Log in'}).click();
await page.locator("#Email").fill(email);
await page.locator("#Password").fill(password);
await page.locator(".login-button").click();

if(validity.toLowerCase() =='valid'){
    await expect(page.getByRole('link', {name: 'Log out'})).toBeVisible();
}

else {
await expect(page.locator(".validation-summary-errors")).toBeVisible();
}
});
};





