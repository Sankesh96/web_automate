// authHelper.js
async function login(page) {
    await page.goto('https://scopex.money/login');
    await page.fill('[name="username"]', 'email.at.sankesh96@gmail.com');
    await page.fill('[name="password"]', 'ScopeX$96');
    await page.click('button:has-text("Log in")');
   await page.waitForSelector('#dashboard', { state: 'visible' }); // Ensure login success
  }
  
  async function logout(page) {
    await page.goto('https://scopex.money/dashboard');
    await page.click('.dashboard-top-menu'); 

    await page.waitForSelector('#menu-item-1', { state: 'visible' });
  
    await page.click('a[#menu-item-1]');

  }
  
  module.exports = { login, logout };
  