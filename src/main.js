import menuContent from "./menu";


import './styles.scss'
import * as bootstrap from 'bootstrap';
import contactContent from "./contact";
import introductionContent from "./Introduction";


//SELECTORS
const introductionButton = document.getElementById('introduction');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');
// const contentContainer = document.getElementById('')


//EVENTS
introductionButton.addEventListener('click', ()=>{
    clearPage();
    introductionContent();
});
menuButton.addEventListener('click', ()=>{
    clearPage();
    menuContent();
});
contactButton.addEventListener('click', ()=>{
    clearPage();
    contactContent();
});


//FUNCTIONS
function clearPage(){
    document.getElementById('content').innerHTML = ''
}




introductionContent();