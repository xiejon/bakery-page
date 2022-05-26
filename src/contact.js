function generateContactPage(element) {
    const container = document.createElement('div');
    const mapRow = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');
    const row4 = document.createElement('div');

    const address = document.createElement('p');
    const phone = document.createElement('p');
    const hours = document.createElement('p');

    container.classList.add('contact');

    address.textContent = 'Greenwich Village, New York, NY 10012, USA';
    phone.textContent = '(212) 893-9938';
    hours.textContent = 'Mon-Fri 08:00-17:00 | Sat-Sun 10:00-14:00';

    element.appendChild(container);
    container.append(mapRow, row2, row3, row4);
    embedMap(mapRow);
    // address section
    markerSvg(row2);
    row2.appendChild(address);
    // phone
    phoneSvg(row3);
    row3.appendChild(phone);
    // hours
    clockSvg(row4);
    row4.appendChild(hours);

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

const clockSvg = (node) => {
    renderSvg(node, 
        "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z",
        "M12,6a1,1,0,0,0-1,1v4.325L7.629,13.437a1,1,0,0,0,1.062,1.7l3.84-2.4A1,1,0,0,0,13,11.879V7A1,1,0,0,0,12,6Z");
}

const markerSvg = (node) => {
    renderSvg(node, 
        "M12,6a4,4,0,1,0,4,4A4,4,0,0,0,12,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,12Z",
        "M12,24a5.271,5.271,0,0,1-4.311-2.2c-3.811-5.257-5.744-9.209-5.744-11.747a10.055,10.055,0,0,1,20.11,0c0,2.538-1.933,6.49-5.744,11.747A5.271,5.271,0,0,1,12,24ZM12,2.181a7.883,7.883,0,0,0-7.874,7.874c0,2.01,1.893,5.727,5.329,10.466a3.145,3.145,0,0,0,5.09,0c3.436-4.739,5.329-8.456,5.329-10.466A7.883,7.883,0,0,0,12,2.181Z");
}

const phoneSvg = (node) => {
    renderSvg(node, 
        "M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z");
}

function renderSvg(node, d1, d2) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    iconSvg.setAttribute('width', '24');
    iconSvg.setAttribute('height', '24');
    iconSvg.setAttribute('viewbox', `0 0 24 24`);
    iconPath1.setAttribute('d', d1);

    iconSvg.appendChild(iconPath1);

    if (d2) {
        const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        iconPath2.setAttribute('d', d2);
        iconSvg.appendChild(iconPath2);
    }

    return node.appendChild(iconSvg);
}

module.exports = {
    generateContactPage: generateContactPage
}