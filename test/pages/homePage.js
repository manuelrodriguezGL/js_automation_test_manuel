import Page from '../pages/page';

class HomePage extends Page {
    get loginLink() { return $('.login'); }

    clickLoginLink() {
        this.loginLink.click();
    }
}

export default new HomePage();