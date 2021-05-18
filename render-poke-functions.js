import findById from './utils.js';

const booger = 'CART';

export function getPokedex() {
    const stringyCart = localStorage.getItem(booger);

    const parsedCart = JSON.parse(stringyCart);

    if (parsedCart) {
        return parsedCart;
    } else return [];

}

export function setPokedex(newPokedexArray) {
    const stringySelection = JSON.stringify(newPokedexArray);
    localStorage.setItem(booger, stringySelection);

}

export function capturePokemon(selection) {
    const pokeCart = getPokedex();
    // grab the selected pokemon with findById
    const selectedPokemon = findById(pokeCart, selection);
    //matching selection and pokedex
    if (selectedPokemon.id === pokeCart.id) {
        selectedPokemon.captured++;
    }

    setPokedex(selectedPokemon);

}

export function encounterPokemon(encounteredId) {

    const currentPokeCart = getPokedex();

    const matchingPokemon = findById(booger, encounteredId);

    // matches currentpokecart with mainpokedex
    if (matchingPokemon) {
        matchingPokemon.encounter++;
    } else {
        const newPokeItem = { id: matchingPokemon.id, captured: 0, encountered: 1 };
        currentPokeCart.push(newPokeItem);
    }

}