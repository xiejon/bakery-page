function generateMenu(element) {
    const container = document.createElement('div');
    const menu = document.createElement('p');
    const avocadoToast = document.createElement('p');

    container.classList.add('menu');

    menu.textContent = 'MENU';
    avocadoToast.textContent = 'Avocado Toast';

    // hide until called
    container.display.style = 'none';

    element.appendChild(container);
    container.appendChild(menu);
    container.appendChild(avocadoToast);
}

module.exports = {
    generateMenu: generateMenu
}