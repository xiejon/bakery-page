import './styles.css';
import { contentWrapper, generateFrontPage } from './homepage.js';
import { generateAboutPage } from './about.js';

const homePage = (() => {
    contentWrapper(); 
    generateFrontPage();
})();

const aboutSection = (() => {
    const main = document.querySelector('.main');
    generateAboutPage(main);

    const aboutLink = document.querySelector('.header p:nth-of-type(2)');
    const aboutPage = document.querySelector('.about');

    aboutLink.addEventListener('click', () => {
        const toggle = togglePage(aboutPage);
    });
})();

function togglePage(element) {
    const box = document.querySelector('.box');
    if (element.style.display === 'none') {
        element.style.display = 'flex';
        box.style.display = 'none';
        
    } else {
        element.style.display = 'none';
        box.style.display = 'flex';
    }
}