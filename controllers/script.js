
// Extraindo as classes do HTML
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".menu");
const imgSocial = document.querySelector(".logo");
const faker = document.querySelector(".fakerCnj");


// Evento de click, no menu hamburguer
hamburguer.addEventListener("click", ()=>{
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    imgSocial.classList.toggle('active')
});

