var ctx = document.getElementById('myChart').getContext('2d');

const caughtPokemon = localStorage.getItem('Cart');
const parsedPokemon = JSON.parse(caughtPokemon);


const captured = parsedPokemon.map(pokemonCaught => pokemonCaught.captured);
const encountered = parsedPokemon.map(pokemonSeen => pokemonSeen.encountered);
const namePokemon = parsedPokemon.map(pokemonSeen => pokemonSeen.pokemon);
console.log(captured, encountered);


const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'crimson', 'rebecahpurple'];
const colors = [
    'lavender',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
const borders = [
    'orange',
    'blue',
    'purple',
    'black',
    'gray',
    'red',
    'lightblue',
    'goldenrod',
    'hotpink',
    'khaki'

];

var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: labels,
        labels: namePokemon,
        datasets: [{
            label: '# of Pokemon Caught',
            data: captured,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 5
        },
        {
            label: namePokemon,
            data: encountered,
            type: 'bar',
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 5,
            // this dataset is drawn on top
            order: 2,
        }],
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        }
    }
});

const button = document.querySelector('button');
button.addEventListener('click', () => {
    localStorage.clear;
    location.href = '../main-page.index.html';
})