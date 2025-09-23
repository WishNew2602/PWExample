import { test, expect } from '@playwright/test';

test('naukri resume upload', async ({ page }) => {

  await test.step('Navigate to Naukri and login', async () => {
    await page.goto('https://www.naukri.com/');
    await page.getByRole('link', { name: 'Login', exact: true }).click();
    await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
    await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('vishnu14321432@gmail.com');
    await page.getByRole('textbox', { name: 'Enter your password' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('vishnu@1432');
    await page.getByRole('button', { name: 'Login', exact: true }).click();
  });

  // await test.step('Upload Resume', async () => {
  //   await page.getByRole('link', { name: 'UPDATE PROFILE', exact: true }).click();
  //   // Uploading using setInputFiles
  //   const filePath = './testdata/Resume_Naukri.pdf';
  //   await page.getByLabel('Upload Resume').setInputFiles(filePath);
  //   await page.getByRole('button', { name: 'Upload & Continue' }).click();
  //   // Assertion to verify upload success
  //   await expect(page.getByText('Resume uploaded successfully')).toBeVisible();
  // });

  await test.step('Upload Resume using AutoIT', async () => {
    await page.getByRole('link', { name: 'View profile' }).click();
    await page.getByRole('emphasis').filter({ hasText: 'editOneTheme' }).click();
    await page.getByRole('button', { name: 'Save' }).click();
  });

});