const elements = {
    form: document.querySelector(`.login-form`),     
}

elements.form.addEventListener("submit", handlerCheckInput);

function handlerCheckInput(evt) {
    evt.preventDefault();
    
    const { email, password } = evt.currentTarget.elements;
  
    if (!email.value || !password.value) {
        alert(`All inputs must be used`);
    } else {
        const user = {  
            email : email.value,
            password : password.value
        }
        console.log(user);
        evt.target.reset();
    }
    
}

