const assert = require('assert');
import EmailUtils from '../utils/emailUtils';
import HomePage from '../pages/homePage';


describe('Shopping cart page', () => {
    // it('should have the right title', () => {
    //     browser.url('https://webdriver.io');
    //     let title = browser.getTitle();
    //     assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    // });

    it('should have the right title', () => {
        HomePage.open(' http://automationpractice.com/index.php');
        console.log(EmailUtils.generateEmail());
        assert.strictEqual(browser.getTitle(), 'My Store');
    });
})