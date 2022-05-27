const po_btn = document.getElementById('timer_mode_po');
const st_btn = document.getElementById('timer_mode_sw');

var pomo = document.getElementById("pomodoro");
pomo.style.display = "block";

var stopw = document.getElementById("count_up");
stopw.style.display = "none";


po_btn.addEventListener("click", function () {
    pomo.style.display = "block";
    stopw.style.display = "none";
    st_btn.style.backgroundColor = '#C95E55';
    st_btn.style.color = 'white';
    po_btn.style.backgroundColor = 'white';
    po_btn.style.color = '#C95E55';
});

st_btn.addEventListener("click", function () {
    pomo.style.display = "none";
    stopw.style.display = "block";
    st_btn.style.backgroundColor = 'white';
    st_btn.style.color = '#C95E55';
    po_btn.style.backgroundColor = '#C95E55';
    po_btn.style.color = 'white';

});


// seting the variable and the state for the timer
let hr = "00";
let min = "00";
let sec = "00";
timeActive = false;

///The body for the stop watch

setInterval(() => {
    if (timeActive) {
        sec++;
        //Convert to double digit
        if (sec < 10) {
            sec = "0" + sec;
        }
    }
    if (sec == 60) {
        //update the minutes
        sec = "0" + 0;
        min++;
        //Convert to double digit
        if (min < 10) {
            min = "0" + min;
        }
    }
    if (min == 60) {
        //update the hours
        min = "0" + 0;
        hr++;
        //Convert to double digit
        if (hr < 10) {
            hr = "0" + hr;
        }
    }
    //push the result to the HTML
    document.getElementById('s_hours').innerHTML = hr;
    document.getElementById('s_minutes').innerHTML = min;
    document.getElementById('s_seconds').innerHTML = sec;
}, 1000);

function control(i) {
    switch (i) {
        //seting the swich to start the timer, control are link to the buttion on html.
        case 0:
            timeActive = true;
            break;

        case 1:
            //seting the swich to stop the timer.
            timeActive = false;
            break;
        case 2:
            //seting the swich to reset the timer.
            timeActive = false;
            //resernt the number to double digit.
            hr = "00";
            min = "00";
            sec = "00";
            break;
    }
}