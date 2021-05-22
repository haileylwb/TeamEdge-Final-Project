console.log("this program works!");

var pomodoroVar = 5 //25 min later
var shortBreakVar = 6//1000*60*5
var longBreakVar = 8//1000*60*10


// pomodoro functions
var interval;
var timeVar;

function pomodoro(){
    console.log("Commencing POMODORO");
    return timeVar = pomodoroVar;
}

function shortBreak(){
    console.log("Commencing SHORT BREAK");
    return timeVar = shortBreakVar;
}

function longBreak(){
    console.log("Commencing LONG BREAK");
    return timeVar = longBreakVar;
}


// starts the timer
function start(){
    interval = setInterval(function(){
        timeVar -= 1;
        console.log(timeVar);
        if (timeVar == 0) {
            clearInterval(interval)
        }
    }, 1000)
}
