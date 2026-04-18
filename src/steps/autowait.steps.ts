import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Auto Wait page", async ({ page }) => {
  await page.getByRole("link", { name: "Auto Wait" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I make the target button temporarily covered", async ({ page }) => {
  await page.locator("#ontop").uncheck();
});

When("I apply the 3 second auto wait settings", async ({ page }) => {
  await page.getByRole("button", { name: "Apply 3s" }).click();
});

When("I click the auto wait target button", async ({ page }) => {
  await page.locator("#target").click();
});

Then("the auto wait target should report it was clicked", async ({ page }) => {
  await expect(page.locator("#opstatus")).toHaveText("Target clicked.");
});
