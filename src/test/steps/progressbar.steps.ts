import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Progress Bar page", async ({ page }) => {
  await page.getByRole("link", { name: "Progress Bar" }).click();
  await page.waitForLoadState("domcontentloaded");
});

Then("the progress bar should display {int}%", async ({ page }, percentage: number) => {
  const progressBar = page.locator("#progressBar");
  const ariaValueNow = await progressBar.getAttribute("aria-valuenow");
  expect(parseInt(ariaValueNow || "0")).toBe(percentage);
});

When("I click the start button", async ({ page }) => {
  await page.locator("#startButton").click();
});

When("I click the reset button", async ({ page }) => {
  await page.locator("#resetButton").click();
});

Then("the progress bar should start increasing", async ({ page }) => {
  const progressBar = page.locator("#progressBar");
  const initialValue = parseInt(await progressBar.getAttribute("aria-valuenow") || "0");
  
  // Wait a moment for the progress to increment
  await page.waitForTimeout(1000);
  
  const updatedValue = parseInt(await progressBar.getAttribute("aria-valuenow") || "0");
  expect(updatedValue).toBeGreaterThan(initialValue);
});

When("I wait for the progress bar to complete", async ({ page }) => {
  const progressBar = page.locator("#progressBar");
  
  // Poll until progress bar reaches 100%
  await expect(progressBar).toHaveAttribute("aria-valuenow", "100", { timeout: 60000 });
});

Then("the completion message should be visible", async ({ page }) => {
  const completionMessage = page.locator("#completionMessage");
  await expect(completionMessage).toBeVisible();
});

Then("the completion message should not be visible", async ({ page }) => {
  const completionMessage = page.locator("#completionMessage");
  await expect(completionMessage).not.toBeVisible();
});
