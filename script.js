let landings = document.getElementById('landings')
let subLanding = document.getElementById('sub-landing')

let menu= document.getElementById('menu-list')
let close= document.getElementById('close')
let hamburger= document.getElementById('hamburger')
let logo = document.getElementById('logo')

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

hamburger.addEventListener('click',() =>{
 hamburger.classList.add('hide-hamburger');
 menu.classList.toggle('active');
 close.classList.toggle('show-close')
})

close.addEventListener('click', ()=>{
 hamburger.classList.add('hide-hamburger');
 menu.classList.toggle('show-close');
 close.classList.toggle('close')
})