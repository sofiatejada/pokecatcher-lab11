export function findById(pokedexArray, selectionId) {
    // const toNumber = Number(selectionId);
    for (let pokemon of pokedexArray) {
        if (pokemon.id === selectionId) {
            // console.log(pokemon);
            return pokemon;
        }
    }
    //DON'T PUT THAT INSIDE THE LOOP, it returns NULL!!!
    return null;
}