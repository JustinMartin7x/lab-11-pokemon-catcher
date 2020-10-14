var ctx = document.getElementById('myChart').getContext('2d');

const caughtPokemon = localStorage.getItem('Cart');
const parsedPokemon = JSON.parse(caughtPokemon);


const captured = parsedPokemon.map(pokemonCaught => pokemonCaught.captured);
const encountered = parsedPokemon.map(pokemonSeen => pokemonSeen.encountered);
const namePokemon = parsedPokemon.map(pokemonSeen => pokemonSeen.pokemon);
console.log(captured, encountered);

const data = [12, 19, 3, 5, 2, 3];
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
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
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];

new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        // labels: labels,
        labels: namePokemon,
        datasets: [{
            label: '# of Pokemon Caught',
            data: captured,
            backgroundColor: colors,
            borderColor: borders,
            borderWidth: 5
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


