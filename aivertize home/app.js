var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

const btn = document.getElementById('startSectBtn');
const startMain = document.querySelector('.startMain');
const arrowIcon = document.querySelector('.arrowIcon');
const cardsLine = document.querySelector('.cardsLine');
const cardsLineOver = document.querySelector('.cardsLineOver');

btn.addEventListener('mouseover', () => {

    startMain.classList.add('btnOver');

});
btn.addEventListener('mouseout', () => {

    startMain.classList.remove('btnOver');

});

cardsLine.addEventListener('mouseover', () =>{

    cardsLine.classList.add('cardsLineOver');
    cardsLine.classList.remove('cardsLine');

});

cardsLine.addEventListener('mouseout', () =>{

    cardsLine.classList.remove('cardsLineOver');
    cardsLine.classList.add('cardsLine');

});

cardsLineOver.addEventListener('mouseover', () =>{

    cardsLine.classList.add('cardsLineOver');
    cardsLine.classList.remove('cardsLine');

});

cardsLineOver.addEventListener('mouseout', () =>{

    cardsLine.classList.remove('cardsLineOver');
    cardsLine.classList.add('cardsLine');

});