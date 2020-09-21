module.exports = class CountDown {
    constructor(futureDate) {
        this.futureDate = futureDate
    }

    get ActualDate() {
        return new Date();
    }

    get _futereDate() {
        return new Date(this.futureDate);
    }
}