import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Sample App page", async ({ page }) => {
  await page.getByRole("link", { name: "Sample App" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I enter valid Sample App credentials", async ({ page }) => {
  await page.getByRole("textbox", { name: "User Name" }).fill("TestUser");
  await page.getByRole("textbox", { name: "Password" }).fill("pwd");
});

When("I submit the Sample App login form", async ({ page }) => {
  await page.getByRole("button", { name: "Log In" }).click();
});

Then("the Sample App should show a successful login message", async ({ page }) => {
  await expect(page.locator("#loginstatus")).toContainText("Welcome, TestUser!");
});

When("I log out of the Sample App", async ({ page }) => {
  await page.getByRole("button", { name: "Log Out" }).click();
});

Then("the Sample App should show the logged out state", async ({ page }) => {
  await expect(page.locator("#loginstatus")).toContainText("User logged out.");
  await expect(page.getByRole("button", { name: "Log In" })).toBeVisible();
});
