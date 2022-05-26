function generateContactPage(element) {
    const container = document.createElement('div');
    const address = document.createElement('p');
    const phone = document.createElement('p');

    container.classList.add('contact');

    address.textContent = 'Greenwich Village, New York, NY 10012, USA';
    phone.textContent = '(212) 893-9938';

    element.appendChild(container);
    container.appendChild(address);
    container.appendChild(phone);
    embedMap(container);
    renderClockSVG(container);

    // hide until called
    container.style.display = 'none';
}

function embedMap(node) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.4409029361013!2d-73.9991135162869!3d40.730322887823405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfd34f9508043192!2zNDDCsDQzJzQ5LjIiTiA3M8KwNTknNDkuMiJX!5e0!3m2!1sen!2suk!4v1653591468137!5m2!1sen!2suk");
    iframe.setAttribute('width', '400');
    iframe.setAttribute('height', '300');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    return node.appendChild(iframe);
}

function renderClockSVG(node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    iconSvg.setAttribute('width', '24');
    iconSvg.setAttribute('height', '24');
    iconSvg.setAttribute('viewbox', '0 0 24 24');
    iconPath1.setAttribute('d', "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z");
    iconPath2.setAttribute('d', "M12,6a1,1,0,0,0-1,1v4.325L7.629,13.437a1,1,0,0,0,1.062,1.7l3.84-2.4A1,1,0,0,0,13,11.879V7A1,1,0,0,0,12,6Z");

    iconSvg.appendChild(iconPath1);
    iconSvg.appendChild(iconPath2);

    return node.appendChild(iconSvg);
}

module.exports = {
    generateContactPage: generateContactPage
}