// homePage.spec.ts

import { test, expect, Page } from '@playwright/test';
import { SearchData } from '../Data/searchData';
import { HomePage } from '../page/homePage';
import { HomeSelectors } from '../selector/homeSelectors';
import { Util } from '../utils/util';

test.describe('Home page', async () => {
  let page: Page;
  let homePage: HomePage;
  let homeSelectors: HomeSelectors;
  let util: Util;
  let searchData: SearchData;
  const url = "https://playwright.dev/";

  test.beforeEach(async ({browser}) => {
    page = await browser.newPage();
    homeSelectors = new HomeSelectors();
    homePage = new HomePage(page, homeSelectors);
    util = new Util(page);
    searchData = new SearchData();
    await util.goto(url, "load");
  });
  
  test('Navigation menu', async () => {
    await expect(homePage.navigationMenu).toBeVisible();
  });

  test('Search box button', async () => {
    await expect(homePage.searchBoxButton).toBeVisible();
  });
  
  test('Search box view', async () => {
    await util.click(homePage.searchBoxButton, homeSelectors.searchBoxButton, "attached");
    await expect(homePage.searchBoxView).toBeVisible();
  });

  test('Search box input', async () => {
    await util.click(homePage.searchBoxButton, homeSelectors.searchBoxButton, "attached");
    await expect(homePage.searchBoxInput).toBeVisible();
  });

  test('Search box result', async () => {
    await util.click(homePage.searchBoxButton, homeSelectors.searchBoxButton, "attached");
    await util.click(homePage.searchBoxInput, homeSelectors.searchBoxInput, "attached");
    
    for(var val of searchData.commonData){
      await homePage.searchBoxInput.fill(val[0]);
      expect(await page.waitForSelector(val[1]))
    }
  });

  test('Header', async () => {
    await expect(homePage.header).toBeVisible();
  });

  test('Footer', async () => {
    await expect(homePage.footer).toBeVisible();
  });

  test('Get started link', async () => {
    await expect(homePage.getStartedLink).toBeVisible();
  });

  test('footer Copywrite text', async () => {
    await expect(homePage.footerCopyright).toHaveText("Copyright © 2022 Microsoft");
  });

  test.afterEach(async () => {
    await page.close();
  })
  
});