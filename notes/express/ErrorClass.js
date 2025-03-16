class ExpressError extends Error {
    constructor(message, status) {
        super(); //anytime extending a parent class
        this.message = message;
        this.status = status;
        console.error(this.stack)
    }
}

module.exports = ExpressError;