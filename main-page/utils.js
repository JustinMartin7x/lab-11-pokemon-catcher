import { pokemonList } from '../pokemon-data/poke-data.js';


//functions to export

export function randomEncounter(someArray) {
    const index = Math.floor(Math.random() * someArray.length);
    return (someArray[index]);
}


export function findById(someArray, someId) {

    for (let i = 0; i < someArray.length; i++)
        if (someArray[i].id === someId) {
            return true;
        }
}

