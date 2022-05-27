var pomodoro = {
    started: false,
    minutes: 0,
    seconds: 0,
    interval: null,
    minDom: null,
    secDom: null,
    init: function () {
        var self = this;
        this.minDom = document.querySelector('#minutes');
        this.secDom = document.querySelector('#seconds');
        this.interval = setInterval(function () {
            self.intervalCallback.apply(self);
        }, 1000);

        document.querySelector('#b_start').onclick = function () {
            self.startWork.apply(self);
        };
        document.querySelector('#b_shortBreak').onclick = function () {
            self.startShortBreak.apply(self);
        };
        document.querySelector('#b_longBreak').onclick = function () {
            self.startLongBreak.apply(self);
        };
        document.querySelector('#b_stop').onclick = function () {
            self.stopTimer.apply(self);
        };
    },

    startWork: function () {
        this.resetVariables(25, 0, true);
    },
    startShortBreak: function () {
        this.resetVariables(5, 0, true);
    },
    startLongBreak: function () {
        this.resetVariables(15, 0, true);
    },
    stopTimer: function () {
        this.resetVariables(25, 0, false);
        this.updateDom();
    },
    toDoubleDigit: function (num) {
        if (num < 10) {
            return "0" + parseInt(num, 10);
        }
        return num;
    },

    resetVariables: function (mins, secs, started) {
        this.minutes = mins;
        this.seconds = secs;
        this.started = started;
    },

    updateDom: function () {
        this.minDom.innerHTML = this.toDoubleDigit(this.minutes);
        this.secDom.innerHTML = this.toDoubleDigit(this.seconds);
    },

    intervalCallback: function () {
        if (!this.started) return false;
        if (this.seconds == 0) {
            if (this.minutes == 0) {
                this.timerComplete();
                return;
            }
            this.seconds = 59;
            this.minutes--;
        } else {
            this.seconds--;
        }
        this.updateDom();
    },
    timerComplete: function () {
        this.started = false;
    }
};
window.onload = function () {
    pomodoro.init();
};