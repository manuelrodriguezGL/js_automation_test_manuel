const Chance = require('chance');

class EmailUtils {
    constructor() {
        this.chance = new Chance();
    }

    generateEmail() {
        return this.chance.email({ domain: "example.com" });
    }

    generateFirst() {
        return this.chance.first();
    }

    generateLast() {
        return this.chance.last();
    }

    generatePassword() {
        return '123456';
    }

    generateAddress() {
        return this.chance.address({ short_suffix: true });
    }

    generateCity() {
        return this.chance.city();
    }

    generateState() {
        return this.chance.state({ full: true });
    }

    generateZipCode(){
        return this.chance.zip();
    }

    generateMobilePhone() {
        return this.chance.phone({ country: "us", mobile: true });
    }
}

export default new EmailUtils();

