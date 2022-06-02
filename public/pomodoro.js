var pomodoro = {
    // seting the variable and the state for the timer
    started: false,
    minutes: 0,
    seconds: 0,
    interval: null,
    minDom: null,
    secDom: null,
    init: function () {
        // Basic form DOM elements
        var self = this;
        this.minDom = document.querySelector('#minutes');
        this.secDom = document.querySelector('#seconds');
        this.interval = setInterval(function () {
            self.intervalCallback.apply(self);
        }, 1000);
        //listener for the button of the pomodoro and start the function
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
    //function for reset the variables
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
    //function to set the number that less than 2 digit to 2 digit
    toDoubleDigit: function (num) {
        if (num < 10) {
            return "0" + parseInt(num, 10);
        }
        return num;
    },
    // Function to set the time as parameters
    resetVariables: function (mins, secs, started) {
        this.minutes = mins;
        this.seconds = secs;
        this.started = started;
    },
    // Function to update the Dom
    updateDom: function () {
        this.minDom.innerHTML = this.toDoubleDigit(this.minutes);
        this.secDom.innerHTML = this.toDoubleDigit(this.seconds);
    },
    // The main logic of the pomodoro
    intervalCallback: function () {
        if (!this.started) return false;
        if (this.seconds == 0) {
            if (this.minutes == 0) {
                this.timerComplete();
                alert('Please choose the rest time or continue to work');
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
//load the function immediately when the page loaded
window.onload = function () {
    pomodoro.init();
};
