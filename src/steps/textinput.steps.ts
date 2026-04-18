import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

const newButtonName = "Playwright BDD";

When("I open the Text Input page", async ({ page }) => {
  await page.getByRole("link", { name: "Text Input" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I enter a new button name", async ({ page }) => {
  await page.locator("#newButtonName").fill(newButtonName);
});

When("I click the updating button", async ({ page }) => {
  await page.locator("#updatingButton").click();
});

Then("the updating button should display the new name", async ({ page }) => {
  await expect(page.locator("#updatingButton")).toHaveText(newButtonName);
});
