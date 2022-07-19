const body = document.querySelector('body');
// Поле для загрузки нового изображения на сайт
const uploadSelectImage = document.querySelector('#upload-select-image');
// Добавление хэш-тегов и комментария к изображению
const textHashtags = uploadSelectImage.querySelector('.text__hashtags');
const textDescription = uploadSelectImage.querySelector('.text__description');
//  Изначальное состояние поля для загрузки изображения
const uploadFile = document.querySelector('#upload-file');
// Форма редактирования изображения
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
// Изменение размера изображения
const scaleControlValue = imgUploadOverlay.querySelector('.scale__control--value');
// Кнопка для закрытия формы редактирования изображения
const uploadCancelBtn = imgUploadOverlay.querySelector('#upload-cancel');
const uploadSubmitBtn = uploadSelectImage.querySelector('.img-upload__submit');
// Форма редактирования изображения
const imgUploadPreview = imgUploadOverlay.querySelector('.img-upload__preview');
//  Поле для загрузки нового изображения на сайт


const keyPress = (evt) => evt.key === 'Escape';

export { keyPress };

// Закрытие формы редактирования изображения
//  clearValue --- https://questu.ru/questions/40531459/
const сlosingImageEditingForm = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  clearValue(uploadFile);
  clearValue(textHashtags);
  clearValue(textDescription);

  document.removeEventListener('keydown', keyPress);
};

const uploadImageEditingForm = () => {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', keyPress);
  });

  uploadCancelBtn.addEventListener('click', () => {
    сlosingImageEditingForm();
  });
};

function clearValue(k) {
  k.value = '';
}

// pristine

const uploadImage = () => {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
};


const pristine = new Pristine(uploadSelectImage, {
  classTo: 'form__item',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'form__item',
 // errorTextTag: 'span',
 //  errorTextClass: 'form__error'
});


pristine.addValidator(uploadSelectImage.querySelector('#nickname'));


uploadImage.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

export { uploadImage };
