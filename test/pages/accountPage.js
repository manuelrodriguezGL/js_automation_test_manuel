import Page from '../pages/page';

class AccountPage extends Page {

    get pageHeader() { return $('.page-heading'); }
    get womenCategory() { return $('a[title="Women"]'); }
    get casualDressesCategory() { return $('a[title="Casual Dresses"]'); }

    moveToWomenCategory() { this.womenCategory.moveTo(); }
    moveToClickCasualDressesCategory() {
        this.casualDressesCategory.waitForDisplayed('2000');
        this.casualDressesCategory.moveTo();
        this.casualDressesCategory.click();
    }
}

export default new AccountPage();