import './style.css';
import loadHomeBuild from "./home";
import loadContactBuild from './contact';
import loadMenuBuild from './menu';

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    loadHomeBuild();
    reset();
    homeButton.classList.add('selected');
    
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
    loadMenuBuild();
    reset();
    menuButton.classList.add('selected');
    
});

const contactButton = document.querySelector('#contact');
contactButton.addEventListener('click', () => {
    loadContactBuild();
    reset();
    contactButton.classList.add('selected');
    
});

const reset = () => {
    homeButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    contactButton.classList.remove('selected');
}

loadHomeBuild();
homeButton.classList.add('selected');

console.log('This works!');
export default reset;