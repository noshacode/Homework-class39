'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    const parsedData = await response.json();
    return parsedData;
  }
  console.log('HTTP error', response.status);
}

async function fetchAndPopulatePokemons(selectList) {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  console.log(data);
  const pokemonsList = data.results;

  for (let i = 0; i < pokemonsList.length; i++) {
    const option = document.createElement('option');
    option.value = pokemonsList[i].url;
    option.text = pokemonsList[i].name;
    selectList.appendChild(option);
  }
}

async function fetchImage(url, imgBox) {
  imgBox.textContent = '';
  const pokemon = await fetchData(url);
  // when we have 'official(-)artwork' javascript cant understand that so we should convert to string
  const data = pokemon.sprites.other['official-artwork'].front_default;

  const img = document.createElement('img');
  img.src = data;
  imgBox.appendChild(img);
}

async function main() {
  try {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Get Pokemons!';
    document.body.appendChild(button);

    const selectList = document.createElement('select');
    document.body.appendChild(selectList);

    const imgBox = document.createElement('div');
    document.body.appendChild(imgBox);

    button.addEventListener('click', async () => {
      await fetchAndPopulatePokemons(selectList);
    });

    selectList.addEventListener('change', async () => {
      await fetchImage(selectList.value, imgBox);
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
