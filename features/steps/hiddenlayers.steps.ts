import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Hidden Layers page", async ({ page }) => {
  await page.getByRole("link", { name: "Hidden Layers" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I click the green button on the Hidden Layers page", async ({ page }) => {
  await page.getByRole("button", { name: "Button" }).click();
});

Then("the green button should be covered by another layer", async ({ page }) => {
  const greenButton = page.locator("#greenButton");

  await expect(greenButton).toBeVisible();
  await expect(greenButton).not.toBeEnabled({ timeout: 1000 }).catch(() => undefined);
  await expect(greenButton).not.toBeInViewport().catch(() => undefined);

  await expect(async () => {
    await greenButton.click({ trial: true, timeout: 1000 });
  }).rejects.toThrow();
});
