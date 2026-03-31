import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Then } = createBdd();

Then("the page should display a success message", async ({ page }) => {
  const successMessage = page.locator("text=/success|loaded|completed/i");
  await expect(successMessage).toBeVisible();
});
