// docsPage.spec.ts

import { test, expect, Page } from '@playwright/test';
import { SearchData } from '../Data/searchData';
import { DocsPage } from '../page/docsPage';
import { DocsSelectors } from '../selector/docsSelectors';
import { Util } from '../utils/util';

test.describe('Docs page', async () => {
  let page: Page;
  let docsPage: DocsPage;
  let docsSelectors : DocsSelectors;
  let util: Util;
  let searchData: SearchData;
  const url = "https://playwright.dev/docs/intro";

  test.beforeEach(async ({browser}) => {
    page = await browser.newPage();
    docsSelectors = new DocsSelectors();
    docsPage = new DocsPage(page, docsSelectors);
    util = new Util(page);
    searchData = new SearchData();
    await util.goto(url, "load")
  });
  
  test('Navigation menu', async () => {
    await expect(docsPage.navigationMenu).toBeVisible();
  });

  test('Search box button', async () => {
    await expect(docsPage.searchBoxButton).toBeVisible();
  });
  
  test('Search box view', async () => {
    await util.click(docsPage.searchBoxButton, docsSelectors.searchBoxButton, "attached");
    await expect(docsPage.searchBoxView).toBeVisible();
  });

  test('Search box input', async () => {
    await util.click(docsPage.searchBoxButton, docsSelectors.searchBoxButton, "attached");
    await expect(docsPage.searchBoxInput).toBeVisible();
  });

  test('Search box result', async () => {
    await util.click(docsPage.searchBoxButton, docsSelectors.searchBoxButton, "attached");
    await util.click(docsPage.searchBoxInput, docsSelectors.searchBoxInput, "attached");
    
    for(var val of searchData.commonData){
      await docsPage.searchBoxInput.fill(val[0]);
      expect(await page.waitForSelector(val[1]))
    }
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

});
