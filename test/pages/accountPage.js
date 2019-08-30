import Page from '../pages/page';

class AccountPage extends Page {
    get womenCategory() { return $('a[title="Women"]'); }
    get casualDressesCategory() { return $('a[title="Casual Dresses"]'); }

    moveToWomenCategory() { this.womenCategory.moveTo(); }
    moveToClickCasualDressesCategory() {
        this.casualDressesCategory.moveTo();
        this.casualDressesCategory.click();
    }
}

export default new AccountPage();