// util.ts

import { Locator, Page } from "@playwright/test";

export class Util{
    readonly page : Page;

    constructor(page: Page){
        this.page = page;
    }

    async click(locator: Locator, selector: string, nextState: "attached" | "detached" | "visible" | "hidden" | undefined){
        await locator.click();
        await this.page.waitForSelector(selector, {state: nextState})
    }

    async goto(url: string, waitUntil: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined){
        await this.page.goto(url, {waitUntil: waitUntil});
    }
}