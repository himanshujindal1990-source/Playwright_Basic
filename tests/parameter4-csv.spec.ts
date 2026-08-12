/* pre-request: Install the csv-parse module to read csv file by command:
npm install csv-parse */



import {test, expect} from "@playwright/test"
import fs from "fs";
import {parse} from "csv-parse/sync";

//path of json file (json file is most preferrable)
let filePath:any = "testdata/data.csv"

let csvFile:any = parse(fs.readFileSync(filePath, "utf8"), {columns: true, skip_empty_lines: true} ); // read data from file


for (let data of csvFile){ 

test(`Validate login for "${data.email}" and "${data.password}"`, async ({page})=> {

await page.goto("https://demowebshop.tricentis.com/login");
await page.getByRole('link', {name: 'Log in'}).click();
await page.locator("#Email").fill(data.email);
await page.locator("#Password").fill(data.password);
await page.locator(".login-button").click();

if(data.validity.toLowerCase() =='valid'){
    await expect(page.getByRole('link', {name: 'Log out'})).toBeVisible();
}

else {
await expect(page.locator(".validation-summary-errors")).toBeVisible();
}
});
};





