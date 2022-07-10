import { getRandomIntFromRange, getRandomElementArray } from './util.js';
import { MOCK_NAME_LIST, MOCK_MESSAGE_LIST } from './data.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');

//  Полноэкранный показ изображения
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');

//  Кнопка для выхода из полноэкранного просмотра изображения
const closePictureButton = bigPicture.querySelector('#picture-cancel');

//  Кнопка для загрузки новой порции комментариев
const commentLoader = bigPicture.querySelector('.comments-loader');

// Информация об изображении. Подпись, комментарии, количество лайков
const socialCaption = bigPicture.querySelector('.social__caption');

// Комментарии к изображению
const socialCommentCount = bigPicture.querySelector('.social__comment-count');

const socialComments = bigPicture.querySelector('.social__comments');

const socialComment = bigPicture.querySelector('.social__comment');

const commentFragment = document.createDocumentFragment();

/* После открытия окна добавьте
тегу <body> класс modal-open,
чтобы контейнер с фотографиями позади не прокручивался при скролле.
!При закрытии окна не забудьте удалить этот класс. */

const escPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', keyPress);
};

/* Напишите код для закрытия окна
по нажатию клавиши Esc и клике
по иконке закрытия */

function keyPress(e) {
  if (e.key === "Escape") {
    escPicture();// write your logic here.
  }
}

closePictureButton.addEventListener('click', escPicture);

const renderBigPhoto = ({ url, like, comments, description }) => {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPictureImg.src = url;
  socialCommentCount.textContent = like;
  socialCaption.textContent = description;

  for (let index = 0; index < comments; index++) {
    const listItem = socialComment.cloneNode(true);
    const img = listItem.querySelector('img');
    img.src = `img/avatar-${getRandomIntFromRange(1,6)}.svg`;
    img.alt = getRandomElementArray(MOCK_NAME_LIST);
    const text = listItem.querySelector('.social__text');
    text.textContent = getRandomElementArray(MOCK_MESSAGE_LIST);
    commentFragment.appendChild(listItem);
  }

  socialComments.innerHTML = '';
  socialComments.appendChild(commentFragment);

  /*console.log(socialComments); */

  socialCommentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
};

export { renderBigPhoto };
