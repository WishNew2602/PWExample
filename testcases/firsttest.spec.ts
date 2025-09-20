import { test, expect, Page } from '@playwright/test';

test('homepage has title', async ({ page }: { page: Page }) => {

  await page.goto('https://www.ebay.com/');
  const title = await page.title();
  console.log(title);
  await expect(page).toHaveTitle("Electronics, Cars, Fashion, Collectibles & More | eBay");
});