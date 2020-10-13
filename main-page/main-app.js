//importing functions
import { randomEncounter } from './utils.js';
import { pokemonList } from '../pokemon-data/poke-data.js';


//Grabbing DOM elements
const selection = document.querySelectorAll('input');
const selectionImages = document.querySelectorAll('img');



//States
let pokemonEncounters = 10;
let pokemonCaught= [];
const pokemonSeen = [];

//generate new pokemon
for (let i = 0; i < selectionImages.length; i++) {
    const newPokemon = randomEncounter(pokemonList);
    console.log(newPokemon.url_image);
    selectionImages[i].src = newPokemon.url_image;
    selection[i].value = newPokemon.id;
}