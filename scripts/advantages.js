// eslint-disable-next-line no-console
'use strict';

const nextAdv = document.getElementById('advNe');
const prevAdv = document.getElementById('advPr');
const counter = document.getElementById('advCounter');
const adv = document.getElementById('advantages').children;
let count = 1;

nextAdv.addEventListener('click', () => {
  adv[count - 1].classList.add('advantages__hide');
  adv[count].classList.remove('advantages__hide');
  count++;
  counter.innerHTML = '0' + count;

  if (count === 4) {
    nextAdv.classList.add('buttons__disable');
  } else if (count === 2) {
    prevAdv.classList.remove('buttons__disable');
  }
});

prevAdv.addEventListener('click', () => {
  count--;
  adv[count - 1].classList.remove('advantages__hide');
  adv[count].classList.add('advantages__hide');
  counter.innerHTML = '0' + count;

  if (count === 1) {
    prevAdv.classList.add('buttons__disable');
  } else if (count === 3) {
    nextAdv.classList.remove('buttons__disable');
  }
});
