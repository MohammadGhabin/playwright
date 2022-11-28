// basePage.ts

import { Locator, Page } from "@playwright/test"

export abstract class BasePage {
    page: Page
    navigationMenu: Locator
    header: Locator
    footer: Locator
    searchBoxButton: Locator
    searchBoxView: Locator
    searchBoxInput: Locator
    footerCopyright: Locator
}