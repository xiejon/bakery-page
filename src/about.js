function generateAboutPage(element) {
    const about = document.createElement('div');
    const title = document.createElement('p');
    const body = document.createElement('p');
    about.classList.add('about');
    title.classList.add('about-title');
    body.classList.add('about-body');

    title.textContent = 'Our Story';
    body.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor at risus viverra adipiscing at in. Purus gravida quis blandit turpis cursus in hac. A pellentesque sit amet porttitor. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Risus at ultrices mi tempus imperdiet nulla malesuada. Suspendisse faucibus interdum posuere lorem ipsum. Arcu odio ut sem nulla pharetra. Amet tellus cras adipiscing enim.';
    
    element.appendChild(about);
    about.appendChild(title);
    about.appendChild(body);

     // hide page until called
     about.style.display = 'none';
}

module.exports = {
    generateAboutPage: generateAboutPage
}
