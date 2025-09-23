import {test, expect} from '@playwright/test';
import { LandingPage } from '../../pages/LandingPage';

test.beforeEach(async ({page}) => {
    const landingPage = new LandingPage(page);
    await test.step('Navigate to Ebay and login', async () => {
        await landingPage.goto();
    });
});

test.afterEach(async ({page}) => {
    await page.close();
});

test('Login and search for a product in Ebay', async ({page}) => {

    const landingPage = new LandingPage(page);

    await test.step('Search for the item', async () => {
        await landingPage.searchItem('iPhone 14 Pro');
    });

    await test.step('Select item condition', async () => {
        await landingPage.selectConditions('New');
    });

    await test.step('clear all filters', async () => {
        await landingPage.clearAll.click();
    });

});