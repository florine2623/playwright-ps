import { test, expect, Locator } from '@playwright/test';

test.describe('UI components in Automation Practice page',  () => {
  test.beforeEach(async({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  });

  test('Radio button fields', async ({page}) => {
    await page.locator('.radioButton').filter({hasText: 'radio1'}).click();

    await page.locator('#radio-btn-example').locator('[value=radio1]').check();

    const status = await page.locator('#radio-btn-example').locator('[value=radio1]').isChecked();
    expect(status).toBeTruthy();

    await expect(page.locator('#radio-btn-example').locator('[value=radio1]')).toBeChecked();
    await expect(page.locator('#radio-btn-example').locator('[value=radio2]')).not.toBeChecked();
    await expect(page.locator('#radio-btn-example').locator('[value=radio3]')).not.toBeChecked();
  });
});