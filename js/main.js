import { renderPreview } from './data.js';
import { closeForm, handlerCloseFormKeydown } from './constans.js';
import { onScaleLess, onScaleMore } from './images-scale.js';
import { changeFilters } from './images-effects.js';
import { handlerSubmit, getData } from './api.js';

export const isEscapeKey = (evt) => evt.key === 'Escape';

getData(renderPreview);

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancelBtn = imgUploadOverlay.querySelector('#upload-cancel');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const effectRadios = document.querySelectorAll('.effects__radio');
const imgUploadForm = document.querySelector('.img-upload__form');

uploadFile.addEventListener('change', handlerTagEvent);

function handlerTagEvent() {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', handlerCloseFormKeydown);
  scaleControlSmaller.addEventListener('click', onScaleLess);
  scaleControlBigger.addEventListener('click', onScaleMore);
}

uploadCancelBtn.addEventListener('click', closeForm);

effectRadios.forEach((item) => {
  item.addEventListener('change', changeFilters);
});

imgUploadForm.addEventListener('submit', handlerSubmit);
