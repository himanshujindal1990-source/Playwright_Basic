import {test, expect, Locator} from "@playwright/test";
import {customtest} from "../util/fixutre"

customtest("To verify the fixture", async ({authPage}) => {

    await authPage.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/account");



})