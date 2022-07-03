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

// функции для создания массива

function getRandomElementArray(arr) {
  return arr[getRandomIntFromRange(0, arr.length - 1)];
}

export {getRandomIntFromRange, getRandomElementArray, isLineTooLong};

