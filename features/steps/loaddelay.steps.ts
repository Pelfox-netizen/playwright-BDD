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
