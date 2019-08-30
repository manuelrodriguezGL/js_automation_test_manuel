const Chance = require('chance');

class EmailUtils {
    constructor() {
        this.chance = new Chance();
    }

    generateEmail() {
        return this.chance.email({ domain: "example.com" });
    }

    generateName() {
        return this.chance.first();
    }

    generateLast() {
        return this.chance.last();
    }

    generatePassword() {
        return '123456';
    }

    generateCity() {
        return this.chance.city();
    }

    generateMobilePhone() {
        return this.chance.phone({ country: "us", mobile: true });
    }
}

export default new EmailUtils();

