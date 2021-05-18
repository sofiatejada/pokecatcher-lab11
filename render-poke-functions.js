import { findById } from './utils.js';

const booger = 'CART';

export function getPokedex() {

    // console.log(localStorage.getItem('CART'));
    const stringyCart = localStorage.getItem(booger);

    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);
        return parsedCart;
    } else { 
        return [];
    }
    

}

export function setPokedex(newPokedexArray) {
    const stringySelection = JSON.stringify(newPokedexArray);

    localStorage.setItem(booger, stringySelection);

}

export function capturePokemon(selection) {

    const numberSelection = Number(selection);
    const pokeCart = getPokedex();

    const selectedPokemon = findById(pokeCart, numberSelection);
    // console.log(pokeCart, numberSelection);
    // console.log(selectedPokemon);

    selectedPokemon.captured++;

    setPokedex(pokeCart);

}

export function encounterPokemon(encounteredId) {

    const currentPokeCart = getPokedex();

    const matchingPokemon = findById(currentPokeCart, encounteredId);

    // matches currentpokecart with mainpokedex
    if (matchingPokemon) {
        matchingPokemon.encountered++;
        // console.log(matchingPokemon);
    } else {
        const newPokeItem = { id: encounteredId, captured: 0, encountered: 1 };
        currentPokeCart.push(newPokeItem);
    }
    // console.log(currentPokeCart);
    setPokedex(currentPokeCart);
}