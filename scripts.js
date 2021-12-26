const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const hamburgertoggle = document.querySelector('.hamburger');

hamburger.addEventListener('click',() =>{
        navbar.classList.toggle('open'); 
        hamburgertoggle.classList.toggle('closebars');
})
