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


//generate new pokemon

generatePokemon();

function generatePokemon() {
    if (pokemonEncounters === 0) {
        alert('you have caught a lot of pokemon');   
    }
    pokemonEncounters--;
    
    let pokemonOne = randomEncounter(pokemonList);
    let pokemonTwo = randomEncounter(pokemonList);
    while (pokemonTwo === pokemonOne) {
        pokemonTwo = randomEncounter(pokemonList);
    }
    let pokemonThree = randomEncounter(pokemonList);
    while (pokemonThree === pokemonTwo || pokemonThree === pokemonOne) {
        pokemonThree = randomEncounter(pokemonList);
    }
    selection[0].value = pokemonOne.id;
    selectionImages[0].src = pokemonOne.url_image;
    selection[1].value = pokemonTwo.id;
    selectionImages[1].src = pokemonTwo.url_image;
    selection[2].value = pokemonTwo.id;
    selectionImages[2].src = pokemonThree.url_image;
    pokemonSeen.push(pokemonOne, pokemonTwo, pokemonThree);
}

for (let i = 0; i < selection.length; i++) {
    selection[i].addEventListener('change', (e) => {
        const caught = e.target.value;
        pokemonCaught.push(caught);
         generatePokemon();
         console.log(pokemonCaught);
         console.log(pokemonSeen);
    });
   
}












// generatePokemon();
 
// catchButton.addEventListener('click', () => {
//     pokemonEncounters--;   
//     for (let i = 0; i < selection.length; i++) {
//         const pokemonId = selection.id;
//         pokemonSeen.push(pokemonId);    
//     }
//     pokemonCaught.push(selection.value);
//     generatePokemon();
// console.log(pokemonSeen);
// });


// function generatePokemon() {
    
//     for (let i = 0; i < selectionImages.length; i++) {
//         let newPokemon = randomEncounter(pokemonList);
//         selectionImages[i].src = newPokemon.url_image;
//         selection[i].value = newPokemon.id;
       
//     }
// }