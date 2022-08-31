// JAVASCRIPT FOR THE CONTACT US

const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const textHere = document.getElementById('textHere')
const submit = document.getElementById('submit');
const form = document.getElementById('form');


submit.disabled = true;

const validateFirstName = () => {
    
  const firstNameValue = firstName.value.trim();
  
  if (firstNameValue == '') {
      errorMessage(
        firstName,
        'First Name cannot be blank (First Name can accept any character except numbers)'
      );
      
  } else if (isValidName(firstNameValue)) {
      errorMessage(firstName, 'First Name accept any character except numbers');
  } else {
      success(firstName);
  }
}

const validateEmail = () => {

  const emailValue = email.value.trim();
  
  if (emailValue == '') {
      errorMessage(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    errorMessage(email, 'Not a valid Email')
  } else {
    success(email);
  }
}

const errorMessage = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

const success = (input) => {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}

const isEmail = (email) => {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  email
)
}

const isValidName = (name) => {
  let regEx = /\d|\d[^0-9]|[^0-9]\d/gi
  return name.match(regEx);
}

let firstValidation = firstName.addEventListener('blur', (e) => {
  e.preventDefault()
  validateFirstName()
})

let secondValidation = email.addEventListener('blur', (e) => {
  e.preventDefault()
  validateEmail()
})

let thirdValidation = textHere.addEventListener('blur', (e) => {
  e.preventDefault()
  validateTextHere()
})

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addLoader()
})
if (
  firstValidation &&
  secondValidation &&
  thirdValidation &&
) {
  submit.disabled = false
}
