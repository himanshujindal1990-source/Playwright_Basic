import {test, expect, Locator} from "@playwright/test";

//1. page.getByAltText() to locate an element, usually image, by its text alternative.

test("verify locator", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    //1. page.getByAltText() to locate an element, usually image, by its text alternative.
    //const logo:Locator =  page.getByAltText("nopCommerce demo store");
    //await expect(logo).toBeVisible(); //assertion

    //2. page.getbytext() to locate an non interactive element by its text content.
    const welcomeText:Locator = page.getByText("Practice Page");
    await expect(welcomeText).toBeVisible(); //assertion

    //3. page.getByRole() to locate an element by its role, usually interactive elements like buttons, links, etc.
    //await page.getByRole("button", {name: "Home"}).click(); //click on the button
    //await expect(page).toHaveURL("https://rahulshettyacademy.com/"); //assertion

    //4. page.getByLabel() to locate an input element by its label text.
    //await page.getByLabel

    // 5. page.getByPlaceholder() to locate an input element by its placeholder text.
    await page.getByPlaceholder("Enter Your Name").fill("Himanshu"); //fill the input field

    // 6. page.getbyTitle() to locate an element by its title attribute.
    await page.goto("file:///C:/Users/Himanshu/Downloads/app.html");
    await page.getByTitle("Home page link").click(); //click on the element
    await expect(page).toHaveURL("file:///C:/Users/Himanshu/Downloads/app.html#"); //assertion

    // 7. page.getByTestId() to locate an element by its data-testid attribute.
    //when to use: when text or role based locators are unstable or not suitable
    const profileName:Locator = page.getByTestId("profile-name");
    await expect(profileName).toHaveText("John Doe"); //assertion

})