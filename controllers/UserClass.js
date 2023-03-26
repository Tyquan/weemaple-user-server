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

    create(docs) {
        const savedUser = {
            email: this.email,
            password: this.password,
            ...docs
        };
        return savedUser;
    }
}

module.exports = User;