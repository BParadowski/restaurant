import "./style.scss";
import renderHome from "./home.js";

const contentDiv = document.getElementById('content');
contentDiv.replaceChildren(renderHome());
