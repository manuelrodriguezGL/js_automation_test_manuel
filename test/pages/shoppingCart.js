import Page from '../pages/page';

class ShoppingCartPage extends Page {

    get pageHeaderSummary() { return $('#cart_title'); }
    get proceedToCheckoutButtonSummary() { return $('.cart_navigation.clearfix>a[title="Proceed to checkout"]'); }

    get pageHeaderAddresses() { return $('.page-heading'); }
    get proceedToCheckoutButtonAddress() {
        return $('.cart_navigation.clearfix>button[name="processAddress"]');
    }

    get pageHeaderShipping() { return $('.page-heading'); }
    get proceedToCheckoutButtonShipping() {
        return $('.cart_navigation.clearfix>button[name="processCarrier"]');
    }
    get termsOfServiceCheckbox() { return $('.checker>span>input#cgv'); }

    get pageHeaderPayment() { return $('.page-heading'); }
    get payByBankWire() { return $('.bankwire'); }

    get pageHeaderRoderSummary() { return $('.page-heading'); }
    get proceedToCheckoutButtonOrderSummary() {
        return $('.cart_navigation.clearfix>button]');
    }

    clickProceedToCheckout() {
        this.proceedToCheckoutButtonSummary.scrollIntoView();
        this.proceedToCheckoutButtonSummary.click();
    }

    clickProceedToCheckoutAddress() {
        this.proceedToCheckoutButtonAddress.scrollIntoView();
        this.proceedToCheckoutButtonAddress.click();
    }

    clickProceedToCheckoutShipping() {
        this.termsOfServiceCheckbox.scrollIntoView();
        this.termsOfServiceCheckbox.click();
        this.proceedToCheckoutButtonShipping.click();
    }

    clickPayByBankWire() {
        this.payByBankWire.scrollIntoView();
        this.payByBankWire.click();
    }

    clickConfirmOrder() {
        this.proceedToCheckoutButtonOrderSummary.scrollIntoView();
        this.proceedToCheckoutButtonOrderSummary.click();
    }
}


export default new ShoppingCartPage();