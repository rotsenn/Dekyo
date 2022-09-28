const menunavbar = document.querySelector(".menunavbar");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
    menunavbar.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu); 
closeMenuBtn.addEventListener("click", toggleMenu); 