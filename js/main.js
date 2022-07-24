import { getMockData } from './data.js';
import './util.js';
import { closeForm, handlerCloseFormKeydown } from './constans.js';

getMockData();


const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancelBtn = imgUploadOverlay.querySelector('#upload-cancel');

uploadFile.addEventListener('change', handlerTagEvent);

function handlerTagEvent() {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', handlerCloseFormKeydown);
}

uploadCancelBtn.addEventListener('click', () => {
  closeForm();
});
