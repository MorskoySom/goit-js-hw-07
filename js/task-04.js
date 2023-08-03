const value = document.querySelector(`#value`);
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]')

decrementBtn.addEventListener(`click`, handlerDec);
incrementBtn.addEventListener(`click`, handlerInc);

function handlerInc() {
    counterValue += 1;
    value.textContent = counterValue;   
}

function handlerDec(evt) {
    counterValue -= 1;
    value.textContent = counterValue;   
}


