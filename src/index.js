import './styles.css';
import { contentWrapper, generateFrontPage } from './homepage.js';
import { generateAboutPage } from './about.js';
import { generateMenu } from './menu.js';

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
        const toggle = togglePage(aboutPage, 'flex');
    });
})();

const menuSection = (() => {
    const main = document.querySelector('.main');
    generateMenu(main);

    const menuLink = document.querySelector('.header p:nth-of-type(1)');
    const menuPage = document.querySelector('.menu');

    menuLink.addEventListener('click', () => {
        const toggle = togglePage(menuPage, 'grid');
    })
})();

function togglePage(element, displayType) {
    const box = document.querySelector('.box');
    if (element.style.display === 'none') {
        element.style.display = displayType;
        box.style.display = 'none';
        
    } else {
        element.style.display = 'none';
        box.style.display = displayType;
    }
}