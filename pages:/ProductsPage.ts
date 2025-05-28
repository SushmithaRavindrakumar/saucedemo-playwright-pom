import { Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async validateProductsPage() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
    await expect(this.page.locator('.title')).toHaveText('Products');
  }
}
