import { expect, Page } from "@playwright/test";

export default class DashboardPage {
    page: Page

    constructor(page: Page){
        this.page = page;
    }

    async checkTitle(title: string){
        await expect(this.page.locator('.page-title')).toHaveText(title, {timeout: 5000});
    }

    async goToCategories(){
        await this.page.locator('#subtab-AdminCatalog').click();
        // const categoriesMenu = this.page.locator('#subtab-AdminCategories');
        // await categoriesMenu.waitFor({state: 'visible', timeout:3000});
        await this.page.locator('#subtab-AdminCategories').click();
    }
}