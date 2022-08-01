import { renderPreview } from './data.js';
import { changeFilters } from './images-effects.js';
import { getData, handlerSubmit } from './api.js';
import { closeForm, openForm, resetForm } from './upload-form.js';

getData(renderPreview);

const uploadFile = document.querySelector('#upload-file');
const effectRadios = document.querySelectorAll('.effects__radio');
const imgUploadForm = document.querySelector('.img-upload__form');

uploadFile.addEventListener('change', openForm);

effectRadios.forEach((item) => {
  item.addEventListener('change', changeFilters);
});

imgUploadForm.addEventListener('submit', handlerSubmit);
