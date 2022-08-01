import { closeForm, openForm, resetForm } from './upload-form.js';
import { isEscapeKey } from './utils.js';

const FETCH_DATA_ERROR_TEXT = 'Не удалось загрузить изображения с сервера.';
const GET_URL = 'https://26.javascript.pages.academy/kekstagram/data';
const POST_URL = 'https://26.javascript.pages.academy/kekstagram';

const fetchDataErrorMessage = () => {
  const messageError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  const button = messageError.querySelector('.error__button');
  messageError.querySelector('.error__title').textContent = FETCH_DATA_ERROR_TEXT;
  button.textContent = 'Ок :('
  document.addEventListener('keydown', handlerMessagePressKey);
  const handlerClose = () => {
    messageError.remove();
    document.removeEventListener('keydown', handlerMessagePressKey);
  }
  button.addEventListener('click', handlerClose);
  messageError.addEventListener('click', handlerClose);
  document.body.append(messageError);
};

export const getData = (onSuccess) => {
  fetch(GET_URL)
    .then((response) => response.json().then((img) => onSuccess(img)))
    .catch(fetchDataErrorMessage);
};

const handlerMessagePressKey = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.querySelectorAll('.success, .error')
      .forEach((element) =>
        element.remove());
  }
};

const showErrorMessage = () => {
  const messageError = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  const button = messageError.querySelector('.error__button');
  document.addEventListener('keydown', handlerMessagePressKey);
  const handlerClose = () => {
    messageError.remove();
    document.removeEventListener('keydown', handlerMessagePressKey);
    openForm();
  }
  button.addEventListener('click', handlerClose);
  messageError.addEventListener('click', handlerClose);
  document.body.append(messageError);
};

const showSuccessMessage = () => {
  const messageSuccess = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  const button = messageSuccess.querySelector('.success__button');
  document.addEventListener('keydown', handlerMessagePressKey);
  const handlerClose = () => {
    messageSuccess.remove();
    document.removeEventListener('keydown', handlerMessagePressKey);
  }
  button.addEventListener('click', handlerClose);
  messageSuccess.addEventListener('click', handlerClose);
  document.body.append(messageSuccess);
  resetForm();
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
        onFail();
      }
    })
    .catch(onFail)
    .finally(() => closeForm());
};

export const handlerSubmit = (evt) => {
  const body = new FormData(evt.target);
  evt.preventDefault();
  sendData(showSuccessMessage, showErrorMessage, body);
};
