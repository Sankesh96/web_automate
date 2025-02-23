const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

async function login(page) {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  
  await page.goto('https://scopex.money/Login');
  await page.fill('[name="username"]', 'email.at.sankesh96@gmail.com');
  await page.fill('[name="password"]', 'ScopeX$96');
  await page.click('button:has-text("Log in")');
 // await expect(page).toHaveURL('https://scopex.money/Dashboard');
}

module.exports = { login, test, expect };