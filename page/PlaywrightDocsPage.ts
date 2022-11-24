// PlaywrightDocsPage.ts

import { Locator, Page } from '@playwright/test';
import { PlaywrightPage } from './PlaywrightPage';

export class PlaywrightDocsPage extends PlaywrightPage{
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;
  
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
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.pomLink = page.locator('li', { hasText: 'Guides' }).locator('a', { hasText: 'Page Object Model' });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto('https://playwright.dev/docs/intro');
  }

}