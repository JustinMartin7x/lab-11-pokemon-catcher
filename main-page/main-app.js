//importing functions
import { randomEncounter, findById } from './utils.js';
import { pokemonList } from '../pokemon-data/poke-data.js';


//Grabbing DOM elements
const selection = document.querySelectorAll('input');
const selectionImages = document.querySelectorAll('img');
const catchButton = document.getElementById('button');


//States
let pokemonEncounters = 10;
let pokemonCaught = [];
const pokemonSeen = [];
let loopArray = [];

//generate new pokemon
generatePokemon();

catchButton.addEventListener('click', () => {
    pokemonEncounters--;   
    for (let i = 0; i < selection.length; i++) {
        pokemonSeen.push(selection.value);
        pokemonCaught.push(selection.value);
    }
    generatePokemon();

});


function generatePokemon() {
    let loopArray = [];
    for (let i = 0; i < selectionImages.length; i++) {
        let newPokemon = randomEncounter(pokemonList);
        loopArray.push(newPokemon.id);
        console.log(loopArray);
        const compare = findById(loopArray, newPokemon.id);
        if (compare === false) {
            selectionImages[i].src = newPokemon.url_image;
            selection[i].value = newPokemon.id;
        } else {
            newPokemon = randomEncounter(pokemonList);
        } 
    }
}