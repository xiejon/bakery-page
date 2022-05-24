function generateAboutPage(element) {
    const about = document.createElement('div');
    about.classList.add('about');
    about.style.display = 'none';

    element.appendChild(about);
}

module.exports = {
    generateAboutPage: generateAboutPage
}
