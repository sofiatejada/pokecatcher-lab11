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

export function getTotalCaptured() {
    //initialize
    let total = 0;
    const cartPokeArray = getPokedex();
  

    //loop through local storage to collect the number of times captured
    for (let poke of cartPokeArray) {
        //so while the loop is looking through all the stuff in cartPokeArray, it's grabbing the values in the captured key and adding them up one by one to the total
        total += poke.captured;
    }

    return total;
}

export function setStorage(unStringyArray) {
    const stringyArray = JSON.stringify(unStringyArray);
    localStorage.setItem('STORAGE', stringyArray);
}

export function getStorage() {
    const stringyArray = localStorage.getItem('STORAGE');
    if (!stringyArray) return [];
    const parsedArray = JSON.parse(stringyArray);
    return parsedArray;
}

export function createStorage() {
    const currentStorage = getStorage();
    const currentCart = getPokedex();
    const results = [];
    if (currentStorage) {

        for (let poke of currentCart) {
            const data = findById(currentCart, poke.id);
            const prettyBox = [];
            const captured = data.captured;
            const ident = data.id;
            prettyBox.push(captured, ident);
            results.push(prettyBox);
        }
    } else {
        for (let poke of currentCart) {

            const data = findById(currentCart, poke.id);
            const newStorage = { id: data.id, captured: 0 };
            results.push(newStorage);
        }
    }
    setStorage(results);
}