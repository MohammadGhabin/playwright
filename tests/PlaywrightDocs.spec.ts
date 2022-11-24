// PlaywrightGettingStartedPage.spec.ts

import { test, expect, webkit, Page, chromium } from '@playwright/test';
import { PlaywrightPage } from '../page/PlaywrightPage';
import { PageFactory } from '../page/pageFactory';
import { Pages } from '../page/Pages';
import { PlaywrightHomePage } from '../page/PlaywrightHomePage';
import { PlaywrightDocsPage } from '../page/PlaywrightDocsPage';

test.describe('Docs page visibility tests', async () => {
  let page: Page;
  let playwrightDocsPage: PlaywrightPage;

  test.beforeEach(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    playwrightDocsPage = PageFactory.createObject(Pages.Docs, page);
  });

  test.afterEach(async () => {
    await page.close();
  })
  
  test('Docs page has a visible navigation menu', async () => {
    await playwrightDocsPage.goto();
    await expect(playwrightDocsPage.navigationMenu).toBeVisible();
  });

  test('Docs page has a visible document search box button', async () => {
    await playwrightDocsPage.goto();
    await expect(playwrightDocsPage.searchBoxButton).toBeVisible();
  });
  
  test('Docs page has a visible document search box view', async () => {
    await playwrightDocsPage.goto();
    await playwrightDocsPage.searchBoxButton.click();
    await expect(playwrightDocsPage.searchBoxView).toBeVisible();
  });

  test('Docs page has a visible document search box input', async () => {
    await playwrightDocsPage.goto();
    await playwrightDocsPage.searchBoxButton.click();
    await expect(playwrightDocsPage.searchBoxInput).toBeVisible();
  });

  test('Docs page has a visible header', async () => {
    await playwrightDocsPage.goto();
    await expect(playwrightDocsPage.header).toBeVisible();
  });

  test('Docs page has a visible footer', async () => {
    await playwrightDocsPage.goto();
    await expect(playwrightDocsPage.footer).toBeVisible();
  });

});

test.describe("Docs page has specfic text", async () => {
  let page: Page;
  let playwrightDocsPage: PlaywrightPage;

  test.beforeEach(async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    playwrightDocsPage = PageFactory.createObject(Pages.Docs, page);
  });

  test.afterEach(async () => {
    await page.close();
  })
  
  test('footer contain copywrite text', async () => {
    await playwrightDocsPage.goto();
    await expect(playwrightDocsPage.footerCopyright).toHaveText("Copyright © 2022 Microsoft");
  });
})
