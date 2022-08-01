const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

const imgUploadPreview = document.querySelector('.img-upload__preview img');

export const onScaleLess = () => {
  const input = document.querySelector('.scale__control--value');
  const newValue = input.value === `${SCALE_MIN}%` ? SCALE_MIN : Number(input.value.replace('%', '')) - SCALE_STEP;
  input.value = `${newValue}%`;
  imgUploadPreview.style = `transform:scale(${newValue}%)`;
};

export const onScaleMore = () => {
  const input = document.querySelector('.scale__control--value');
  const newValue = input.value === `${SCALE_MAX}%` ? SCALE_MAX : Number(input.value.replace('%', '')) + SCALE_STEP;
  input.value = `${newValue}%`;
  imgUploadPreview.style = `transform:scale(${newValue}%)`;
};
