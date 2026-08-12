/* /* Get frame using the frame's name attribute
const frame = page.frame('frame-login'); */

/* Get frame using frame's URL
//const frame = page.frame({ url: /.*domain. });

//Interact with the frame
//await frame.fill('#username-input', 'John') */


//Approach1: Acces the the frame by page.frame() by passing only name or URL attribute
import {test, expect} from "@playwright/test"
test ("frames or iframe", async ({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/");

//total number of frames available on page:
const frames = page.frames();
console.log(frames.length);

//const frame = page.frame("Frame Test Page"); //located the frame by name
const frame = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1'}) // located the fram by url

if (frame)
    {
      await frame.locator("[name = 'mytext1']").fill("Himanshu"); // find elements under frame by locator
      //await frame.fill("[name = 'mytext1']", "Himanshu" ); // by using fill method directly and passing frame locator in the same method
    }
else {
    console.log("Frame did not found");
}

    await page.waitForTimeout(5000);

})


//Approach 2: by page.frameLocator(), to use any attribute of frame

test ("frame by frame locator", async ({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");
const frameInputBox = page.frameLocator("[src='frame_1.html']").locator("[name = 'mytext1']")
await frameInputBox.fill("Himanshu")
await page.waitForTimeout(3000);
})