import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Non-Breaking Space page", async ({ page }) => {
  await page.getByRole("link", { name: "Non-Breaking Space" }).click();
  await page.waitForLoadState("domcontentloaded");
});

Then("the complete text with non-breaking spaces should be visible", async ({ page }) => {
  const textElement = page.locator("#pText");
  await expect(textElement).toBeVisible();
  
  const textContent = await textElement.textContent();
  expect(textContent).toBeTruthy();
});

Then("the text should remain on a single line without wrapping", async ({ page }) => {
  const textElement = page.locator("#pText");
  const boundingBox = await textElement.boundingBox();
  
  // Get the line height to determine if text is on a single line
  const lineHeight = await textElement.evaluate((el) => {
    return parseInt(window.getComputedStyle(el).lineHeight);
  });
  
  // If text is on a single line, height should be approximately equal to line height
  // With some tolerance for padding
  expect(boundingBox?.height).toBeLessThanOrEqual(lineHeight * 1.5);
});
