import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("I navigate to the UI Testing Playground home page", async ({ page }) => {
  await page.goto("https://uitestingplayground.com/home", {
    waitUntil: "domcontentloaded",
  });
});

When("I open the Visibility page", async ({ page }) => {
  await page.getByRole("link", { name: "Visibility" }).click();
  await page.waitForLoadState("domcontentloaded");
});

Given("I navigate to the Visibility page", async ({ page }) => {
  await page.goto("https://uitestingplayground.com/visibility", {
    waitUntil: "domcontentloaded",
  });
});

Then("the Visibility page should be displayed", async ({ page }) => {
  await expect(page).toHaveURL(/\/visibility$/);
  await expect(page.getByRole("button", { name: "Hide" })).toBeVisible();
});

When("I click the Hide button", async ({ page }) => {
  await page.getByRole("button", { name: "Hide" }).click();
});

When("I click the Show button", async ({ page }) => {
  await page.getByRole("button", { name: "Show" }).click();
});

Then("the removed button should be hidden", async ({ page }) => {
  await expect(page.locator("#removedButton")).toBeHidden();
});

Then("the zero width button should be hidden", async ({ page }) => {
  await expect(page.locator("#zeroWidthButton")).toBeHidden();
});

Then("the transparent button should be hidden", async ({ page }) => {
  await expect(page.locator("#transparentButton")).toBeHidden();
});

Then("the invisible button should be hidden", async ({ page }) => {
  await expect(page.locator("#invisibleButton")).toBeHidden();
});

Then("the not displayed button should be hidden", async ({ page }) => {
  await expect(page.locator("#notdisplayedButton")).toBeHidden();
});

Then("the offscreen button should be outside the viewport", async ({ page }) => {
  await expect(page.locator("#offscreenButton")).not.toBeInViewport();
});

Then("the overlapped button should remain visible", async ({ page }) => {
  await expect(page.locator("#overlappedButton")).toBeVisible();
});

Then("the removed button should be visible", async ({ page }) => {
  await expect(page.locator("#removedButton")).toBeVisible();
});

Then("the zero width button should be visible", async ({ page }) => {
  await expect(page.locator("#zeroWidthButton")).toBeVisible();
});

Then("the transparent button should be visible", async ({ page }) => {
  await expect(page.locator("#transparentButton")).toBeVisible();
});

Then("the invisible button should be visible", async ({ page }) => {
  await expect(page.locator("#invisibleButton")).toBeVisible();
});

Then("the not displayed button should be visible", async ({ page }) => {
  await expect(page.locator("#notdisplayedButton")).toBeVisible();
});

Then("the offscreen button should be visible", async ({ page }) => {
  await expect(page.locator("#offscreenButton")).toBeVisible();
});
