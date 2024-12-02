import {test as base} from "@playwright/test"
import PageManager from "../page-objects/page-manager";

export type BasicFixture = {
    myParam: string,
    navigateTo: string,
    pm: PageManager

}

export const withParam = base.extend<BasicFixture>({
    myParam: "",
    navigateTo: async ({page, myParam}, use) =>{
        console.log('param value is set in the test: ', myParam)
        
        await page.goto('http://localhost:8000/admin-dev/');

        const pm = new PageManager(page)
        //LOGIN
        await pm.onLoginPage().login('admin@prestashop.com','prestashop');
      
        //DASHBOARD
        await pm.fromDashboardPage().checkTitle('Dashboard')
        await pm.fromDashboardPage().goToCategories();

        //activate this fixture
        await use('');
    },

    pm: async ({page, navigateTo}, use) =>{
        const pageManager = new PageManager(page);
        await use(pageManager);
    }    
})