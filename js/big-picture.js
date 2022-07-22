import { getRandomIntFromRange, getRandomElementArray } from './util.js';
import { MOCK_NAME_LIST, MOCK_MESSAGE_LIST } from './data.js';
//

const bigPicture = document.querySelector('.big-picture');
const closePictureButton = bigPicture.querySelector('#picture-cancel');
const socialComments = bigPicture.querySelector('.social__comments');
const body = document.querySelector('body');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const commentLoader = bigPicture.querySelector('.comments-loader');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialComment = bigPicture.querySelector('.social__comment');
const commentFragment = document.createDocumentFragment();

const escPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', keyPress);
};

function keyPress(e) {
  if (e.key === 'Escape') {
    escPicture();
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
    img.src = `img/avatar-${getRandomIntFromRange(1, 6)}.svg`;
    img.alt = getRandomElementArray(MOCK_NAME_LIST);
    const text = listItem.querySelector('.social__text');
    text.textContent = getRandomElementArray(MOCK_MESSAGE_LIST);
    commentFragment.appendChild(listItem);
  }

  socialComments.innerHTML = '';
  socialComments.appendChild(commentFragment);
  socialCommentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  document.addEventListener('keydown', keyPress);
};

export { renderBigPhoto };
