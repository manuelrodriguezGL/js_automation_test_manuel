const assert = require('assert');
import Utils from '../utils/utils';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import AccountPage from '../pages/accountPage';
import ProductPage from '../pages/productPage';


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
        LoginPage.setLoginEmailAddress(Utils.generateEmail());
        LoginPage.clickSubmitCreate();
        browser.waitUntil(() => { // Had to use this wait, because header text was not changing
            return LoginPage.pageHeader.getText() === 'CREATE AN ACCOUNT'
        }, 15000, 'Wrong header! Found: ' + LoginPage.pageHeader.getText());

        //Fill user details
        LoginPage.createBasicUser(Utils.generateFirst(), Utils.generateLast(), Utils.generatePassword(),
            Utils.generateAddress(), Utils.generateCity(), Utils.generateState(), Utils.generateZipCode(),
            Utils.generateMobilePhone(), 'Address_1');  
        // browser.pause(5000); // Just a trick to see login results
        assert.strictEqual(AccountPage.pageHeader.getText(), 'MY ACCOUNT');

        // Navigate to product page
        AccountPage.moveToWomenCategory();
       // browser.pause(2000); // Just a trick to see login results
        AccountPage.moveToClickCasualDressesCategory();
        assert.strictEqual(ProductPage.pageHeader.getText(), 'CASUAL DRESSES ');
        browser.pause(2000); // Just a trick to see cart results
        ProductPage.moveToProduct();
        ProductPage.clickAddToCartButton();
        browser.pause(2000); // Just a trick to see cart results

    });
})