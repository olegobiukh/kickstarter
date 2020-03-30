'use strict';

const burgerToggler = document.getElementById('burgerToggler');
const burgerOpen = document.getElementById('burgerOpen');
const burgerClose = document.getElementById('burgerClose');
const menu = document.getElementById('menu');
const links = document.getElementById('navList').children;
const up = document.getElementsByClassName('up__wrapper')[0];
const topRight = document.getElementById('topRight');

let isToggle = false;

const openMenu = () => {
  burgerClose.classList.add('menu__hide');
  burgerOpen.classList.remove('menu__hide');
  menu.classList.remove('nav__show');
  topRight.classList.remove('top__right--show');
};

burgerToggler.addEventListener('click', () => {
  if (isToggle) {
    openMenu();
  } else {
    burgerOpen.classList.add('menu__hide');
    burgerClose.classList.remove('menu__hide');
    menu.classList.add('nav__show');
    topRight.classList.add('top__right--show');
  }
  isToggle = !isToggle;
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    isToggle = false;
    openMenu();
  });
}

document.addEventListener('mousemove', e => {
  if (e.pageY > 1000) {
    up.classList.add('up__show');
  } else {
    up.classList.remove('up__show');
  }
});
