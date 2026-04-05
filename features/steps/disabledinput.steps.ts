import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Disabled Input page", async ({ page }) => {
  await page.getByRole("link", { name: "Disabled Input" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I trigger the delayed enable action", async ({ page }) => {
  await page.getByRole("button", { name: "Enable Edit Field with 5 seconds delay" }).click();
});

Then("the disabled input should become enabled", async ({ page }) => {
  await expect(page.getByRole("textbox")).toBeEnabled({ timeout: 10000 });
});

When("I enter text into the disabled input", async ({ page }) => {
  await page.getByRole("textbox").fill("Playwright BDD");
});

Then("the disabled input should contain the entered text", async ({ page }) => {
  await expect(page.getByRole("textbox")).toHaveValue("Playwright BDD");
});
