// playwriteHomePage.spec.ts

import { test, expect, webkit, Page, chromium } from '@playwright/test';
import { PlaywrightPage } from '../page/PlaywrightPage';
import { PageFactory } from '../page/pageFactory';
import { Pages } from '../page/Pages';
import { PlaywrightHomePage } from '../page/PlaywrightHomePage';

test.describe('Home page visibility tests', async () => {
  let page: Page;
  let playwriteHomePage: any;

  test.beforeEach(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    playwriteHomePage = PageFactory.createObject(Pages.Home, page);
  });

  test.afterEach(async () => {
    await page.close();
  })
  
  test('Home page has a visible navigation menu', async () => {
    await playwriteHomePage.goto();
    await expect(playwriteHomePage.navigationMenu).toBeVisible();
  });

  test('Home page has a visible document search box button', async () => {
    await playwriteHomePage.goto();
    await expect(playwriteHomePage.searchBoxButton).toBeVisible();
  });
  
  test('Home page has a visible document search box view', async () => {
    await playwriteHomePage.goto();
    await playwriteHomePage.searchBoxButton.click();
    await expect(playwriteHomePage.searchBoxView).toBeVisible();
  });

  test('Home page has a visible document search box input', async () => {
    await playwriteHomePage.goto();
    await playwriteHomePage.searchBoxButton.click();
    await expect(playwriteHomePage.searchBoxInput).toBeVisible();
  });

  test('Home page has a visible header', async () => {
    await playwriteHomePage.goto();
    await expect(playwriteHomePage.header).toBeVisible();
  });

  test('Home page has a visible footer', async () => {
    await playwriteHomePage.goto();
    await expect(playwriteHomePage.footer).toBeVisible();
  });

  test('Home page has a visible get started link', async () => {
    await playwriteHomePage.goto();
    await expect(playwriteHomePage.getStartedLink).toBeVisible();
  });
});

test.describe("Home page has specfic text", async () => {
  let page: Page;
  let playwriteHomePage: PlaywrightPage;

  test.beforeEach(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    playwriteHomePage = PageFactory.createObject(Pages.Home, page);
  });

  test.afterEach(async () => {
    await page.close();
  })
  
  test('footer contain copywrite text', async () => {
    await playwriteHomePage.goto();
    await expect(playwriteHomePage.footerCopyright).toHaveText("Copyright © 2022 Microsoft");
  });
})
