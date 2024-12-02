import { test, expect } from '@playwright/test';

test.describe('UI components in Automation Practice page',  () => {
  test.beforeEach(async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  });

  test('Checkbox fields', async ({page}) => {
    await page.locator('#checkBoxOption1').click();
    await page.locator('#checkBoxOption2').setChecked(true);
    await page.locator('#checkBoxOption3').check();

    //check method ensure that checkbox or radio element is checked.
    // click() just performing the click and doesn't validate the status of the checkbox.
    // check and uncheck are checking the status of the checkbox
    await page.locator('#checkBoxOption1').check();
    await page.locator('#checkBoxOption2').check();
    await page.locator('#checkBoxOption3').uncheck();

    //All checkbox
    const allCheckboxes = page.locator('#checkbox-example').getByRole('checkbox');
    for(const chechbox of await allCheckboxes.all()) {
      await chechbox.check();
      await expect(chechbox).toBeChecked();
    }
  });
});

test.describe('Checkbox components on Prestashop new Category page',  () => {
  test.beforeEach(async({page}) => {
    await page.goto('http://localhost:8000/admin-dev');
    //LOGIN
    await page.locator('input[name=email]').fill('admin@prestashop.com');
    await page.getByLabel('Password').fill('prestashop');
    await page.getByRole('button', {name: 'Log in'}).click();

    //DASHBORD
    await expect(page.locator('.page-title')).toHaveText('Dashboard', {timeout: 5000});

    await page.locator('#subtab-AdminCatalog').click();
    await page.locator('#subtab-AdminCategories').click();

    //CATEGORIES
    await expect(page.locator('.container-fluid .title')).toContainText('Categories', {timeout: 5000});
    await expect(page.locator('#page-header-desc-configuration-add')).toBeEnabled({timeout: 5000});

    await page.locator('#page-header-desc-configuration-add').click();
  });

  test('Checkbox fields', async ({page}) => {

    await page.locator('#category_link_rewrite_1').fill('plop');

    //CHECKBOX
    //PB le composent n'est pas visible
    // await expect(page.locator('#category_group_association_1')).toBeVisible();
    await page.locator('#category_group_association_1').check();
    await page.locator('#category_group_association_1').click();
    await page.locator('#category_group_association_1').setChecked(false);

    await page.locator('#category_group_association_1').dispatchEvent("click");
  
    // Autre solution clicker sur le label (force click?)
  });
});

