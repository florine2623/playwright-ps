import {test as base} from "@playwright/test"
import PageManager from "../page-objects/page-manager";

export type BasicFixture = {
    navigateTo: string,
    pm: PageManager
}

export const manager = base.extend<BasicFixture>({
    navigateTo: [async ({page}, use) =>{
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
    {auto: true}
    ],

    pm: async ({page}, use) =>{
        const pageManager = new PageManager(page);
        await use(pageManager);
    }    
})