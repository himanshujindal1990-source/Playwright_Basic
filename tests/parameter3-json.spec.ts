import {test, expect} from "@playwright/test"
import fs from "fs";

//path of json file (json file is most preferrable)
let filePath:any = "testdata/Credentials.json"

let jsonFile:any = JSON.parse(fs.readFileSync(filePath, "utf8")); // read data from file

for (let {email, password, validity} of jsonFile){ 

test("Validate login for "+ validity, async ({page})=> {

await page.goto("https://demowebshop.tricentis.com/login");
await page.getByRole('link', {name: 'Log in'}).click();
await page.locator("#Email").fill(email);
await page.locator("#Password").fill(password);
await page.locator(".login-button").click();

if(validity.toLowerCase() =='valid'){
    await expect(page.getByRole('link', {name: 'Log ou'})).toBeVisible();
}

else {
await expect(page.locator(".validation-summary-errors")).toBeVisible();
}
});
};





