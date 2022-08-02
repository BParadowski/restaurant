import "./style.scss";
import homePage from "./home.js";
import menuPage from "./menu.js";
import contactPage from "./contact.js"

const contentDiv = document.getElementById('content');
const navHome = document.getElementById('home-button')
const navMenu = document.getElementById('menu-button')
const navContact = document.getElementById('contact-button')
let currentPage;

const displayHome = () => {
    if (currentPage !== 'homePage') contentDiv.replaceChildren(homePage);
    currentPage = 'homePage';
}
const displayMenu = () => {
    if (currentPage !== 'menuPage') contentDiv.replaceChildren(menuPage);
    currentPage = 'menuPage';
}

const displayContactInfo = () => {
    if (currentPage !== 'contactPage') contentDiv.replaceChildren(contactPage);
    currentPage = 'contactPage';
}

navHome.addEventListener('click', displayHome);
navMenu.addEventListener('click', displayMenu);
navContact.addEventListener('click', displayContactInfo);

displayHome();

