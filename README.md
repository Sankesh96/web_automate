Playwright Automation for money exchange web application
Project Overview: This project automates end-to-end testing for the web application using Playwright with JavaScript. The test suite includes user regiseration, recipient management, and logout functionalities.
Playwright (for browser automation)
JavaScript (for scripting)
Node.js (runtime environment)
Setup and Installation 1 Prerequisites  Install Node.js (v16+ recommended)
                                        Install Playwright
                        2 Install Dependencies  npm install
                                                npx playwright install
                        3 Run Tests    npx playwright test tests/addrecipient.test.js
Test Scenarios
* Login Test (login.test.js)
    Logs into Scopex Money with valid credentials
* Add Recipient Test (addrecipient.test.js)
    Adds a new recipient with name, nickname, account details
    Handles duplicate recipient validation
* Logout Test (logout.test.js)
    Logs out successfully and verifies redirection
Configuration:  Modify playwright.config.js for browser settings, test retries, and timeouts.
Notes:
  Common authentication functions (login & logout) are placed in helpers/authHelper.js.
  Uses await page.waitForSelector() to handle UI elements reliably.


                        
                                                
