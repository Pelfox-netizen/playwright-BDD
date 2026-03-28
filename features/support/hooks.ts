import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

setDefaultTimeout(60 * 1000);

// interface World {
//   browser?: Browser;
//   page?: Page;
// }

Before(async function() {
  this.browser = await chromium.launch({ 
    headless: process.env.HEADED !== 'true' 
  });
  const context = await this.browser!.newContext();
  this.page = await context.newPage();
  await this.page.goto('https://playwright.dev', { waitUntil: 'networkidle' });
});

After(async function() {
  if (this.page) {
    await this.page.context().close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});
