import{Page, Locator} from "@playwright/test"

export class LoginPage{
    //1. Declare all the variables for the page elements - private and read only
        private readonly page:Page;
        private readonly loginLink:Locator;
        private readonly usernameInput:Locator;
        private readonly passwordInput:Locator;
        private readonly loginButton:Locator;

    //2. constructor
        constructor(page:Page)
        {
            this.page = page;
            this.loginLink = this.page.locator("#login2");
            this.usernameInput = this.page.locator("#loginusername");
            this.passwordInput = this.page.locator("#loginpassword");
            this.loginButton = this.page.locator(".btn-primary[onclick='logIn()']");
        }
   //3. action methods
        async clickLoginLink()
        {
            await this.loginLink.click();
            
        }

        async fillUserName(userName:string)
        {
            await this.usernameInput.clear(); 
            await this.usernameInput.fill(userName);
        }

         async fillPassword(password:string)
        {
            await this.passwordInput.clear(); 
            await this.passwordInput.fill(password);
        }

        async clickLoginButton()
        {
             await this.loginButton.click();
        }

        async performLogin(userName: string, password:string)
        {
            await this.clickLoginLink();
            await this.fillUserName(userName);
            await this.fillPassword(password);
            await this.clickLoginButton();
        }

}