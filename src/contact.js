function generateContactPage(element) {
    const container = document.createElement('div');
    const title = document.createElement('p');

    container.classList.add('contact');

    title.textContent = 'Contact Us';

    element.appendChild(container);
    container.appendChild(title);
    embedMap(container);

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

module.exports = {
    generateContactPage: generateContactPage
}