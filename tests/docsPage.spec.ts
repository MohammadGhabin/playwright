// docsPage.spec.ts

import { test, expect, webkit, Page, Browser, BrowserContext } from '@playwright/test';
import { DocsPage } from '../page/docsPage';
import { DocsSelectors } from '../selector/docsSelectors';

test.describe('Docs page', async () => {
  let page: Page;
  let docsPage: DocsPage;
  let browser : Browser;
  let context : BrowserContext;
  let docsSelectors : DocsSelectors;
  const url = "https://playwright.dev/docs/intro";

  test.beforeAll(async () => {
    browser = await webkit.launch();
    context = await browser.newContext();
  });

  test.beforeEach(async () => {
    page = await context.newPage();
    docsSelectors = new DocsSelectors();
    docsPage = new DocsPage(page, docsSelectors);
    await docsPage.goto(url);
  });
  
  test('Navigation menu', async () => {
    await expect(docsPage.navigationMenu).toBeVisible();
  });

  test('Search box button', async () => {
    await expect(docsPage.searchBoxButton).toBeVisible();
  });
  
  test('Search box view', async () => {
    await docsPage.clickSearchBotton();
    await expect(docsPage.searchBoxView).toBeVisible();
  });

  test('Search box input', async () => {
    await docsPage.clickSearchBotton();
    await expect(docsPage.searchBoxInput).toBeVisible();
  });

  test('Header', async () => {
    await expect(docsPage.header).toBeVisible();
  });

  test('Footer', async () => {
    await expect(docsPage.footer).toBeVisible();
  });

  test('Footer Copywrite text', async () => {
    await expect(docsPage.footerCopyright).toHaveText("Copyright © 2022 Microsoft");
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.afterAll(async () => {
    await context.close();
    await browser.close();
  });

});
