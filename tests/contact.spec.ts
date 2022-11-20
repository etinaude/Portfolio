import { expect, test } from "@playwright/test";

test("Contact has expected h1", async ({ page }) => {
  await page.goto("localhost:3000/contact");
  expect(await page.textContent("h1")).toBe("Contact Me");
});

test("Contact has expected form", async ({ page }) => {
  await page.goto("localhost:3000/contact");
  const input = await page.locator("input");
  expect(await input.count()).toBe(2);

  const textarea = await page.locator("textarea");
  expect(await textarea.count()).toBe(1);

  const button = await page.locator("button");
  expect(await button.count()).toBe(1);
});

test("Contact form validation", async ({ page }) => {
  await page.goto("localhost:3000/contact");
  const button = await page.locator("button");
  await button.click();

  const error = await page.locator(".error");
  expect(await error.count()).toBe(1);
});

test("Contact form submission", async ({ page }) => {
  await page.goto("localhost:3000/contact");
  const input = await page.locator("input[name='name']");
  await input.fill("TEST BOT");

  const email = await page.locator("input[name='email']");
  await email.fill("test@bot.com");

  const textarea = await page.locator("textarea");
  await textarea.fill("TEST BOT");

  const button = await page.locator("button");
  await button.click();

  const success = await page.locator(".banner");
  expect(await success.count()).toBe(1);
});

test("Social Links", async ({ page }) => {
  await page.goto("localhost:3000/contact");
  const links = await page.locator("a.social-link");
  expect(await links.count()).toBe(4);

  const github = await page.locator("#github-link");
  expect(await github.getAttribute("href")).toBe(
    "https://www.github.com/etinaude/"
  );

  const linkedin = await page.locator("#linkedin-link");
  expect(await linkedin.getAttribute("href")).toBe(
    "https://www.linkedin.com/in/etinaude/"
  );

  const email = await page.locator("#email-link");
  expect(await email.getAttribute("href")).toBe("mailto:eti@naude.dev");

  const insta = await page.locator("#insta-link");
  expect(await insta.getAttribute("href")).toBe(
    "https://www.instagram.com/etinaude/"
  );
});
