import {renderBigPhoto} from './big-picture.js';

export const renderPreview = (data) => {
  const pictureTemplate = document.querySelector('#picture').content;

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < data.length; i++) {
    const element = pictureTemplate.cloneNode(true);
    element.querySelector('.picture__img').src=`${data[i].url}`;
    element.querySelector('.picture__likes').textContent=`${data[i].likes}`;
    element.querySelector('.picture__comments').textContent=`${data[i].comments.length}`;
    element.querySelector('.picture').addEventListener('click', () => renderBigPhoto({
      url:data[i].url, like:data[i].likes, comments:data[i].comments, description:data[i].description
    }));
    fragment.appendChild(element);
  }
  document.querySelector('.pictures').appendChild(fragment);
};
