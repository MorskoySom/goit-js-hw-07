const inpRange = document.querySelector(`#font-size-control`);
const sizeText = document.querySelector(`#text`);
let size = 16;
inpRange.addEventListener(`input`, handlerSize);

function handlerSize(evt) {
    // console.dir(evt.currentTarget.value);
    size = evt.currentTarget.value;
    sizeText.style.fontSize = `${size}px`;
   
}

