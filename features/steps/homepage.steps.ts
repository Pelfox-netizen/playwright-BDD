import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
// import { Given, When, Then } from '@cucumber/cucumber';
const { Given, When, Then } = createBdd();

Given(`I navigate to the Lighthouse AI home page`, async ({ page }) => {
  await page.goto("url", { waitUntil: "networkidle" });
});

When("I click on the Resources Press Releases link", async ({ page }) => {
  await page.click(
    'a:has-text("Press Releases"), a[href*="press-releases"], a[href*="resources"]',
  );
  await page.waitForLoadState("networkidle");
});

When("I click on the About Company link", async ({ page }) => {
  await page.click('a:has-text("Company"), a[href="/about"]');
  await page.waitForLoadState("networkidle");
});

Then(
  "the page title should contain {string}",
  async ({ page }, text: string) => {
    const title = await page.title();
    expect(title).toContain(text);
  },
);

Then("the page should be visible", async ({ page }) => {
  const isVisible = await page.isVisible("body");
  expect(isVisible).toBe(true);
});
