import { VALUE_EMPTY_FILTER } from './constants.js';

const imgUploadPreview = document.querySelector('.img-upload__preview img');


export const resetEffect = () => {
  imgUploadPreview.removeAttribute('class');
};

export const changeFilters = (evt) => {
  const filtersHandler = evt.target.value;
  resetEffect();
  if (filtersHandler !== VALUE_EMPTY_FILTER) {
    imgUploadPreview.classList.add(`effects__preview--${filtersHandler}`);
  }
};
