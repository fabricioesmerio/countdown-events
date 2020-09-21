// import CountDown from './countdown';

// const CountDown = require('./CountDown');

class CountDown {
    constructor(futureDate) {
        this.futureDate = futureDate
    }

    get ActualDate() {
        return new Date();
    }

    get _futereDate() {
        return new Date(this.futureDate);
    }

    get _timeStampDiff() {
        return this._futereDate.getTime() - this.ActualDate.getTime();
    }

    get days() {
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000))
    }

    get hours() {
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000))
    }

    get minutes() {
        return Math.floor(this._timeStampDiff / (60 * 1000))
    }

    get seconds() {
        return Math.floor(this._timeStampDiff / 1000)
    }

    get total () {
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return [
            days,
            hours,
            minutes,
            seconds
        ];
    }
}
const dataEvent = new CountDown('06 feb 2021 20:00:00 GMT-0300');

const times = document.querySelectorAll("[data-time]");

function showTimes() {
    times.forEach((time, index) => {
        time.innerHTML = dataEvent.total[index];
    })

}

setInterval(showTimes, 1000);