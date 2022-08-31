// JAVASCRIPT FOR THE CONTACT US

let navt = document.querySelector('#navLink')
let landings = document.getElementById('landings')
let subLanding = document.getElementById('sub-landing')
let hamburger = document.getElementById('hamburger')
let close = document.getElementById('close')
// console.log(subLanding)
// console.log(close)



hamburger.addEventListener('click', () =>{
  navt.style.opacity = 0
  close.style.display ="block"
  hamburger.style.opacity = 0
  
})

close.addEventListener('click', ()=>{
  navt.style.opacity = 1
  hamburger.style.opacity = 1
  close.style.opacity =0
})


landings.addEventListener('click', () => {
  subLanding.classList.toggle('landing-menu')
  subLanding.classList.toggle('sub-landing')
})

let pages = document.getElementById('Pages')
let subPages = document.getElementById('sub-pages')

pages.addEventListener ('click', () => {
  subPages.classList.toggle('pages-menu')
  subPages.classList.toggle('sub-pages')
})


// script for testimonial slide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


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
