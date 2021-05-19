import { findById } from './utils.js';


const booger = 'CART';

export function getPokedex() {

    // console.log(localStorage.getItem('CART'));
    const stringyCart = localStorage.getItem(booger);

    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);
        // console.log(parsedCart);
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
    const pokeStorage = getStorage();

    const selectedPokemon = findById(pokeCart, numberSelection);
    const pokeInStorage = findById(pokeStorage, numberSelection);
    // console.log(pokeCart, numberSelection);
    // console.log(selectedPokemon);

    pokeInStorage.captured++;
    selectedPokemon.captured++;

    setStorage(pokeStorage);
    setPokedex(pokeCart);

}

export function encounterPokemon(encounteredId) {

    const currentPokeCart = getPokedex();
    const currentPokeStorage = getStorage();

    const matchingPokemon = findById(currentPokeCart, encounteredId);
    const matchingPokeInStorage = findById(currentPokeStorage, encounteredId);

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
    
    // matches currentpokecart with mainpokedex
    if (matchingPokeInStorage) {
        matchingPokeInStorage.encountered++;
        // console.log(matchingPokeInStorage);
    } else {
        const newPokeItem = { id: encounteredId, captured: 0, encountered: 1 };
        currentPokeStorage.push(newPokeItem);
    }
    // console.log(currentPokeCart);
    setStorage(currentPokeStorage);
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

// export function createStorage() {
//     const currentStorage = getStorage();
//     const currentCart = getPokedex();
//     const results = [];

    //an item in currentStorage with the same ID as an item in currentCart: for currentStorage.captured, add currentCart.captured

//     if (currentStorage) {

//         for (let item of currentCart) {
            
//             const capturedItem = findById(currentCart, item.id);
//             console.log(capturedItem);
//             const currentCartCaptured = capturedItem.captured;

//             for (let otherItem of currentStorage) {
//                 if (otherItem.id === item.id) {

//                     const capturedOtherItem = findById(currentStorage, item.id);
    
//                     const currentStorageCaptured = capturedOtherItem.captured;
    
//                     const addedCaptures = currentStorageCaptured + currentCartCaptured;
    
//                     console.log(addedCaptures);
//                     // return addedCaptures;
//                 }

//             }

//         } results.push()
//     } else {
//         for (let poke of currentCart) {
//             const data = findById(currentCart, poke.id);
//             const prettyBox = [];
//             const captured = data.captured;
//             const encountered = data.encountered;
//             const ident = data.id;
//             prettyBox.push(captured, encountered, ident);
//             results.push(prettyBox);

//         }
//     }
//     setStorage(results);
// }
// const data = findById(currentCart, poke.id);
// const newStorage = { id: data.id, captured: 0, encountered:0 };
// results.push(newStorage);