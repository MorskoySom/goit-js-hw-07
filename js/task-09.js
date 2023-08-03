const changeCol = document.querySelector(`.change-color`); 
const body = document.querySelector(`body`); 
const color = document.querySelector(`.color`);

changeCol.addEventListener(`click`, handlerChangeBGC);

function handlerChangeBGC() {  
  const rundomColor = getRandomHexColor();
  body.style.backgroundColor = rundomColor;
  color.textContent = rundomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
