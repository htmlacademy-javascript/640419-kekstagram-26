import { getMockData } from './data.js';
import './util.js';
import { closeForm, handlerCloseFormKeydown } from './constans.js';
import { zoomOut, zoomUp } from './images-scale.js';

getMockData();


const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancelBtn = imgUploadOverlay.querySelector('#upload-cancel');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');

uploadFile.addEventListener('change', handlerTagEvent);

function handlerTagEvent() {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', handlerCloseFormKeydown);
  scaleControlSmaller.addEventListener('click', zoomOut);
  scaleControlBigger.addEventListener('click', zoomUp);
  /* addScaleHandlers(); */
}

uploadCancelBtn.addEventListener('click', closeForm);

