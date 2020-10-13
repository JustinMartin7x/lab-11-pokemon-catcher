import { pokemonList } from '../pokemon-data/poke-data.js';


//functions to export

export function randomEncounter(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return (someArray[index]);
}


export function findByName(someArray, someId) {

    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.pokemon === someId) {
            return someArray[i];
        }
    }
}