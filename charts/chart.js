import { mungeName, mungeCaptured, mungeEncountered } from './munge.js';
import { getPokedex, getStorage, setPokedex } from '../render-poke-functions.js';
import { findById } from '../utils.js';

const cart = getPokedex();
const resetButton = document.querySelector('#reset-button ');
// const storage = [];

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: mungeName(cart),
        datasets: [
            {
                label: 'Times Captured',
                data: mungeCaptured(cart),
                backgroundColor: [
                    ''
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Times Encountered',
                data: mungeEncountered(cart),
                backgroundColor: [''
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

resetButton.addEventListener('click', () => {
    //redirect back to home page
    //place the current cart into storage
    //clear localStorage cart
    setPokedex([]);
    window.location.replace('../');
});

const datas = mungeEncountered(cart);
console.log(datas);

const resultsP = document.querySelector('#results-p');
const storage = getStorage();
let captured = 0;
let encountered = 0;
console.log(storage);

for (let item of storage) {
    const x = findById(storage, item.id);
    captured += x.captured;

}
for (let item of storage) {
    const x = findById(storage, item.id);
    encountered += x.encountered;

}



resultsP.textContent = `You've caught a total of: ${captured} pokemon, and encountered a total of: ${encountered} pokemon`;