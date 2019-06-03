'use strict';

import { activateMenu } from '../../components/header/header';
import AOS from 'aos';


(() => {
    let navButton = document.querySelectorAll('.js-button')[0];
    let navContainer = document.querySelectorAll('.js-nav')[0];
    let anchors = document.querySelectorAll('.js-scroll');

    if (navButton && navContainer) {
        activateMenu(navButton, navContainer);
    }
    console.log(anchors);

    if (anchors) {
        for (let i = 0; i < anchors.length; i++) {
            anchors[i].addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(`#${anchors[i].href.split('#')[1]}`).scrollIntoView({ behavior: 'smooth' });
            });
        }
        /* anchors.forEach(elem => {
            elem.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(`#${elem.href.split('#')[1]}`).scrollIntoView({ behavior: 'smooth' });
            });
        }); */
    }
    AOS.init();

    /* document.addEventListener('aos:in:numbers', ({ detail }) => {
        let numberString = detail.innerText;
        let number = parseFloat(numberString.replace(',', '.').replace(' ', ''));
        let string = number.toFixed(2).toLocaleString('ru-RU');
        console.log(string, number);
    }); */
})();
/*
    This file can be used as entry point for webpack!
 */
