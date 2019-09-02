import Page from '../pages/page';

class LoginPage extends Page {
    get loginEmailAddress() { return $('#email_create'); }
    get submitCreate() { return $('#SubmitCreate'); }

    get pageHeader() { return $('#noSlide>.page-heading'); }
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

    get submitAccountButton() { return $('#submitAccount'); }

    setLoginEmailAddress(text) { this.loginEmailAddress.setValue(text); }
    clickSubmitCreate() { this.submitCreate.click(); }

    setFirstNamePersonal(text) { this.firstNamePersonal.setValue(text); }
    setLastNamePersonal(text) { this.lastNamePersonal.setValue(text); }
    setPassword(text) { this.password.setValue(text); }
    setFirstNameAddress(text) { this.firstNameAddress.setValue(text); }
    setLastNameAddress(text) { this.lastNameAddress.setValue(text); }
    setAddressLine1(text) { this.addressLine1.setValue(text); }
    setCity(text) { this.city.setValue(text); }
    setState(text) {
        this.state.scrollIntoView();
        this.state.click();
        this.state.selectByVisibleText(text);
    }
    setZipCode(text) { this.zipCode.setValue(text); }
    setPhoneMobile(text) { this.phoneMobile.setValue(text); }
    setAddressAlias(text) { this.addressAlias.setValue(text); }

    clickSubmitAccountButton() { this.submitAccountButton.click(); }

    createBasicUser(firstName, lastName, password, address, city, state, zip, mobile, alias) {
        this.setFirstNamePersonal(firstName);
        this.setLastNamePersonal(lastName);
        this.setPassword(password);
        this.setAddressLine1(address);
        this.setCity(city);
        this.setState(state);
        this.setZipCode(zip);
        this.setPhoneMobile(mobile);
        this.setAddressAlias(alias);

        this.clickSubmitAccountButton();
    }
}

export default new LoginPage();