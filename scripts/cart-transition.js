'use strict';

const back = document.getElementById('back');
const summaryCost = document.getElementById('cost');
const cart = document.getElementById('cart');
const shipping = document.getElementById('shipping');
const payment = document.getElementById('payment');
const gratitude = document.getElementById('gratitude');
const progress = document.getElementById('progress').children;

progress[0].classList.add('progress__item--wrapper-active');

let cartState = 1;

const switchState = () => {
  switch (cartState) {
    case 1:
      cart.style.display = 'block';
      shipping.style.display = 'none';
      progress[0].classList.add('progress__item--wrapper-active');
      progress[0].classList.remove('progress__item--wrapper-show');
      progress[1].classList.remove('progress__item--wrapper-active');

      break;
    case 2:
      cart.style.display = 'none';
      payment.style.display = 'none';
      shipping.style.display = 'flex';
      progress[0].classList.remove('progress__item--wrapper-active');
      progress[0].classList.add('progress__item--wrapper-show');
      progress[1].classList.add('progress__item--wrapper-active');
      progress[1].classList.remove('progress__item--wrapper-show');
      progress[2].classList.remove('progress__item--wrapper-active');

      break;
    case 3:
      shipping.style.display = 'none';
      payment.style.display = 'flex';
      progress[1].classList.remove('progress__item--wrapper-active');
      progress[1].classList.add('progress__item--wrapper-show');
      progress[2].classList.add('progress__item--wrapper-active');

      break;
    case 4:
      payment.style.display = 'none';
      gratitude.style.display = 'flex';

      break;
    default:
      toHomePage();
      break;
  }
};

back.addEventListener('click', () => {
  if (cartState === 0) {
    toHomePage();
  } else {
    cartReturn();
  }
});

function toHomePage() {
  const newUrl = '/';

  history.pushState({}, null, newUrl);
  location.reload();
}

function cartContinue() {
  cartState++;
  switchState();
}

function cartReturn() {
  cartState--;
  switchState();
}

shipping.addEventListener('submit', () => {
  event.preventDefault();
  cartContinue();
});

payment.addEventListener('submit', () => {
  event.preventDefault();
  cartContinue();
});
