import { test, expect } from '@playwright/test';

export async function logout(page) {
   await page.goto('https://scopex.money/dashboard');
    await page.click('.dashboard-top-menu'); 

    await page.waitForSelector('#menu-item-1', { state: 'visible' });
  
    await page.click('a[#menu-item-1]');

}
  