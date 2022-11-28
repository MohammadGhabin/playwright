// homePage.spec.ts

import { test, expect, webkit, Page, Browser, BrowserContext } from '@playwright/test';
import { HomePage } from '../page/homePage';
import { HomeSelectors } from '../selector/homeSelectors';

test.describe('Home page', async () => {
  let page: Page;
  let homePage: HomePage;
  let browser: Browser;
  let context: BrowserContext;
  let homeSelectors: HomeSelectors;
  const url = "https://playwright.dev/";

  test.beforeAll(async () => {
    browser = await webkit.launch();
    context = await browser.newContext();
  });

  test.beforeEach(async () => {
    page = await context.newPage();
    homeSelectors = new HomeSelectors();
    homePage = new HomePage(page, homeSelectors);
    await homePage.goto(url);
  });
  
  test('Navigation menu', async () => {
    await expect(homePage.navigationMenu).toBeVisible();
  });

  test('Search box button', async () => {
    await expect(homePage.searchBoxButton).toBeVisible();
  });
  
  test('Search box view', async () => {
    await homePage.clickSearchBotton();
    await expect(homePage.searchBoxView).toBeVisible();
  });

  test('Search box input', async () => {
    await homePage.clickSearchBotton();
    await expect(homePage.searchBoxInput).toBeVisible();
  });

  test('Header', async () => {
    await homePage.goto(url);
    await expect(homePage.header).toBeVisible();
  });

  test('Footer', async () => {
    await homePage.goto(url);
    await expect(homePage.footer).toBeVisible();
  });

  test('Get started link', async () => {
    await homePage.goto(url);
    await expect(homePage.getStartedLink).toBeVisible();
  });

  test('footer Copywrite text', async () => {
    await homePage.goto(url);
    await expect(homePage.footerCopyright).toHaveText("Copyright © 2022 Microsoft");
  });

  test.afterEach(async () => {
    await page.close();
  })

  test.afterAll(async () => {
    await context.close();
    await browser.close();
  });
  
});