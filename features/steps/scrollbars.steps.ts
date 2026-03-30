import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I navigate to the Scrollbars page", async ({ page }) => {
  await page.goto("https://uitestingplayground.com/scrollbars", {
    waitUntil: "domcontentloaded",
  });
});

Then("the hidden button should not be in viewport", async ({ page }) => {
  const button = page.locator("button:has-text('Button')");
  const boundingBox = await button.boundingBox();
  const isInViewport = boundingBox !== null && boundingBox.y >= 0;
  expect(isInViewport).toBe(false);
});

When("I scroll down to the button", async ({ page }) => {
  const button = page.locator("button:has-text('Button')");
  await button.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
});

Then("the button should be visible in the viewport", async ({ page }) => {
  const button = page.locator("button:has-text('Button')");
  const boundingBox = await button.boundingBox();
  expect(boundingBox).not.toBeNull();
  if (boundingBox) {
    expect(boundingBox.y).toBeGreaterThanOrEqual(0);
  }
  await expect(button).toBeVisible();
});

When("I click on the scrolled button", async ({ page }) => {
  const button = page.locator("button:has-text('Button')");
  await button.click();
  await page.waitForLoadState("networkidle");
});

Then("the page should display a success message", async ({ page }) => {
  const successMessage = page.locator("text=/success|loaded|completed/i");
  await expect(successMessage).toBeVisible();
});

When("I scroll back to the top", async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
});
