// docsPage.ts

import { Locator, Page } from '@playwright/test';
import { DocsSelectors } from '../selector/docsSelectors';
import { BasePage } from './BasePage';

export class DocsPage extends BasePage{
  readonly pomLink: Locator;

  constructor(page: Page, docsSelector: DocsSelectors) {
    super();
    this.page = page;
    this.navigationMenu = page.locator(docsSelector.navigationMenu);
    this.header = page.locator(docsSelector.header);
    this.footer = page.locator(docsSelector.footer);
    this.searchBoxButton = page.locator(docsSelector.searchBoxButton);
    this.searchBoxView = page.locator(docsSelector.searchBoxView);
    this.searchBoxInput = page.locator(docsSelector.searchBoxInput);
    this.footerCopyright = page.locator(docsSelector.footerCopyright);
    this.pomLink = page.locator(docsSelector.pomLink);
  }
}