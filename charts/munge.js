import { pokedex } from '../pokedex.js';
import { findById } from '../utils.js';

export function mungeName(cartPokeArray) {
    // initialize stuff with an empty array
    const results = [];
    // pokeName = getPokedex();

    //looking through the local storage to see info from pokedex
    for (let poke of cartPokeArray) {
        const data = findById(pokedex, poke.id);
        results.push(data.name);
        console.log(results);
    }
    //scour through cartPokeArray to find the ID's, from there compare to ID's to the pokedex, and from the pokedex, extract the property 'name'

    return results;

}

export function mungeCaptured(cartPokeArray) {
    const results = [];
    for (let poke of pokedex) {
        const data = findById(cartPokeArray, poke.id);
        results.push(data.captured);
        console.log(data.captured);
    }
    //scour the pokedex and find the ID's of the pokemon there. if it also shows up in cartPokeArray, return an array of those objects. from that data, return only the property captured.
    
    return results;
}