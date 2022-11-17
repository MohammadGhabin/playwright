import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('homepage has search box', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // create a locator
  const searchBox = page.getByRole('button', { name: 'Search' });

  // expect the search box botton to be visible.
  await expect(searchBox).toBeVisible();

  // click the search box botton.
  await searchBox.click();

  // expect the search box view to be visible.
  await expect(page.locator(".DocSearch-Modal")).toBeVisible();

});

test('homepage has footer copywrite text', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // create a locator
  const copywrite = page.locator(".footer__copyright");

  // expect the copywrite footer to be visible.
  await expect(copywrite).toBeVisible();

  // expect the copywrite footer to have a specific text
  await expect(copywrite).toHaveText("Copyright © 2022 Microsoft");

});