let landings = document.getElementById('landings')
let subLanding = document.getElementById('sub-landing')
console.log(subLanding)

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

let menu = document.getElementsByClassName('menu-list')
let close = document.getElementById('close')
let hamburger = document.getElementById('hamburger')
console.log(menu)
let logo = document.getElementById('logo')

hamburger.addEventListener('click',() =>{
  console.log('let me click')
 hamburger.classList.toggle('menu-listlink');
 menu.classList.togggle('active');
 close.classList.toggle('show-close')
 close.classList.add('menu')
})

// close.addEventListener('click', ()=>{
//  hamburger.classList.toggle('hide-hamburger');
//  menu.classList.toggle('show-close');
//  close.classList.toggle('close')
// })

// var menu = document.getElementById('menu-list');

// function open(){
//   if (menu.style.display === 'block'){
//     menu.style.display= 'none';
//   }else{
//     menu.style.display= 'block';
//   }
// }

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
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}