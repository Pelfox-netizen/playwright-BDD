import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Mouse Over page", async ({ page }) => {
  await page.getByRole("link", { name: "Mouse Over" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I click the Click me link twice", async ({ page }) => {
  await page.getByText("Click me", { exact: true }).click();
  await page.getByText("Click me", { exact: true }).click();
});

When("I click the Link Button link twice", async ({ page }) => {
  await page.getByText("Link Button", { exact: true }).click();
  await page.getByText("Link Button", { exact: true }).click();
});

Then("the Click me link count should be {string}", async ({ page }, count: string) => {
  await expect(page.locator("#clickCount")).toHaveText(count);
});

Then("the Link Button link count should be {string}", async ({ page }, count: string) => {
  await expect(page.locator("#clickButtonCount")).toHaveText(count);
});
