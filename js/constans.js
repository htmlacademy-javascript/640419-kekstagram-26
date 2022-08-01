import { isEscapeKey } from './main.js';
const uploadSelectImage = document.querySelector('#upload-select-image');
const textHashtags = uploadSelectImage.querySelector('.text__hashtags');
const textDescription = uploadSelectImage.querySelector('.text__description');
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

export function closeForm() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeForm.reset(uploadFile);
  closeForm.reset(textHashtags);
  closeForm.reset(textDescription);
}

export const handlerCloseFormKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    closeForm();
    document.removeEventListener('keydown', handlerCloseFormKeydown);
  }
};


