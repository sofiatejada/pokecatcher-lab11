// import functions and grab DOM elements
import { capturePokemon, encounterPokemon } from './render-poke-functions.js';
import { pokedex } from './pokedex.js';

const poke1 = document.querySelector('#poke-radio-1');
const poke2 = document.querySelector('#poke-radio-2');
const poke3 = document.querySelector('#poke-radio-3');
const pokeImage1 = document.querySelector('#poke-image-1');
const pokeImage2 = document.querySelector('#poke-image-2');
const pokeImage3 = document.querySelector('#poke-image-3');
const button = document.querySelector('button');

// on LOAD

renderPokemon();

function getRandomPokemon() {
    const randomNumber = Math.floor(Math.random() * pokedex.length);

    const randomPokemon = pokedex[randomNumber];

    return randomPokemon;
}


function renderPokemon() {

  
    let pokemon1 = getRandomPokemon();
    let pokemon2 = getRandomPokemon();
    let pokemon3 = getRandomPokemon();

    while (pokemon1.id === pokemon2.id || pokemon2.id === pokemon3.id || pokemon1.id === pokemon3.id) {
        pokemon1 = getRandomPokemon();
        pokemon2 = getRandomPokemon();
        pokemon3 = getRandomPokemon();
    }

    encounterPokemon(pokemon1);
    encounterPokemon(pokemon2);
    encounterPokemon(pokemon3);

    pokeImage1.src = pokemon1.image;
    pokeImage2.src = pokemon2.image;
    pokeImage3.src = pokemon3.image;

    poke1.value = pokemon1.id;
    poke2.value = pokemon2.id;
    poke3.value = pokemon3.id;
  
  
}

button.addEventListener('click', () => {

    const selectedPoke = document.querySelector(':checked');

    const selectedPokeId = selectedPoke.value;

    capturePokemon(selectedPokeId);

    renderPokemon();


});