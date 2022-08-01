import { isEscapeKey } from './utils.js';

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

const handlerEscapePress = (evt) => {
  if (isEscapeKey(evt)) {
    bigPictureOpen();
  }
};

const bigPictureOpen = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', handlerEscapePress);
};

closePictureButton.addEventListener('click', bigPictureOpen);

const renderBigPhoto = ({ url, like, comments, description }) => {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.remove('hidden');
  commentLoader.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPictureImg.src = url;
  socialCommentCount.textContent = like;
  socialCaption.textContent = description;

  for (let index = 0; index < comments.length; index++) {
    const listItem = socialComment.cloneNode(true);
    const img = listItem.querySelector('img');
    img.src = comments[index].avatar;
    img.alt = comments[index].name;
    const text = listItem.querySelector('.social__text');
    text.textContent = comments[index].message;
    commentFragment.appendChild(listItem);
  }

  socialComments.innerHTML = '';
  socialComments.appendChild(commentFragment);
  socialCommentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
  document.addEventListener('keydown', handlerEscapePress);
};

export { renderBigPhoto };
