'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-5-using-the-vscode-debugger

Use the VSCode Debugger to fix the bugs
--------------------------------------------------------------- --------------*/
const fetch = require('node-fetch');

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function renderLaureate({ knownName, birth, death }) {
  console.log(`\nName: ${knownName.en}`);
  console.log(`Birth: ${birth.date}, ${birth.place.locationString.en}`);
  if (death !== undefined) {
    console.log(`Death: ${death.date}, ${death.place.locationString.en}`);
  }
}

function renderLaureates(myObject) {
  myObject.laureates.forEach(renderLaureate);
}

async function fetchAndRender() {
  try {
    const laureates = await getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
  }
}

fetchAndRender();
