import { test, expect } from '@playwright/test';
import { LoginPage } from '/Users/sushmitha.r/saucedemo-pom-framework/pages:/LoginPage.ts';
import { ProductsPage } from '/Users/sushmitha.r/saucedemo-pom-framework/pages:/ProductsPage.ts';
import { credentials } from '/Users/sushmitha.r/saucedemo-pom-framework/utils:/testData.ts';

test.describe('Saucedemo Login', () => {
  test('Successful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login(credentials.username, credentials.password);
    await productsPage.validateProductsPage();
  });
});
