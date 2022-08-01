import { isEscapeKey } from './main.js';
const SET_TIMER = 4000;
const TEXT_ERROR = 'Не удалось загрузить данные. Попробуйте ещё раз';
const TEXT_WARNING = 'Не удалось загрузить иображения с сервера. Попробуйте ещё раз';
const GET_URL = 'https://26.javascript.pages.academy/kekstagram/data';
const POST_URL = 'https://26.javascript.pages.academy/kekstagram';

export const createMessage = (message) => {
  const wrapperMessage = document.createElement('div');
  wrapperMessage.textContent = message;
  document.body.append(wrapperMessage);
  wrapperMessage.style.top = 0;
  wrapperMessage.style.right = 0;
  wrapperMessage.style.bottom = 0;
  wrapperMessage.style.left = 0;
  wrapperMessage.style.textAlign = 'center';
  wrapperMessage.style.backgroundColor = 'white';
  wrapperMessage.style.color = 'black';
  wrapperMessage.style.fontSize = '16px';
  wrapperMessage.style.textContent = 'Не удалось загрузить данные. Попробуйте ещё раз';
  wrapperMessage.style.position = 'absolute';
  wrapperMessage.style.padding = '20px 10px';
  wrapperMessage.style.zIndex = '10';

  setTimeout(() => {
    wrapperMessage.remove();
  }, SET_TIMER);
};

export const debounce = (callback, delay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), delay);
  };
};

export const getData = (onSuccess) => {
  fetch(GET_URL)
    .then((response) => response.json().then((img) => onSuccess(img)))
    .catch(() => {
      createMessage(TEXT_WARNING);
    });
};


export const sendData = (onSuccess, onFail, body) => {
  fetch(
    POST_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(TEXT_ERROR);
      }
    })
    .catch(() => {
      onFail(TEXT_ERROR);
    });
};

export const handlerSubmit = (evt) => {
  const onSuccess = () => {
    createMessage(TEXT_ERROR);

  };
  const onFail = () => {
    createMessage(TEXT_ERROR);
  };
  const body = new FormData(evt.target);
  evt.preventDefault();
  sendData(onSuccess, onFail, body);
};

/* const messageSuccess = document.querySelector('#success').content.querySelector('.success'); */
/* const messageSuccessFragment = document.createDocumentFragment(); */
/* const messageError = document.querySelector('#error').content.querySelector('.error');
const messageErrorFragment = document.createDocumentFragment(); */

/* const messageEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.querySelectorAll('.success, .error')
      .forEach((element) =>
        element.remove());
  }
};
const imgUploadForm = document.querySelector('.img-upload__form');

const showErrorMessage = () => {
  const messageError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  const errorInner = messageError.querySelector('.error__inner');
  document.addEventListener('keydown', messageEscape);
  messageError.addEventListener('click', (evt) => {
    if (errorInner(evt.target)) {
      messageError.remove();
      document.removeEventListener('keydown', messageEscape);
    }
  });
  document.body.append(messageError);
};

const showSuccessMessage = () => {
  const messageSuccess = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  const innerSuccess = messageSuccess.querySelector('.success__inner');
  document.addEventListener('keydown', messageEscape);
  messageSuccess.addEventListener('click', (evt) => {
    if (innerSuccess(evt.target)) {
      messageSuccess.remove();
      document.removeEventListener('keydown', messageEscape);
    }
  });
  document.body.append(messageSuccess);
  imgUploadForm.reset();
};
 */