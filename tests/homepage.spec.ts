import { expect, test } from "@playwright/test";

test("Home has expected h1", async ({ page }) => {
  await page.goto("localhost:3000/");
  expect(await page.textContent("h1")).toBe("Etienne Naude");
});

test("Home has sections", async ({ page }) => {
  await page.goto("localhost:3000/");
  const sections = await page.locator("section");
  expect(await sections.count()).toBe(8);
});

test("Call to action button", async ({ page }) => {
  await page.goto("localhost:3000/");
  const ctaButton = await page.locator("#cta");

  expect(await ctaButton.count()).toBe(1);
  expect(await ctaButton.textContent()).toContain("Get in touch");
  expect(await ctaButton.getAttribute("href")).toBe("#contact");
});
