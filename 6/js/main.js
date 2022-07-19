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

