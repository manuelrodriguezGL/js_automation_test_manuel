import Page from '../pages/page';

class LoginPage extends Page {
    get loginEmailAddress() { return $('#email_create'); }
    get submitCreate() { return $('#SubmitCreate'); }

    get genderRadioMr() { return $('#id_gender1'); }
    get firstNamePersonal() { return $('#customer_firstname'); }
    get lastNamePersonal() { return $('#customer_lastname'); }
    get password() { return $('#passwd'); }
    get days() { return $('#days'); }
    get months() { return $('#months'); }
    get years() { return $('#years'); }
    get firstNameAddress() { return $('#firstname'); }
    get lastNameAddress() { return $('#lastname'); }
    get addressLine1() { return $('#address1'); }
    get city() { return $('#city'); }
    get state() { return $('#id_state'); }
    get zipCode() { return $('#postcode'); }
    get country() { return $('#id_country'); }
    get phoneMobile() { return $('#phone_mobile'); }
    get addressAlias() { return $('#alias'); }

    fillLoginEmailAddress(text) {
        this.loginEmailAddress.setValue(text);
    }

    clickSubmitCreate() {
        this.submitCreate.click();
    }

    fillFirstNamePersonal(text) {
        this.firstNamePersonal.setValue(text);
    }

}

export default new LoginPage();