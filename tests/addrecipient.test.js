const { test, expect } = require('@playwright/test');
const { login, logout } = require('./authhelper'); // Import helper functions

test('Login and add a recipient', async ({ page }) => {
  // Step 1: Login to Scopex Money
  await login(page);

  // Step 2: Click the "Recipients" button to open the dropdown
  await page.click('button:has-text("Recipients")');

  // Step 3: Wait for the dropdown to be visible
  await page.waitForSelector('.submenu', { state: 'visible' });

  // Step 4: Click the "Add Recipient" link inside the dropdown
  await page.click('a[href="/Add-Recipient"]');

  await page.fill('[name="recipient_name"]', 'Raj Kumar');
  await page.fill('[name="recipient_nick_name"]', 'R K');
  await page.fill('[name="bank_account_number"]', '000405007899');
  await page.fill('[name="ifsc_code"]', 'ICIC0000004');
  await page.selectOption('[name="country"]', 'India'); 

  await page.click('button[type="submit"]');
  // Add a wait timer to ensure the toast message is visible
 
  await page.waitForSelector('.swal2-popup', { state: 'visible' });
  await page.click('.swal2-confirm');
// Add a wait timer to ensure the toast message is visible
//await page.waitForTimeout(2000); // Wait for 3 seconds

  // Step 6: Check if "Recipient already exists" toast appears
  const toastSelector = '.swal2-popup'; // Update selector if needed
  const recipientExists = await page.isVisible(toastSelector);

  if (recipientExists) {
    const toastText = await page.textContent(toastSelector);
    if (toastText.includes('Bank account number already exists')) {
     
     // await page.waitForTimeout(3000); // Wait for 3 seconds to view the toast message
      console.log('Test will stop here.');
     return;
    }
  }
  else{

    await logout(page);
  }
  
  // Proceed to logout if recipient does not already exist
 // await page.goto('https://scopex.money/dashboard');
  
  
}, { timeout: 60000 }); // Increase the timeout to 60 seconds