import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('http://localhost:8000/admin-dev');
})

test.describe('Text components in Prestashop login page',  () => {
  test('Input fields ', async ({page}) => {
    const emailInput = page.locator('#login_form').getByRole('textbox', {name: 'email'});
    await emailInput.fill('plop@prestashop.com');
    await emailInput.clear();
    //la methode pressSequentially a des paramètres optionnels
    //with additional arguments
    await emailInput.pressSequentially('admin@prestashop.com', {delay: 200, timeout: 60*1000});

    // Remarque: comment faire un click 'Entrer' ?
    await page.keyboard.press('Enter');

    // generic assertions
    const inputValue = await emailInput.inputValue();
    expect(inputValue).toEqual('admin@prestashop.com');

    // locator assertions (RECOMMENDED)
    await expect(emailInput).toHaveValue('admin@prestashop.com')//toHaveText not working for en input field
  });
});
