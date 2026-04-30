import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import * as path from "path";
import * as fs from "fs";

const { When, Then } = createBdd();

const testFilePath = path.join(__dirname, "../fixtures/test-file.txt");

// Create test file if it doesn't exist
function ensureTestFile() {
  const fixturesDir = path.join(__dirname, "../fixtures");
  if (!fs.existsSync(fixturesDir)) {
    fs.mkdirSync(fixturesDir, { recursive: true });
  }
  if (!fs.existsSync(testFilePath)) {
    fs.writeFileSync(testFilePath, "This is a test file for file upload validation.");
  }
}

When("I open the File Upload page", async ({ page }) => {
  await page.getByRole("link", { name: "File Upload" }).click();
  await page.waitForLoadState("domcontentloaded");
});

When("I upload a test file", async ({ page }) => {
  ensureTestFile();
  const fileInput = page.locator("#fileInput");
  await fileInput.setInputFiles(testFilePath);
});

Then("the file upload should be successful and display the file name", async ({ page }) => {
  const uploadResult = page.locator("#uploadResult");
  await expect(uploadResult).toBeVisible();
  
  const resultText = await uploadResult.textContent();
  expect(resultText).toContain("test-file.txt");
});
