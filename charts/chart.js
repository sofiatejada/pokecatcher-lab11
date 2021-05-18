import { mungeName, mungeCaptured } from './munge.js';
import { getPokedex, getStorage, setPokedex, setStorage } from '../render-poke-functions.js';

const cart = getPokedex();
const resetButton = document.querySelector('#reset-button ');
// const storage = [];

var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: mungeName(cart),
        datasets: [{
            label: 'Times Captured',
            data: mungeCaptured(cart),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
        }]
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

    const currentStorage = getStorage();
    currentStorage.push(cart);
    
    console.log();
    //clear localStorage cart
    setPokedex([]);
    window.location.replace('/');
});