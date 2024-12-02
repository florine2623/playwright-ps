import { test } from '@playwright/test';
import PageManager from '../page-objects/page-manager';
import LoginPage from '../page-objects/bo/login-page';

test('Go to Categories page', async ({ page }) => {
  await page.goto('http://localhost:8000/admin-dev/');

  const pm = new PageManager(page)
  //LOGIN
  await pm.onLoginPage().login('admin@prestashop.com','prestashop');

  //DASHBOARD
  await pm.fromDashboardPage().checkTitle('Dashboard')
  await pm.fromDashboardPage().goToCategories();

  //CATEGORIES
  await pm.fromCategoriesPage().checkCategoriesPage();
  await pm.fromCategoriesPage().goToChildCategory()
});