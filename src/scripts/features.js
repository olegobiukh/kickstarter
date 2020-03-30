// eslint-disable-next-line no-console
'use strict';

const nextfeat = document.getElementById('featNe');
const prevfeat = document.getElementById('featPr');
const counterFeat = document.getElementById('featCounter');
const feat = document.getElementById('feat').children;
let countFeat = 1;

nextfeat.addEventListener('click', () => {
  feat[countFeat - 1].classList.add('features__hide');
  feat[countFeat].classList.remove('features__hide');
  countFeat++;
  counterFeat.innerHTML = '0' + countFeat;

  if (countFeat === 3) {
    nextfeat.classList.add('buttons__disable');
  } else if (countFeat === 2) {
    prevfeat.classList.remove('buttons__disable');
  }
});

prevfeat.addEventListener('click', () => {
  countFeat--;
  feat[countFeat - 1].classList.remove('features__hide');
  feat[countFeat].classList.add('features__hide');
  counterFeat.innerHTML = '0' + countFeat;

  if (countFeat === 1) {
    prevfeat.classList.add('buttons__disable');
  } else if (countFeat === 2) {
    nextfeat.classList.remove('buttons__disable');
  }
});
