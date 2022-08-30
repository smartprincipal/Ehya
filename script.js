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
 hamburger.classList.toggle('hide-hamburger');
 menu.classList.togggle('active');
 close.classList.toggle('show-close')
})

// close.addEventListener('click', ()=>{
//  hamburger.classList.toggle('hide-hamburger');
//  menu.classList.toggle('show-close');
//  close.classList.toggle('close')
// })