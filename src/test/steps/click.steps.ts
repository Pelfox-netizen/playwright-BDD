import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Click page", async ({ page }) => {
  await page.getByRole("link", { name: "Click" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I click the bad button", async ({ page }) => {
  await page.locator("#badButton").click();
});

Then("the bad button should turn green", async ({ page }) => {
  await expect(page.locator("#badButton")).toHaveClass(/btn-success/);
});
