console.log("hi");

var pomodoroVar = 5 //25 min later
var shortBreakVar = 6//1000*60*5
var longBreakVar = 8//1000*60*10

// var minutes;
// var seconds;
// var formatted = minutes.toString() + ':' + seconds.toString();

var interval;
function pomodoro(){
    interval = setInterval(function(){
        pomodoroVar -= 1;
        // minutes =  Math.floor(pomodoroVar / 60);
        // seconds = pomodoroVar % 60
        // new Date(pomodoroVar * 1000).toISOString().substr(11,8)
        console.log(pomodoroVar);
        if (pomodoroVar == 0) {
            clearInterval(interval)
        }
    }, 1000)
}

function shortBreak(){
    interval = setInterval(function(){
        shortBreakVar -= 1;
        // minutes =  Math.floor(pomodoroVar / 60);
        // seconds = pomodoroVar % 60
        // new Date(pomodoroVar * 1000).toISOString().substr(11,8)
        console.log(shortBreakVar);
        if (shortBreakVar == 0) {
            clearInterval(interval)
        }
    }, 1000)
}

function longBreak(){
    interval = setInterval(function(){
        longBreakVar -= 1;
        // minutes =  Math.floor(pomodoroVar / 60);
        // seconds = pomodoroVar % 60
        // new Date(pomodoroVar * 1000).toISOString().substr(11,8)
        console.log(longBreakVar);
        if (longBreakVar == 0) {
            clearInterval(interval)
        }
    }, 1000)
}

// pomodoro();

// shortBreak();

longBreak();
