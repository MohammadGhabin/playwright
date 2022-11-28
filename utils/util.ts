// util.ts

import { Locator, Page } from "@playwright/test";

export class Util{
    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async click(locator: Locator, selector: string, nextState: "attached" | "visible"){
        await locator.click();
        await this.page.waitForSelector(selector, {state: nextState})
    }
}