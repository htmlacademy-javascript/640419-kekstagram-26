const SCALE_DEFAULT = 100;
const SCALE_MAX_ = 100;
const SCALE_MIN = 25;
const SCALE_STEP = 25;

// форма редактирования изображения
const imgUploadPreviewContainer = document.querySelector('.img-upload__preview-container');

// превью изображения (здесь изображение редактируется)
const imgUploadPreview = imgUploadPreviewContainer.querySelector('.img-upload__preview img');

//значение размера (маштаба) изображения
const scaleControlValue = imgUploadPreviewContainer.querySelector('.scale__control--value');

// увеличения масштаба
const scaleControlBigger = imgUploadPreviewContainer.querySelector('.scale__control--bigger');

// уменьшения масштаба
const scaleControlSmaller = imgUploadPreviewContainer.querySelector('.scale__control--smaller');
