import { Page } from '@playwright/test';

export class LandingPage {
  constructor(private page: Page) {}

  get searchBox() {
    return this.page.locator('//input[@placeholder="Search for anything"]');
  }
  get conditionsButton() {return this.page.locator('span[data-testid="condition_menu"] > button');}
  
  conditionType(Condition: string) {
    return this.page.locator('input[aria-label="XXX"]'.replace('XXX', Condition));
  }

  get clearAll() {return this.page.locator('//a/div[text()="Clear All"]');}

  async goto() {
    await this.page.goto('/');
  }

  async searchItem(itemName: string) {
    await this.searchBox.fill(itemName);
    await this.searchBox.press('Enter');
  }

  async selectConditions(condition: string) {   
    await this.conditionsButton.click();
    await this.conditionType(condition).check();
  } 

}
