const elements = {
  nmbr: document.querySelector('input'),
  createBox: document.querySelector('button[data-create]'),
  destroyBox: document.querySelector('button[data-destroy]'),
  divsBox: document.querySelector('#boxes')
}

elements.createBox.addEventListener(`click`, createBoxes);

function createBoxes(amount) { 
  const totalDivs = [];
  amount = elements.nmbr.valueAsNumber;
  // console.dir(elements.nmbr.valueAsNumber);
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const eachDiv = document.createElement(`div`);
      const eachDivColor = getRandomHexColor();
      let step = 30;
      step = 30 + (10 * i);
      eachDiv.style.backgroundColor = eachDivColor;
      eachDiv.style.width = `${step}px`;
      eachDiv.style.height = `${step}px`;  
      totalDivs.push(eachDiv);          
    }       
  }
  console.log(totalDivs); 
  elements.divsBox.append(...totalDivs);
}

elements.destroyBox.addEventListener(`click`, destroyBoxes);

function destroyBoxes() {
  elements.divsBox.innerHTML = ``;  
  elements.nmbr.valueAsNumber = ``;  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
