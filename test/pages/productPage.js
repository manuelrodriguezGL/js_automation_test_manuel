import Page from '../pages/page';

class ProductPage extends Page {

    get pageHeader() { return $('.cat-name'); }
    get product() { return $('img[Title="Printed Dress"]'); }
    get addToCartButton() { return $('a[Title="Add to cart"][data-id-product="3"]'); }
    get proceedToCheckoutButton() { return $('a[title="Proceed to checkout"]');}

    //get casualDressesCategory() { return $('a[title="Casual Dresses"]'); }

    moveToProduct() { 
        this.product.scrollIntoView();
        this.product.waitForDisplayed('2000');
        this.product.moveTo(); 
    }
    clickAddToCartButton() {
        this.addToCartButton.waitForDisplayed('2000');
        this.addToCartButton.moveTo();
        this.addToCartButton.click();
    }

    clickProceedToCheckout(){
        this.proceedToCheckoutButton.waitForDisplayed('2000');
        this.proceedToCheckoutButton.click();
    }
}

export default new ProductPage();