const imgUploadPreview = document.querySelector('.img-upload__preview img');

const removeEffect = () => {
  imgUploadPreview.removeAttribute('class');
};

export const changeFilters = (evt) => {
  const filtersHandler = evt.target.value;
  removeEffect();
  if (filtersHandler !== 'none') {
    imgUploadPreview.classList.add(`effects__preview--${filtersHandler}`);
  }
};
