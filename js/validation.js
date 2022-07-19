// maximum comment size
const MAX_COMMENT_SIZE = 140;
const MAX_HASHTAGS = 5;
const RE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const form = document.querySelector('.img-upload__form');
// Добавление хэш-тегов и комментария к изображению
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
});

function сommentValid (value) {
  return value.length <= MAX_COMMENT_SIZE;
}

pristine.addValidator(
  сommentValid,
  textDescription
);

const hashtagIsValid = (value) => {
  const hashtagsArr = value.split(' ');
  hashtagsArr.forEach ((j, index) => {
    j.toLowerCase();
    if (RE.test(j)) {

      return false;

    }

    if (hashtagsArr.length > MAX_HASHTAGS) {

      return false;

    }
    
    if (index === hashtagsArr.lastIndexOf(j)) {

      return false;

    }
  });
};

pristine.addValidator(
  textHashtags,
  hashtagIsValid
);

form.addEventListener('submit', () => {
  pristine.validate();
});
