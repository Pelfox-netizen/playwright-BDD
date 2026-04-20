import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Client Side Delay page", async ({ page }) => {
  await page.getByRole("link", { name: "Client Side Delay" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I click the client side delay button", async ({ page }) => {
  await page.getByRole("button", { name: "Button Triggering Client Side Logic" }).click();
});

Then("the client side delay result should be displayed", async ({ page }) => {
  await expect(page.locator("#content")).toHaveText(
    "Data calculated on the client side.",
    { timeout: 20000 },
  );
});
