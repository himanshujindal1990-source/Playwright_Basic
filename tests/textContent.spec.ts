import {test, expect} from "@playwright/test";

test('extract text from element', async ({page}) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator("input#username").fill("himanshujindal");
  await page.locator("input#password").fill("Learning@830$3mK2");
  await page.locator("#signInBtn").click();
  const errorText = await page.locator("div[style='display: block;']").textContent();
  //console.log(errorText);
  expect(errorText).toContain("Incorrect username/password.");
  await page.locator("input#username").fill("");
  await page.locator("input#username").fill("rahulshettyacademy");
  //await page.locator("input#password").fill("");
  await page.locator("input#password").fill("Learning@830$3mK2");
  await page.locator("#signInBtn").click();
  let itemText = await page.getByRole("link", { name: "iphone X" }).textContent();
  expect(itemText).toContain("iphone X");
  await page.getByRole("button", { name: "Add" }).first().click();
  await page.locator("a.nav-link.btn.btn-primary").click();
  let quantity = await page.locator("input#exampleInputEmail1").textContent();
  console.log(quantity);
  await page.getByRole("button", { name: "checkout" }).click();
  let deliveryLocation = await page.getByLabel("Please choose your delivery location.");
  console.log(deliveryLocation);
  await expect(deliveryLocation).toBeVisible();
  
});