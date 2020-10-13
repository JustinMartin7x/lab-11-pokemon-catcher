//importing functions
import { randomEncounter, findByName } from './utils.js';
import { pokemonList } from '../pokemon-data/poke-data.js';


//Grabbing DOM elements
const selection = document.querySelectorAll('input');
const selectionImages = document.querySelectorAll('img');
const catchButton = document.getElementById('button');


//States
let pokemonEncounters = 10;
let pokeCart = [];


//generate new pokemon

generatePokemon();

for (let i = 0; i < selection.length; i++) {
    selection[i].addEventListener('click', (e) => {
        if (pokemonEncounters === 0) {
            alert('you have caught a lot of pokemon');   
        }
        pokemonEncounters--;
          
        for (let i = 0; i < selection.length; i++) {
            const radio = selection[i];
            let item = findByName(pokeCart, radio.value);
            if (!item) {
                item = {
                    pokemon: selection[i].value,
                    encountered: 1,
                    captured: 0,
                };
                pokeCart.push(item); 
            } else {
                item.encountered++;
            }
        }
        const capturePokemon = findByName(pokeCart, e.target.value);
        capturePokemon.captured++;
        generatePokemon();
        console.log(pokeCart);   
    });
}


function generatePokemon() {
    let pokemonOne = randomEncounter(pokemonList);
    let pokemonTwo = randomEncounter(pokemonList);
    while (pokemonTwo === pokemonOne) {
        pokemonTwo = randomEncounter(pokemonList);
    }
    let pokemonThree = randomEncounter(pokemonList);
    while (pokemonThree === pokemonTwo || pokemonThree === pokemonOne) {
        pokemonThree = randomEncounter(pokemonList);
    }
    selection[0].value = pokemonOne.pokemon;
    selectionImages[0].src = pokemonOne.url_image;
    selection[1].value = pokemonTwo.pokemon;
    selectionImages[1].src = pokemonTwo.url_image;
    selection[2].value = pokemonTwo.pokemon;
    selectionImages[2].src = pokemonThree.url_image;     
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