import {getRandomIntFromRange, getRandomElementArray} from './util.js';
import {renderBigPhoto} from './big-picture.js';

const COUNT_MOCKS = 25;

const MOCK_DESCRIPTION_LIST = [
  'Классно',
  'ОК',
  'Круто как в цирке',
  'Радостно',
  'Жги',
  'Вот это да',
  'Вот это нет',
  'Покажи что-нибудь забавное',
  'Ура лайк',
  'Мурки круть',
  'Кажется удалось',
];

export const MOCK_MESSAGE_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

export const MOCK_NAME_LIST = [
  'Маша',
  'Петя',
  'Оля',
  'Коля',
  'Люда',
  'Валя',
  'Настя',
  'Тема',
  'Аня',
  'Миша',
];

export function getMockData() {
  const _mockData = [];

  for (let id = 0; id < COUNT_MOCKS; id = id + 1) {
    _mockData.push({
      id: id,
      avatar: `img/avatar-${getRandomIntFromRange(1,6)}.svg`,
      description: getRandomElementArray(MOCK_DESCRIPTION_LIST),
      message: getRandomElementArray(MOCK_MESSAGE_LIST),
      name:  getRandomElementArray(MOCK_NAME_LIST),
      likes: getRandomIntFromRange(1,1000),
      comments: getRandomIntFromRange(1,10),
    });
  }
  return _mockData;
}

const mockData = getMockData();

const pictureTemplate = document.querySelector('#picture').content;

const fragment = document.createDocumentFragment();

for (let i = 0; i < COUNT_MOCKS; i++) {
  const element = pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src=`${mockData[i].avatar}`;
  element.querySelector('.picture__likes').textContent=`${mockData[i].likes}`;
  element.querySelector('.picture__comments').textContent=`${mockData[i].comments}`;
  element.querySelector('.picture').addEventListener('click', () => renderBigPhoto({ url:mockData[i].avatar, like:mockData[i].likes, comments:mockData[i].comments, description:mockData[i].description }));
  fragment.appendChild(element);
}

document.querySelector('.pictures').appendChild(fragment);
