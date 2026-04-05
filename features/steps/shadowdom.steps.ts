import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Shadow DOM page", async ({ page }) => {
  await page.getByRole("link", { name: "Shadow DOM" }).click();
  await page.waitForLoadState("domcontentloaded");
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"], {
    origin: "https://uitestingplayground.com",
  });
});

When("I generate a guid in the Shadow DOM component", async ({ page }) => {
  await page.locator("#buttonGenerate").click();

  const generatedGuid = await page.locator("#editField").inputValue();
  expect(generatedGuid.trim()).toMatch(
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  );

  (page as typeof page & { generatedGuid?: string }).generatedGuid = generatedGuid;
});

When("I copy the guid from the Shadow DOM component", async ({ page }) => {
  await page.locator("#buttonCopy").click();
});

Then("the clipboard value should match the generated guid", async ({ page }) => {
  const generatedGuid = (page as typeof page & { generatedGuid?: string })
    .generatedGuid;
  const clipboardValue = await page.evaluate(async () => navigator.clipboard.readText());

  expect(generatedGuid).toBeTruthy();
  expect(clipboardValue.trim()).toBe(generatedGuid?.trim());
});
