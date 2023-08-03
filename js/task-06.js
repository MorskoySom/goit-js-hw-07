const valInput = document.querySelector(`#validation-input`);
console.dir(valInput);

valInput.addEventListener(`blur`, handlerCheck);

function handlerCheck(evt) {
    if (evt.currentTarget.value.trim().length === Number(valInput.dataset.length)) {
        valInput.classList.remove("invalid");
        valInput.classList.add("valid");
    } else {
        valInput.classList.add("invalid");
    }  
}