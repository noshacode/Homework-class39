'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const currentTime = document.createElement('div');
  document.body.appendChild(currentTime);

  setInterval(function () {
    const today = new Date();
    // let hours = today.getHours();
    // let minutes = today.getMinutes();
    // let seconds = today.getSeconds();
    // let time = `${hours}:${minutes}:${seconds}`;

    const time = today.toLocaleTimeString();
    currentTime.textContent = time;
  }, 1000);

  // setInterval(getTime, 1000);

  // function getTime() {
  //   const today = new Date();
  //   const time = today.toLocaleTimeString();
  //   currentTime.textContent = time;
  // }
}

window.addEventListener('load', addCurrentTime);
