const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    document.querySelector(".search-mobile").style.display = "none";
  } else {
    document.querySelector(".search-mobile").style.display = "block";
  }
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  // document.querySelector(".search-mobile").style.display = "block";
}
