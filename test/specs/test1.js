const assert = require('assert');
import Utils from '../utils/utils';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import AccountPage from '../pages/accountPage';
import ProductPage from '../pages/productPage';
import ShoppingCart from '../pages/shoppingCart';
import OrderConfirmationPage from '../pages/orderConfirmationPage';


describe('Shopping cart page', () => {
    it('Should process order checkout', () => {
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

        // Create user
        LoginPage.createBasicUser(Utils.generateFirst(), Utils.generateLast(), Utils.generatePassword(),
            Utils.generateAddress(), Utils.generateCity(), Utils.generateState(), Utils.generateZipCode(),
            Utils.generateMobilePhone(), 'Address_1');  
        assert.strictEqual(AccountPage.pageHeader.getText(), 'MY ACCOUNT');

        // Navigate to product page
        AccountPage.moveToWomenCategory();
        AccountPage.moveToClickCasualDressesCategory();
        assert.strictEqual(ProductPage.pageHeader.getText(), 'CASUAL DRESSES ');
        
        // Add product to cart
        ProductPage.moveToProduct();
        ProductPage.clickAddToCartButton();
        ProductPage.clickProceedToCheckout();

        // Shopping cart workflow to checkout
        assert.notStrictEqual(ShoppingCart.pageHeaderSummary.getText(), 'SHOPPING-CART SUMMARY'); // There's a span inside the h1 with text
        ShoppingCart.clickProceedToCheckoutSummary();

        assert.strictEqual(ShoppingCart.pageHeaderAddresses.getText(), 'ADDRESSES');
        ShoppingCart.clickProceedToCheckoutAddress();

        assert.strictEqual(ShoppingCart.pageHeaderShipping.getText(), 'SHIPPING');
        ShoppingCart.clickProceedToCheckoutShipping();

        assert.strictEqual(ShoppingCart.pageHeaderPayment.getText(), 'PLEASE CHOOSE YOUR PAYMENT METHOD');
        ShoppingCart.clickPayByBankWire();

        assert.strictEqual(ShoppingCart.pageHeaderOrderSummary.getText(), 'ORDER SUMMARY');
        ShoppingCart.clickConfirmOrder();

        // Order placed
        assert.strictEqual(OrderConfirmationPage.pageHeader.getText(), 'ORDER CONFIRMATION');
        assert.strictEqual(OrderConfirmationPage.orderCompleteText.getText(), 'Your order on My Store is complete.')

    });
})