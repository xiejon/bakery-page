import './styles.css';
import { contentWrapper, generateFrontPage } from './homepage.js';
import { generateAboutPage } from './about.js';
import { generateMenu } from './menu.js';
import { generateContactPage } from './contact.js';

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
        const toggle = togglePage(aboutPage, menuSection.menuPage, 'flex');
    });

    return {
        aboutPage: aboutPage
    }
})();

const menuSection = (() => {
    const main = document.querySelector('.main');
    generateMenu(main);

    const menuLink = document.querySelector('.header p:nth-of-type(1)');
    const menuPage = document.querySelector('.menu');
    const menuButton = document.querySelector('.menu-button');

    const toggle = () => togglePage(menuPage, aboutSection.aboutPage,'grid');

    menuLink.addEventListener('click', toggle);
    menuButton.addEventListener('click', toggle);

    return {
        menuPage: menuPage
    }
})();

const contactSection = (() => {
    const main = document.querySelector('.main');
    generateContactPage(main);

})();

function togglePage(element, pageA, displayType) {
    const box = document.querySelector('.box');

    if (element.style.display === 'none') {
        element.style.display = displayType;
        pageA.style.display = 'none';
        box.style.display = 'none';
        
    } else {
        element.style.display = 'none';
        box.style.display = 'flex';
    }
}