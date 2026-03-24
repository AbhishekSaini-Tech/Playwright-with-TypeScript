import {test, expect } from '@playwright/test';
import type{Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test';

test('my first test', async () => {
    const browser:Browser = await chromium.launch();
    const page:Page = await browser.newPage();
    await page.goto('https://practice.expandtesting.com/register');
    await expect(page).toHaveTitle('Test register page');
    
    const userName:Locator = page.locator('#input-username');
    const password:Locator =   page.locator('#input-password');
    const loginButton:Locator = page.locator('#button-Register');
    
    await userName.fill('admin');
    await password.fill('Password123');
    const title = await page.title();
    console.log("title: " + title);

    await page.screenshot({path: 'screenshot.png', fullPage: true});

    await loginButton.click();
    await browser.close();
});