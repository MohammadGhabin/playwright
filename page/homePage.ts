// homePage.ts

import { Locator, Page } from '@playwright/test';
import { HomeSelectors } from '../selector/homeSelectors';
import { BasePage } from './basePage';

export class HomePage extends BasePage{
  readonly getStartedLink: Locator;

  constructor(page: Page, homeSelectors: HomeSelectors) {
    super();
    this.page = page;
    this.navigationMenu = page.locator(homeSelectors.navigationMenu);
    this.header = page.locator(homeSelectors.header);
    this.footer = page.locator(homeSelectors.footer);
    this.searchBoxButton = page.locator(homeSelectors.searchBoxButton);
    this.searchBoxView = page.locator(homeSelectors.searchBoxView);
    this.searchBoxInput = page.locator(homeSelectors.searchBoxInput);
    this.footerCopyright = page.locator(homeSelectors.footerCopyright);
    this.getStartedLink = page.locator(homeSelectors.getStartedLink);
  }
}
