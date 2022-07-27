// Изменение глубины эффекта, накладываемого на изображение
const effectLevelValue = document.querySelector('.effect-level__value');

// Наложение эффекта на изображение
const imgUploadEffects = document.querySelector('.img-upload__effects');

// Предварительный просмотр изображения
const imgUploadPreview = document.querySelector('.img-upload__preview img');

// Контейнер слайдера
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

const EFFECTS = [
  {
    ID: 'none',
    OPTIONS: {}
  },

  {
    ID: 'chrome',
    OPTIONS: {
      filter: 'grayscale',
      unit: '',
      options: {
        range: {
          min: 0,
          max: 1,
        },
      },
    },
  },

  {
    ID: 'sepia',
    OPTIONS: {
      filter: 'sepia',
      unit: '',
      options: {
        range: {
          min: 0,
          max: 1,
        },
      },
    },
  },

  {
    ID: 'marvin',
    OPTIONS: {
      filter: 'invert',
      unit: '%',
      options: {
        range: {
          min: 0,
          max: 100,
        },
      },
    },
  },

  {
    ID: 'phobos',
    OPTIONS: {
      filter: 'blur',
      unit: 'px',
      options: {
        range: {
          min: 0,
          max: 3,
        },
      },
    },
  },

  {
    ID: 'heat',
    OPTIONS: {
      filter: 'brightness',
      unit: '',
      options: {
        range: {
          min: 1,
          max: 3,
        },
      },
    },
  },
];

const effectList = document.querySelector('.effects__list');
const effectRadio = effectList.querySelectorAll('.effects__radio');

const noEffect = () => {
  effectLevelValue.classList.add('hidden');
  effectLevelValue.value = '';
  imgUploadPreview.style.filter = 'none';
  imgUploadEffectLevel.classList.add('hidden');
};

// создать обработчик для фильтра;
const changeFilters = (evt) => {
  const filtersHandler = evt.target.value;
  if (filtersHandler === 'none') {
    noEffect();
  } else {
    effectLevelValue.classList.remove('hidden');
    imgUploadPreview.removeAttribute('class');
    imgUploadPreview.className = 'img-upload__preview';
    imgUploadPreview.classList.add(`effects__preview--${filtersHandler}`);
  }
};

effectRadio.addEventListener('change', changeFilters);
