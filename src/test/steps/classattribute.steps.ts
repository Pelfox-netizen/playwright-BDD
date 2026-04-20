import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

When("I open the Class Attribute page", async ({ page }) => {
  await page.getByRole("link", { name: "Class Attribute" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I click the class attribute button", async ({ page }) => {
  let dialogMessage = "";

  page.once("dialog", async (dialog) => {
    dialogMessage = dialog.message();
    await dialog.accept();
  });

  await page.locator(".btn-primary").click();
  await expect.poll(() => dialogMessage).not.toBe("");
  (page as typeof page & { classAttributeDialogMessage?: string }).classAttributeDialogMessage =
    dialogMessage;
});

Then(
  "an alert should be displayed for the class attribute button",
  async ({ page }) => {
    const dialogMessage = (
      page as typeof page & { classAttributeDialogMessage?: string }
    ).classAttributeDialogMessage;

    expect(dialogMessage).toContain("Primary button pressed");
  },
);
