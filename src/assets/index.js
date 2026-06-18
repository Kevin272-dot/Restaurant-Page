import "./styles/homepage.css";
import { renderHome as home } from "../components/home.js";
import { renderMenu as menu } from "../components/menu.js";
import { renderAbout as about } from "../components/about.js";
document.addEventListener("DOMContentLoaded", () => {
  home();

  const homeButton = document.querySelector(".home");

  homeButton.addEventListener("click", () => {
    home();
  });
  const menuButton = document.querySelector(".menu");
  menuButton.addEventListener("click", () => {
    menu();
  });
  const aboutButton = document.querySelector(".about");
  aboutButton.addEventListener("click", () => {
    about();
  });
});
