const { test, expect } = require('@playwright/test');

test('Register a new user', async ({ page }) => {
  await page.goto('https://scopex.money/signup');
  
  await page.fill('[name="name"]', 'Test User');
  await page.fill('[name="username"]', 'testuser@example.com');
  // await page.fill('[name="password"]', 'Password123!');
  await page.fill('[name="referral"]', 'mycode');
 
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('https://scopex.money/Dashboard');
});
