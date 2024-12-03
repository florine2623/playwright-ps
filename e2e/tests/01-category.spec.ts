import { test, expect } from '@playwright/test';

test('Go to Categories page', async ({ page }) => {
  await page.goto('http://localhost:8000/admin-dev/');

  //LOGIN
  await page.locator('input[name=email]').fill('admin@prestashop.com');
  await page.getByLabel('Password').fill('prestashop');
  // await page.locator('#submit_login').click();
  await page.getByRole('button', {name: 'Log in'}).click();

  //nouveau commentaire ici !!! hello de florine
  //I prefere MINE Aurelien
  //DASHBORD
  await expect(page.locator('.page-title')).toHaveText('Dashboard', {timeout: 5000});

  await page.locator('#subtab-AdminCatalog').click();
  await page.locator('#subtab-AdminCategories').click();


  //CATEGORIES
  await expect(page.locator('.container-fluid .title')).toContainText('Categories', {timeout: 5000});
  await expect(page.locator('#page-header-desc-configuration-add')).toBeEnabled({timeout: 5000});

  //child
  const child = page.locator('tr#tr_2_3_0 td.link-type');
  await expect(child).toContainText('Clothes');

  //parent
  const parent = page.locator('tr', {hasText: "Accessories"}).locator('[data-original-title=View]');
  await parent.click(); 

  await expect(page.locator('tr', {hasText: "Stationery"})).toBeAttached();


  //general assertion
  const categoryLabel = await page.locator('#tr_6_7_0').locator('.column-name').textContent();
  expect(categoryLabel).toContain('Stationery')
});