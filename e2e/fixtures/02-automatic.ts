import {test as base} from "@playwright/test"
import PageManager from "../page-objects/page-manager";

export type BasicFixture = {
    navigateTo: string
}


export const automatic = base.extend<BasicFixture>({
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
]
})