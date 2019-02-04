var hours = 0;
var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var timeriD;

var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');
var milisecondsElement = document.getElementById('miliseconds');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

function count(){
    startButton.setAttribute("disabled","disabled");
    stopButton.removeAttribute("disabled");
    resetButton.removeAttribute("disabled");
    timerId = setInterval(function(){
      miliseconds++;
      if(miliseconds>=1000){
        miliseconds = 0;
        seconds++;
      }
      if(seconds>=60){
        seconds = 0;
        minutes++;
      }
      if(minutes>=60){
        minutes = 0;
        hours++;
      }
      setTime(miliseconds,seconds,minutes,hours);
    }, 1);
}

function stop(){
    stopButton.setAttribute("disabled","disabled");
    startButton.removeAttribute("disabled");
    resetButton.removeAttribute("disabled");
    clearInterval(timerId);
}
function reset(){
    stopButton.setAttribute("disabled","disabled");
    startButton.removeAttribute("disabled");
    clearInterval(timerId);
    setTime(0,0,0,0);
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
}

function setTime(miliseconds,seconds,minutes,hours){
  milisecondsElement.innerHTML = miliseconds;
  secondsElement.innerHTML = seconds;
  minutesElement.innerHTML = minutes;
  hoursElement.innerHTML = hours;
}
