// const newYear = '1-1-2024';
const newYear = document.querySelector('input[type=date]');
const day = document.getElementById('days');
const hour = document.getElementById('hours');
const min = document.getElementById('mins');
const sec = document.getElementById('sec');

let countdownInterval

// Add Date Variables
const displayEvent = document.getElementById('btn-display'),
      sectionEvent = document.getElementById('n-event-container'),
      closeBtn = document.getElementById('Btn-close-panel'),
      aBtn = document.getElementById('add-Btn'),
      cBtn = document.getElementById('close-Ctn');

    // let countdownInterval;

function countdown(newYearDate){
    const currrentDate  = new Date();

    
    // // if reached the chosen date stop countdown
    if (currrentDate >= newYearDate) {
        clearInterval(countdownInterval);
        day.innerHTML =  0;
        hour.innerHTML =  0;
        min.innerHTML = 0;
        sec.innerHTML = 0;
        alert('Choose date greater than current date');
        return;
    }

    const totalSeconds = (newYearDate - currrentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    if(newYear.value == ''){
        day.innerHTML =  0;
        hour.innerHTML =  0;
        min.innerHTML = 0;
        sec.innerHTML = 0
        // console.log(totalSeconds);
    }else{
        day.innerHTML =  days;
        hour.innerHTML =  formatTime(hours);
        min.innerHTML = formatTime(mins);
        sec.innerHTML = formatTime(secs);
        console.log(totalSeconds);
    }
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}
countdown();

    // event listener to initialize the countdown
    aBtn.addEventListener('click', e  => {
        e.preventDefault();
        
        localStorage.setItem("count",  newYear.value);
        // alert(newYear.value);
        // console.log(newYear.value);
        sectionEvent.style.visibility = 'hidden';
        startCountDown();
    })

// Add Event functionality

function display() {

    if (sectionEvent) {
        displayEvent.addEventListener('click', e => {
            e.preventDefault();
            sectionEvent.style.visibility = 'visible';
        })
    }
        closeBtn.addEventListener('click', e => {
            e.preventDefault();
            sectionEvent.style.visibility = 'hidden';
        }) 

}

display();

// fucntion to addNew Date of Event to countDown
function startCountDown(){
    clearInterval(countdownInterval);
    const newYearDate = new Date(newYear.value);
     countdown(newYearDate);
    if (newYear.value != 0) {
        countdownInterval =  setInterval(() => countdown(newYearDate), 1000)
    }
    
       
}

startCountDown();

function initializeCountDown(){
    const storedDate = localStorage.getItem("count");
    if (storedDate) {
        newYear.value = storedDate;
    }
}
initializeCountDown();
// function to closeNew Date panel 
function closedatePanel() {
    cBtn.addEventListener('click', e => {
        e.preventDefault();
        sectionEvent.style.visibility = 'hidden';
    })
}
closedatePanel();