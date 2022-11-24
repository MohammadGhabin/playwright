// PlaywrightHomePage.ts

import { Locator, Page } from '@playwright/test';
import { PlaywrightPage } from './PlaywrightPage';

export class PlaywrightHomePage extends PlaywrightPage{
  readonly getStartedLink: Locator;
  
  constructor(page: Page) {
    super();
    this.page = page;
    this.navigationMenu = page.locator('nav.navbar--fixed-top');
    this.header = page.locator('header');
    this.footer = page.locator('footer.footer--dark');
    this.searchBoxButton = page.locator('button.DocSearch.DocSearch-Button');
    this.searchBoxView = page.locator('div.DocSearch-Modal');
    this.searchBoxInput = page.locator('id=docsearch-input');
    this.footerCopyright = page.locator('div.footer__copyright');
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }
}