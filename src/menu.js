let menuPage;
export default menuPage = (function(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const addMenuItem = (dishName, imgUrl, description, price) => {
        const dishCard = document.createElement('div');
        dishCard.classList.add('menu__card');
        const nameHeader = document.createElement('h4');
        nameHeader.textContent = dishName;
        const dishImg = document.createElement('img');
        dishImg.src = imgUrl;
        const dishDesc = document.createElement('p');
        dishDesc.textContent = description;
        const dishPrice = document.createElement('h4');
        dishPrice.textContent = price + ' €';

        dishCard.replaceChildren(nameHeader, dishImg, dishDesc, dishPrice);
        menu.appendChild(dishCard);
    }

    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');
    addMenuItem('Coconut porridge with pear', './porridgeWithPear.jpg', 'Oats, soy milk, nuts and seeds, coconut flakes, carmelized pear.', '8');

    return menu;
})();