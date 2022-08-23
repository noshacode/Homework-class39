'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/
const span = document.getElementById('nickname');
span.textContent = 'Nosha';

const span2 = document.getElementById('fav-food');
span2.textContent = 'Pizza';

const span3 = document.getElementById('hometown');
span3.textContent = 'Amsterdam';

const ulElement = document.querySelector('ul');

const liElements = Array.from(ulElement.children);
liElements.forEach((li) => {
  li.classList.add('list-item');
});

document.body.style.fontFamily = 'Arial, sans-serif';
