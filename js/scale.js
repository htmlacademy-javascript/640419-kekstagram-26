// scale
const SCALE_DEFAULT = 100;
const SCALE_MAX_ = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

// Форма редактирования изображения
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

// превью изображения
const imgUploadPreview = imgUploadOverlay.querySelector('.img-upload__preview img');

// значение размера (маштаба) изображения
const scaleControlValue = imgUploadOverlay.querySelector('.scale__control--value');

// увеличения масштаба
const scaleControlBigger = imgUploadOverlay.querySelector('.scale__control--bigger');

// уменьшения масштаба
const scaleControlSmaller = imgUploadOverlay.querySelector('.scale__control--smaller');

// 1. функция сделать маштаб меньше
const zoomOut = () => {

};


// 2. функция сделать маштаб больше
const zoomIn = () => {

};

// 3. добавить обработчик scale
const addScale = () => {
  scaleControlSmaller.addEventListener('click', zoomOut);
  scaleControlBigger.addEventListener('click', zoomIn);
};

// 4. удалить обработчик scale
const removeScale = () => {
  scaleControlSmaller.addEventListener('click', zoomOut);
  scaleControlBigger.addEventListener('click', zoomIn);
};

export { addScale, removeScale };

// // // //
//

const значениеМаштаба = () => {
  scaleControlValue.value = SCALE_MAX;
  imgUploadPreview = ; ??
};

const поменятьМаштаб = (сделать больше ) => {
  const маштабИзображения = (scaleControlValue.value)

  if (сделается больше) {
    if (маштабИзображения > SCALE_MAX);
    маштабИзображения = SCALE_STEP;
  }
} else {
  if (маштабИзображения > SCALE_MIN) {
    маштабИзображения = SCALE_STEP;
  }
};

const УвеличениеМаштаба = () => поменятьМаштаб();
const УменьшениеМаштаба = () => поменятьМаштаб();
scaleControlBigger.addEventListener('click', УвеличениеМаштаба);
scaleControlSmaller.addEventListener('click', УменьшениеМаштаба);

export { значениеМаштаба };
