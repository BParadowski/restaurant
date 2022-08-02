import "./style.scss";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js"

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

const displayContactInfo = () => {
    contentDiv.replaceChildren(contactPage);
}

navHome.addEventListener('click', displayHome);
navMenu.addEventListener('click', displayMenu);
navContact.addEventListener('click', displayContactInfo);

displayHome();

