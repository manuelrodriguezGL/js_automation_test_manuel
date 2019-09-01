import Page from '../pages/page';

class ShoppingCart extends Page {

    get pageHeader() { return $('#cart_title'); }
}


export default new ShoppingCart();