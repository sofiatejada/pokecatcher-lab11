// IMPORT MODULES under test here:
import { getPokedex, setPokedex, capturePokemon, encounterPokemon } from '../render-poke-functions.js';

const test = QUnit.test;

const pokeScore = [
    {
        captured: 4,
        id: 5,
    },
    {
        captured: 2,
        id: 10,
    },
    {
        captured: 0,
        id: 21,
    },
];

test('time to test getPokedex', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPokedex();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test setPokedex', (expect) => {
    //Arrange
    const actual = [{ id: 1, captured: 1 }, { id: 2, captured: 3 }, { id: 3, captured: 2 }];
    // Set up your arguments and expectations
    //Act 
    // Call the function you're testing and set the result to a const
    setPokedex(actual);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    const stringyActual = localStorage.getItem('CART');
    const expected = JSON.parse(stringyActual);
    expect.deepEqual(actual, expected);
});

