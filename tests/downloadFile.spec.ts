import {test, expect, Locator} from "@playwright/test";
import fs from 'fs';

test ("download text file", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.getByRole('button', {name: 'Generate and Download Text File'}).click();
 
      //page.waitForEvent('download');
      //page.locator("#txtDownloadLink").click();

    // execute all two lines parallel to capture the download event
      const [download] = await Promise.all([page.waitForEvent('download'), page.locator('#txtDownloadLink').click()]);

    await download.saveAs("downloadFile/file1.text"); // save the downloaded file by giving foldername/filename
   
    const fileExist = fs.existsSync("downloadFile/file1.txt"); // return boolean, true if file exist else false.

    expect(fileExist).toBeTruthy();

    await page.waitForTimeout(5000);


});