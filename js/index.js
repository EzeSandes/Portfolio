const headerEl = document.querySelector(".section-header");
const navIconEl = document.querySelector(".nav-toggle");

/************ SHOW MENU - MOBILE */

navIconEl.addEventListener("click", () => {
  headerEl.classList.toggle("show-menu");
});

/************ GET YEAR */

const yearEl = document.querySelector(".year");
yearEl.innerHTML = new Date().getFullYear();
