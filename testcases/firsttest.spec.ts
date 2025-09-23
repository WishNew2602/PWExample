import { test, expect, Page } from '@playwright/test';

test('Upload Resume in naukri', async ({ page }: { page: Page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('vishnu14321432@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('vishnu@1432');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.getByRole('link', { name: 'View profile' }).click();
  await page.getByRole('emphasis').filter({ hasText: 'editOneTheme' }).click();
  await page.getByRole('button', { name: 'Save' }).click();  
});