const uploadSelectImage = document.querySelector('#upload-select-image');
const textHashtags = uploadSelectImage.querySelector('.text__hashtags');
const textDescription = uploadSelectImage.querySelector('.text__description');
const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

//  clearValue --- https://questu.ru/questions/40531459/

export function closeForm() {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearValue(uploadFile);
  clearValue(textHashtags);
  clearValue(textDescription);
}

export const handlerCloseFormKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeForm();
    document.removeEventListener('keydown', handlerCloseFormKeydown);
  }
};

function clearValue(k) {
  k.value = '';
}
