import { resetEffect } from './images-effects.js';
import { onScaleLess, onScaleMore, resetScale } from './images-scale.js';
import { isEscapeKey } from './utils.js';

const imageUploadForm = document.querySelector('#upload-select-image');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const uploadCancelBtn = document.querySelector('#upload-cancel');

export const resetForm = () => {
  imageUploadForm.reset();
  resetEffect();
  resetScale();
};

export const closeFormWithReset = () => {
  closeForm();
  resetForm();
};

export const handlerCloseFormOnKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeFormWithReset();
  }
};

export const closeForm = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadCancelBtn.removeEventListener('click', closeFormWithReset);
  document.removeEventListener('keydown', handlerCloseFormOnKeydown);
  scaleControlSmaller.removeEventListener('click', onScaleLess);
  scaleControlBigger.removeEventListener('click', onScaleMore);
};

export const openForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', handlerCloseFormOnKeydown);
  scaleControlSmaller.addEventListener('click', onScaleLess);
  scaleControlBigger.addEventListener('click', onScaleMore);
  uploadCancelBtn.addEventListener('click', closeFormWithReset);
};
