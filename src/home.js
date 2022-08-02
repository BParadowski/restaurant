let homePage;
export default homePage = (function (){

    const home = document.createElement('div');
    home.classList.add('home');

    const restaurantName = document.createElement('div');   
    restaurantName.textContent = 'Peaceful Cuisine';
    restaurantName.classList.add('home__name');

    const restaurantDesc = document.createElement('div');
    restaurantDesc.classList.add('home__desc');
    const para1 = document.createElement('p');
    para1.textContent = 'We serve organic, vegan food inspired by japanese cuisine. In our restaurant you will be able to taste delicious and beautiful plant-based dishes surrounded by aura of warm minimalism.'
    const headerOpen = document.createElement('h4');
    headerOpen.textContent = "Opening hours:"
    const para2 = document.createElement('p');
    para2.textContent = 'MON-THU: 10 AM - 9 PM\r\nFRI - SAT: 10AM - 11 PM\r\nSUN: 11 AM - 6 PM';
    const headerAdress = document.createElement('h4');
    headerAdress.textContent = 'Where to find us:';
    const para3 = document.createElement('p');
    para3.textContent = 'Heisenburg,\r\nRotsmund Strasse 27a,\r\n36-926';

    restaurantDesc.appendChild(para1);
    restaurantDesc.appendChild(headerOpen);
    restaurantDesc.appendChild(para2);
    restaurantDesc.appendChild(headerAdress);
    restaurantDesc.appendChild(para3);

    home.appendChild(restaurantName);
    home.appendChild(restaurantDesc);
    return home;
})();