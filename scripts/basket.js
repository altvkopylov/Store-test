let basket = {};

function afterElementsAdded() {
    const btns = document.querySelectorAll('.addToBasket');
    btns.forEach(btn => btn.addEventListener('click', (event) => {
        //console.log(event.target.parentElement.parentElement)
        const id = event.target.closest('.item-card').querySelector('.id').textContent;
        addToBasket(id);
    }))
}

function addToBasket(id) {
    if (basket[id]) {
        basket[id]++;
    } else {
        basket[id] = 1;
    }
    console.log("Результат:", basket);
}