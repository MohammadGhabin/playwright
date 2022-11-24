// pageFactory.ts

import { Page } from '@playwright/test';
import { PlaywrightHomePage } from '../page/PlaywrightHomePage';
import { PlaywrightDocsPage } from '../page/PlaywrightDocsPage';
import { PlaywrightPage } from '../page/PlaywrightPage';
import { Pages } from './Pages';

export class PageFactory{
    static createObject(name: string, page: Page){

        switch(name){
            case Pages.Home: return new PlaywrightHomePage(page);

            case Pages.Docs: return new PlaywrightDocsPage(page);

            default: throw new Error("InvalidArgumentExcpetion - BANG");
        }

        
    }
}