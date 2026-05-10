import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Verify Text page", async ({ page }) => {
  await page.getByRole("link", { name: "Verify Text" }).click();
  await page.waitForLoadState("domcontentloaded");
});

Then("the welcome message should be visible", async ({ page }) => {
  await expect(
    page.locator("//span[normalize-space(.)='Welcome UserName!']"),
  ).toBeVisible();
});

Then("the page should contain the text {string}", async ({ page }, text) => {
  await expect(page.locator(`text=${text}`)).toBeVisible();
});
