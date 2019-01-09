'use strict';

const dropDownBtn = document.querySelector('.header-button');
const dropDownMenu = document.querySelector('.icon-block-list');
 
dropDownBtn.addEventListener('click', handelShowDropDownMenu);




function handelShowDropDownMenu(evt){
  dropDownMenu.style.display = "block";
  }
