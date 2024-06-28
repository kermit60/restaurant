import './style.css';
import loadHomeBuild from "./home";
import loadContactBuild from './contact';
import loadMenuBuild from './menu';

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    loadHomeBuild();
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
    loadMenuBuild();
});

const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', () => {
    loadContactBuild();
});

loadHomeBuild();
console.log('This works!');