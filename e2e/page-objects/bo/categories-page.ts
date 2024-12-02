import { expect, Page } from "@playwright/test";

export default class CategoriesPage {
    page: Page

    constructor(page: Page){
        this.page = page
    }

    async checkCategoriesPage() {
        await expect(this.page.locator('.container-fluid .title')).toContainText('Categories', {timeout: 5000});
        await expect(this.page.locator('#page-header-desc-configuration-add')).toBeEnabled({timeout: 5000});
    }

    async goToChildCategory(){
        const parent = this.page.locator('tr', {hasText: "Accessories"}).locator('[data-original-title=View]');
        await parent.click();
        await expect(this.page.locator('tr', {hasText: "Stationery"})).toBeAttached();
    }

}