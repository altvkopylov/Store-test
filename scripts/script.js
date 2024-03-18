import items from './items.js';

const cards = document.querySelector('.items-list');

const cardsMarkup = items.map(({ id, name, price, img, imgHover }) => `
<div class="item-card">
    <p class="id" style="display: none;">${id}</p>
    <p class="name">${name}</p>
    <img src="${img}" data-hover="${imgHover}" alt="${name}" class="card-image" height="350"/>
    <p class="price">Price: <span>${price}</span></p>
    <div class="card__footer">
      <a href="./pages/card.html?id=66">To item</a>
      <button class="addToBasket">Add to Basket</button>
    </div>
</div>
`).join('');

cards.insertAdjacentHTML("beforeend", cardsMarkup);

const cardImages = document.querySelectorAll('.card-image');
cardImages.forEach(image => {
    const defaultImageSrc = image.getAttribute('src');
    const hoverImageSrc = image.getAttribute('data-hover');

    image.addEventListener('mouseover', function() {
        if (hoverImageSrc) {
            this.setAttribute('src', hoverImageSrc);
        }
    });

    image.addEventListener('mouseout', function() {
        if (hoverImageSrc) {
            this.setAttribute('src', defaultImageSrc);
        }
    });
});

afterElementsAdded()