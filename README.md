# "The Laugenstange Bakery" Page

A Laugenstange is a German pretzel-bread, one of my favorite snacks. This project was an attempt to implement ES6 modules and webpack in a webpage for a fictional restaurant. Created as part of The Odin Project's Full-Stack Javascript Course. 

Viewable at https://xiejon.github.io/bakery-page/

## Objectives 

1. Design an attractive, easy-to-navigate UI.
2. Build a website with 3 separate tabs linking to Menu/About/Contact sections.
3. Organize code using ES6 modules.
4. Use webpack to bundle resources.
5. (For practice) Use only JS to manipulate HTML.

## Motivation

After completing some introductory [webpack tutorials](https://webpack.js.org/guides/asset-management/), I was excited to put this knowledge into practice. Furthermore, I wanted to continue practicing using modular patterns and factory functions to make my code more efficient and easier to read. 

## Overview
 
1. Visitor is greeted by the homepage. Under store title is a short description of the business and a button to view the menu. The header contains direct links to menu/about/contact.
2. The menu contains information about the types of pretzels offered and prices for a small and large pretzel. 
3. The about section offers insight into the company's background/history. 
4. The contact section contains an embedded Google Maps app with a pinned location, along with address/phone number/operating hours.

## Challenges 

1. Tabs
    - It took me a while to figure out the logic of setting up event listeners so that the menu/about/contact sections would display after being clicked (without disturbing the header/footer). Another issue I ran into: preventing tabs from opening simultaneously.  
    - My eventual solution was to attach a toggle function to an event listener. The function checked if a tab was currently displayed. If not, it changed the tab's display style from its default (none) to either flex or grid. If a tab's display style !== none, that meant the tab should be closed and the homepage opened. 

2. Function References
    - In an earlier version of my code, I kept running into bugs in my event listeners, and I realized it was because I was directly calling the function with 'togglePage();' instead of correctly storing a reference to my function with 'togglePage'. 

## Areas for Improvement

- UI. I am not quite happy with how the webpage looks yet. Some of the spacing and layout is strange. 
- Code efficiency. In my menu.js file, for example, I have a lot of repetitive code (mainly to manipulate DOM). I wonder if this can be reduced?


