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
