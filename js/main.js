// "use strict" не нужно -- будут модули;

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

const MOCK_MESSAGE_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MOCK_NAME_LIST = [
  'Маша',
  'Петя',
  'Оля',
  'Коля',
  'Люда',
  'Валя',
  'Настя',
  'Тема',
  'Аня',
  'Ваня',
];

// Вспомогательные функции
// Функция, возвращающая случайное целое число из переданного диапазона включительно
// https://learn.javascript.ru/task/random-int-min-max

function getRandomIntFromRange(start, end) {
  let from = start;
  let to = end;

  if (end < start) {
    from = end;
    to = start;
  }

  if (from >= 0 || start <= end) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }
}

// Функция для проверки максимальной длины строки
// Будет использоваться для проверки длины введённого комментария, но должна быть универсальна

function isLineTooLong(line, length) {
  return line.length > length;
}
isLineTooLong('aaaaa', 140);


// функции для создания массива
function getRandomElementArray(arr) {
  return arr[getRandomIntFromRange(0, arr.length - 1)];
}

const mockData = [];

// цикл
for (let id = 0; id < COUNT_MOCKS; id = id + 1) {
  mockData.push({
    id: id,
    avatar: `img/avatar-${getRandomIntFromRange(1,6)}.svg`,
    description: getRandomElementArray(MOCK_DESCRIPTION_LIST),
    message: getRandomElementArray(MOCK_MESSAGE_LIST),
    name:  getRandomElementArray(MOCK_NAME_LIST),
  });
}

