const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');
// Variables for time
let seconds = 0;
let minutes = 0;
let hours = 0;
// Variables for leading 0
let leadingSeconds = "00";
let leadingMinutes = "00";
let leadingHours = "00";
// Variables for setInterval & timer status
let timerInterval = null;
let timerStatus = 'stopped';

function stopWatch() {
    seconds++
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    leadingSeconds = seconds < 10 ? '0' + seconds.toString() : seconds;
    leadingMinutes = minutes < 10 ? '0' + minutes.toString() : minutes;
    leadingHours = hours < 10 ? '0' + hours.toString() : hours;

    document.getElementById('timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

startStopBtn.addEventListener('click', function() {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 10);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = 'started';
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    timerStatus = 'stopped';
});
