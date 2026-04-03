import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Dynamic Table page", async ({ page }) => {
  await page.getByRole("link", { name: "Dynamic Table" }).click();
  await page.waitForLoadState("domcontentloaded");
});

Then("the Chrome CPU value should match the yellow label", async ({ page }) => {
  const chromeCpuCell = page.locator("span[role='cell']", {
    hasText: /^Chrome$/,
  });

  const chromeRow = chromeCpuCell.locator("xpath=ancestor::div[@role='row'][1]");
  const cpuValue = await chromeRow.locator("span[role='cell']").nth(2).textContent();
  const labelText = await page.locator(".bg-warning").textContent();

  expect(cpuValue?.trim()).toBeTruthy();
  expect(labelText).toContain(`Chrome CPU: ${cpuValue?.trim()}`);
});
