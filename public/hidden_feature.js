///////The code for hiden the pomodoro or stopwatch when user click button///////////

//use getElementById to select the button that will be click
const po_btn = document.getElementById('timer_mode_po');
const st_btn = document.getElementById('timer_mode_sw');

//use getElementById to select the pomodoro stopwatch div that need to be hidden or not 
var pomo = document.getElementById("pomodoro");
var stopw = document.getElementById("count_up");

//set the pomodoro as defult
pomo.style.display = "block";
stopw.style.display = "none";

//use addEventListener to find does the user click the pomodoro button or not 
po_btn.addEventListener("click", function () {

    //when the user click the pomodoro button the stop watch div will be hidden and the pomodoro will be show up
    pomo.style.display = "block";
    stopw.style.display = "none";

    //when the user click the text and background color of pomodoro and stop watch will change
    st_btn.style.backgroundColor = '#C95E55';
    st_btn.style.color = 'white';
    po_btn.style.backgroundColor = 'white';
    po_btn.style.color = '#C95E55';
});

//use addEventListener to find does the user click the stopwatch button or not 
st_btn.addEventListener("click", function () {

    //when the user click the stop watch button the pomodoro div will be hidden and the stopwatch will be show up
    pomo.style.display = "none";
    stopw.style.display = "block";

    //when the user click the text and background color of pomodoro and stop watch will change
    st_btn.style.backgroundColor = 'white';
    st_btn.style.color = '#C95E55';
    po_btn.style.backgroundColor = '#C95E55';
    po_btn.style.color = 'white';

});