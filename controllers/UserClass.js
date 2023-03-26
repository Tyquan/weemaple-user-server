class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.metaData = {};
    }

    encryptPassword(hashingFunction, saltRounds = 10) {
        return hashingFunction(this.password, saltRounds);
    }
    checkForMissingInputs() {
        if (!this.email || !this.password) {
            return true;
        } else {
            return false;
        }
    }

    save() {
        const savedUser = {
            email: this.email,
            password: this.password,
            metaData: {"name": "", "city": ""}
        };
        return savedUser;
    }
}

module.exports = User;