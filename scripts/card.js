import items from './items.js';

const name = document.querySelector('.name');
const price = document.querySelector('.price span');
const img = document.querySelector('.img');

window.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = parseInt(urlParams.get('id'));

    const card = items.filter(item => item.id === id);
    name.textContent = card[0].name;
    price.textContent = card[0].price;
    img.src = card[0].img;
    img.alt = card[0].name;
});