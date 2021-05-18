export function findById(pokedexArray, selectionId) {
    // const toNumber = Number(selectionId);
    for (let pokemon of pokedexArray) {
        if (pokemon.id === selectionId) {
            console.log(pokemon);
            return pokemon;
        }
        return null;
    }
}