import { expect } from "@playwright/test";
import type { Page } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { When, Then } = createBdd();

type AlertsDialogMessages = {
  alert?: string;
  confirm?: string;
  confirmResult?: string;
  prompt?: string;
  promptResult?: string;
};

const getDialogMessages = (page: Page) => {
  const pageWithMessages = page as typeof page & {
    alertsDialogMessages?: AlertsDialogMessages;
  };

  pageWithMessages.alertsDialogMessages ??= {};
  return pageWithMessages.alertsDialogMessages;
};

When("I open the Alerts page", async ({ page }) => {
  await page.getByRole("link", { name: "Alerts" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I handle the alert dialog", async ({ page }) => {
  const messages = getDialogMessages(page);

  page.once("dialog", async (dialog) => {
    messages.alert = dialog.message();
    await dialog.accept();
  });

  await page.locator("#alertButton").click();
  await expect.poll(() => messages.alert).not.toBeUndefined();
});

When("I accept the confirm dialog", async ({ page }) => {
  const messages = getDialogMessages(page);

  page.once("dialog", async (dialog) => {
    messages.confirm = dialog.message();
    await dialog.accept();
  });

  await page.locator("#confirmButton").click();
  await expect.poll(() => messages.confirm).not.toBeUndefined();

  page.once("dialog", async (dialog) => {
    messages.confirmResult = dialog.message();
    await dialog.accept();
  });

  await expect.poll(() => messages.confirmResult, { timeout: 3000 }).toBe("Yes");
});

When("I answer the prompt dialog with {string}", async ({ page }, answer: string) => {
  const messages = getDialogMessages(page);

  page.once("dialog", async (dialog) => {
    messages.prompt = dialog.message();
    await dialog.accept(answer);
  });

  await page.locator("#promptButton").click();
  await expect.poll(() => messages.prompt).not.toBeUndefined();

  page.once("dialog", async (dialog) => {
    messages.promptResult = dialog.message();
    await dialog.accept();
  });

  await expect
    .poll(() => messages.promptResult, { timeout: 3000 })
    .toBe(`User value: ${answer}`);
});

Then("the Alerts dialogs should be handled successfully", async ({ page }) => {
  const messages = getDialogMessages(page);

  expect(messages.alert).toBe("Today is a working day.\nOr less likely a holiday.");
  expect(messages.confirm).toBe("Today is Friday.\nDo you agree?");
  expect(messages.confirmResult).toBe("Yes");
  expect(messages.prompt).toBe('Choose "cats" or \'dogs\'.\nEnter your value:');
  expect(messages.promptResult).toBe("User value: dogs");
});
