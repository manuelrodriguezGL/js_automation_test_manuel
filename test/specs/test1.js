const assert = require('assert');
import EmailUtils from '../utils/emailUtils';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import loginPage from '../pages/loginPage';
import emailUtils from '../utils/emailUtils';


describe('Shopping cart page', () => {
    // it('should have the right title', () => {
    //     browser.url('https://webdriver.io');
    //     let title = browser.getTitle();
    //     assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    // });

    it('should have the right title', () => {
        // Load home page and click on Sign in
        HomePage.open(' http://automationpractice.com/index.php');
        assert.strictEqual(browser.getTitle(), 'My Store');
        HomePage.clickLoginLink();
        assert.strictEqual(browser.getTitle(), 'Login - My Store');

        // Enter email and click on Create account
        LoginPage.setLoginEmailAddress(EmailUtils.generateEmail());
        LoginPage.clickSubmitCreate();
        browser.waitUntil(() => { // Had to use this wait, because header text was not changing
            return LoginPage.pageHeader.getText() === 'CREATE AN ACCOUNT'
        }, 15000, 'Wrong header! Found: ' + LoginPage.pageHeader.getText());

        //Fill user details
        LoginPage.createBasicUser(emailUtils.generateFirst(), emailUtils.generateLast(), emailUtils.generatePassword(),
            emailUtils.generateAddress(), emailUtils.generateCity(), emailUtils.generateState(), emailUtils.generateZipCode(),
            emailUtils.generateMobilePhone(), 'Address_1');
        
    });
})