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

    async goto(url: string){
        await this.page.goto(url);
    }

    async clickSearchBotton(){
        await this.searchBoxButton.click();
    }
}