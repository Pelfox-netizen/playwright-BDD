import { expect, test } from '@playwright/test';

test('homepage has Playwright in the title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Playwright/);
});
