const inpName = document.querySelector(`#name-input`);
const outputName = document.querySelector(`#name-output`);


inpName.addEventListener(`input`, handlerName);

function handlerName(evt) {
    console.dir(evt.currentTarget.value);    
    outputName.textContent = evt.currentTarget.value.trim();
    if (evt.currentTarget.value.trim() === ``) {
        outputName.textContent = `Anonymous`;
    }
}