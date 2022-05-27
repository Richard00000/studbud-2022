
// seting the variable and the state for the timer
let hr = "0" + 0;
let min = "0" + 0;
let sec = "0" + 0;
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
            hr = "0" + 0;
            min = "0" + 0;
            sec = "0" + 0;
            break;
    }
}