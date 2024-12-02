import { Locator, Page } from "@playwright/test";


  // DRY Don't Repeat Yourself
  // KISS Keep It Simple Stupid

export default class LoginPage {

    page: Page;

    private readonly loginInput: Locator;
    private readonly pwdInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginInput = this.page.locator('input[name=email]');
        this.pwdInput = this.page.getByLabel('Password');
        this.loginButton = this.page.getByRole('button', {name: 'Log in'})
    }

    async login(login: string, pwd: string){
        await this.loginInput.fill(login);
        await this.pwdInput.fill(pwd);
        await this.loginButton.click();
    }
}