import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I navigate to the Load Delay page", async ({ page }) => {
  await page.goto("https://uitestingplayground.com/loaddelay", {
    waitUntil: "domcontentloaded",
  });
});

Then("the button should not be visible initially", async ({ page }) => {
  const button = page.locator(
    "button:has-text('Button Appearing After Delay')",
  );
  const isVisible = await button.isVisible().catch(() => false);
  expect(isVisible).toBe(false);
});

When("I wait for the button to load", async ({ page }) => {
  await page
    .locator("button:has-text('Button Appearing After Delay')")
    .waitFor({ state: "visible", timeout: 15000 });
});

Then("the button should be visible", async ({ page }) => {
  const button = page.locator(
    "button:has-text('Button Appearing After Delay')",
  );
  await expect(button).toBeVisible();
});

Then("the button should be clickable", async ({ page }) => {
  const button = page.locator(
    "button:has-text('Button Appearing After Delay')",
  );
  await expect(button).toBeEnabled();
});

When("I click on the loaded button", async ({ page }) => {
  await page.locator("button:has-text('Button Appearing After Delay')").click();
  await page.waitForLoadState("networkidle");
});

When("I set a timeout of {int} seconds", async ({ page }, seconds: number) => {
  // Store timeout in context for later use
  (page as any).customTimeout = seconds * 1000;
});

When("I wait for the button with timeout", async ({ page }) => {
  const timeout = (page as any).customTimeout || 5000;
  await page
    .locator("button:has-text('Button Appearing After Delay')")
    .waitFor({ state: "visible", timeout });
});

Then(
  "the button should be visible before timeout expires",
  async ({ page }) => {
    const button = page.locator(
      "button:has-text('Button Appearing After Delay')",
    );
    await expect(button).toBeVisible();
  },
);
