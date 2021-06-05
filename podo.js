console.log("this program works!");

let idThingy = document.getElementById("timer");

var pomodoroVar = 1500 //25 min later
var shortBreakVar = 300//1000*60*5
var longBreakVar = 600//1000*60*10


// pomodoro functions
var interval;
var timeVar;

function pomodoro(){
    console.log("Commencing POMODORO");
    idThingy.innerHTML = "25:00";
    return timeVar = pomodoroVar;
}

function shortBreak(){
    console.log("Commencing SHORT BREAK");
    idThingy.innerHTML = "5:00";
    return timeVar = shortBreakVar;
}

function longBreak(){
    console.log("Commencing LONG BREAK");
    idThingy.innerHTML = "10:00";
    return timeVar = longBreakVar;
}


// starts the timer
function start(goOrNo){
    if (goOrNo == 0){
        interval = setInterval(function(){
            timeVar -= 1;
            format(timeVar)
            idThingy.innerHTML = minutes + ':' + seconds;
            console.log(idThingy.innerHTML);
            if (timeVar == 0) {
                clearInterval(interval)
            }
        }, 1000)
    } else if (goOrNo == 1) {
        clearInterval(interval)
    }
}

function format(timeVar){
    minutes = Math.floor(timeVar / 60);
    seconds = Math.round(timeVar - (minutes*60));
    return minutes, seconds;
}

