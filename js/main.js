import { getMockData } from './data.js';
import './util.js';

getMockData();

// добавление обработчика клика onCLick
// открытие новой формы

const inputUpload = document.querySelector('#upload-file');

inputUpload.addEventListener('change', handlerTagEvent);

function handlerTagEvent(event) {
  /*   console.log(event); */
}

const uploadSubmitBtn = document.querySelector('#upload-submit');

// блок кнопки
const btnBlockSubmit = () => {
  uploadSubmitBtn.disabled = true;
  uploadSubmitBtn.textContent = 'post...';
};

// разблок кнопки
const btnUnblockSubmit = () => {
  uploadSubmitBtn.disabled = false;
  uploadSubmitBtn.textContent = 'posting...';
};

// закрытия окна об успешной отправке -- обработчик

//  функция успешной отправки (закрте окна)

//  функция успешной отправки (открытие окна)

// закртие окна с ошибкой

// откртие окна если будет ошибка

