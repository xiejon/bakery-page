function generateMenu(element) {
    const container = document.createElement('div');
    const menu = document.createElement('p');
    const title = document.createElement('p');
    
    const titleContainer = document.createElement('div');
    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const item5 = document.createElement('div');
    const item6 = document.createElement('div');

    // flavors
    const plain = document.createElement('p');
    const pumpkin = document.createElement('p');
    const nutella = document.createElement('p');
    const rosemary = document.createElement('p');
    const lox = document.createElement('p');
    const truffle = document.createElement('p');

    // prices
    const sample = document.createElement('p');
    const price1 = document.createElement('p');
    const price2 = document.createElement('p');
    const price3 = document.createElement('p');
    const price4 = document.createElement('p');
    const price5 = document.createElement('p');
    const price6 = document.createElement('p');

    container.classList.add('menu');

    menu.textContent = 'MENU';
    title.textContent = 'Pretzels';
    plain.textContent = 'Plain';
    pumpkin.textContent = 'Pumpkin Seed';
    nutella.textContent = 'Nutella';
    rosemary.textContent = 'Rosemary';
    lox.textContent = 'Lox';
    truffle.textContent = 'Black Truffle';
    sample.textContent = 'Small/Large';
    price1.textContent = '2/3.5';
    price2.textContent = '2.5/4';
    price3.textContent = '2.5/4';
    price4.textContent = '3/4.5';
    price5.textContent = '4/5.5';
    price6.textContent = '8.5/10';

    element.appendChild(container);
    container.appendChild(titleContainer);
    container.appendChild(item1);
    container.appendChild(item2);
    container.appendChild(item3);
    container.appendChild(item4);
    container.appendChild(item5);
    container.appendChild(item6);
    titleContainer.append(title, sample);
    item1.append(plain, price1);
    item2.append(pumpkin, price2);
    item3.append(nutella, price3);
    item4.append(rosemary, price4);
    item5.append(lox, price5);
    item6.append(truffle, price6);

    // hide until called
    container.style.display = 'none';
}

module.exports = {
    generateMenu: generateMenu
}