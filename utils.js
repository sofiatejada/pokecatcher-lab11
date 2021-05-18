export default function findById(pokedexArray, selectionId) {
    for (let pokemon of pokedexArray) {
        if (pokemon.id === selectionId) {
            return pokemon;
        } else return null;
    }
}