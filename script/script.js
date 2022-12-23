const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
     menu.classList.toggle("menu_opened");
     
     
     
     
}


openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);




const menulinks = document.querySelectorAll('.menu a[href^="#"]');


menulinks.forEach(menulinks =>{
     menulinks.addEventListener("click", function(){
          menu.classList.remove("menu_opened");
     })
     
})