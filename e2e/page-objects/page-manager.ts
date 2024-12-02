import { Page } from "@playwright/test";
import LoginPage from "./bo/login-page";
import DashboardPage from './bo/dashboard-page';
import CategoriesPage from "./bo/categories-page";

export default class PageManager {

    page: Page

    private readonly loginPage: LoginPage
    private readonly dashboardPage: DashboardPage
    private readonly categoriesPage: CategoriesPage

    constructor(page: Page){
        this.page = page
        this.loginPage = new LoginPage(page)
        this.dashboardPage = new DashboardPage(page)
        this.categoriesPage = new CategoriesPage(page)
    }
    
    onLoginPage(): LoginPage {
        return this.loginPage
    }

    fromDashboardPage(): DashboardPage {
        return this.dashboardPage
    }

    fromCategoriesPage(): CategoriesPage {
        return this.categoriesPage
    }
}