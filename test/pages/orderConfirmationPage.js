import Page from '../pages/page';

class OrderConfirmationPage extends Page {

    get pageHeader() { return $('.page-heading'); }
    get orderCompleteText() { return $('.cheque-indent>.dark'); }
    
}


export default new OrderConfirmationPage();

