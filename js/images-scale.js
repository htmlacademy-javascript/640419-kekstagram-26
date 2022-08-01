const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const imgUploadPreview = document.querySelector('.img-upload__preview img');
const scaleInput = document.querySelector('.scale__control--value');

export const onScaleLess = () => {
  const newValue = scaleInput.value === `${SCALE_MIN}%` ? SCALE_MIN : Number(scaleInput.value.replace('%', '')) - SCALE_STEP;
  scaleInput.value = `${newValue}%`;
  imgUploadPreview.style = `transform:scale(${newValue}%)`;
};

export const onScaleMore = () => {
  const newValue = scaleInput.value === `${SCALE_MAX}%` ? SCALE_MAX : Number(scaleInput.value.replace('%', '')) + SCALE_STEP;
  scaleInput.value = `${newValue}%`;
  imgUploadPreview.style = `transform:scale(${newValue}%)`;
};

export const resetScale = () => {
  scaleInput.value = '100%';
  imgUploadPreview.style = 'transform: none';
};

