import "./style.scss";
import homePage from "./home.js";
import menuPage from "./menu";

const contentDiv = document.getElementById('content');
const navHome = document.getElementById('home-button')
const navMenu = document.getElementById('menu-button')
const navContact = document.getElementById('contact-button')

const displayHome = () => {
    contentDiv.replaceChildren(homePage);
}
const displayMenu = () => {
    contentDiv.replaceChildren(menuPage);
}

navHome.addEventListener('click', displayHome);
navMenu.addEventListener('click', displayMenu);

displayHome();