import {test, expect} from "@playwright/test"

test("upload single file", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles("C:/Users/Himanshu/Desktop/PlayWright/tests/UploadFiles/Himanshu_Test_Business Analyst.docx");
    await page.getByRole('button', {name: 'Upload Single File'}).click();
    await page.waitForTimeout(5000);

    //in case of multiple files then user array under setInputFiles(['file1 path', 'file2 path'])
          

});