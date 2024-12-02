import { test, expect } from '@playwright/test';

test.describe('Lists and DropDowns components on Prestashop ...',  () => {
  test.beforeEach(async({page}) => {
    await page.goto('http://localhost:8000/admin-dev');
    //LOGIN
    await page.locator('input[name=email]').fill('admin@prestashop.com');
    await page.getByLabel('Password').fill('prestashop');
    await page.getByRole('button', {name: 'Log in'}).click();
  });

  test('List fields', async ({page}) => {
        //il peut arriver que la liste des options sélectionnables ne soient pas au même endroit dans le DOM que le composent 'list'
        // page.getByRole('list')// when list has a UL tag
        // page.getByRole('listitem')// when list has a LI tag
        // const dropDownCatalog = page.getByRole('list', {name: '/catalog/i'});
        const dropDownCatalog = page.locator('#subtab-AdminCatalog')
        await dropDownCatalog.click();

        const dropDownOptionsList = dropDownCatalog.getByRole('listitem')
        await expect(dropDownOptionsList).toContainText(['Products','Categories','Monitoring','Attributes & Features', 'Brands & Suppliers', 'Files', 'Discounts', 'Stock']);
    
        //select an option
        const option1 = dropDownCatalog.selectOption('Categories');
        // await option1.click();

  });
});

