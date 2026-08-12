import{test, expect, Locator} from "@playwright/test";

test("static table", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const table:Locator = page.locator("table[name='BookTable']");
await expect(table).toBeVisible();

//1, count number of rows in table

//aproach1
const rows:Locator =page.locator("table[name='BookTable'] tbody tr")
await expect(rows).toHaveCount(7);

//Approach2
const rowCount:number = await rows.count();
      expect(rowCount).toEqual(7);

//2. count number of headers/columns:
//const headers:Locator =page.locator("table[name='BookTable'] tbody tr th");
const headers:Locator = rows.locator("th"); //locator chaining
await expect(headers).toHaveCount(4);

//3. Get one rows data
const firstRow:Locator = rows.nth(1).locator("td");
const FirstRowData:string [] = await firstRow.allInnerTexts();
console.log(FirstRowData);
await expect(firstRow).toHaveText([ 'Learn Selenium', 'Amit', 'Selenium', '300' ]);

console.log(" ********************************** ");

//4. get all row data

//traditional looping
  for (let i=1; i<=6; i++){
    let rowData = await rows.nth(i).locator("td").allInnerTexts();
    console.log(rowData); 
};

//for of loop
/*const allRow:Locator[] = await rows.all();
for (let rows of allRow.slice(1))
{
   let allRows= await rows.locator("td").allInnerTexts();
   console.log(allRows);
}*/



})