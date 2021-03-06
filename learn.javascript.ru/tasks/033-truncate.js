"use strict";

/*
  Создайте функцию truncate (str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength - заменяет конец str на '...' так,
  чтобы её длина стала равна maxlength.

  Результатом функции должна быть (при необходимости) усечённая строка.
  Например:
    truncate ('Вот, что мне хотелось бы сказать на эту тему:', 20) = 'Вот, что мне хоте...'
    truncate ('Всем привет!', 20) = 'Всем привет!'
*/

function truncate (str, maxlength) {
  if (str.length < maxlength) {
    str = str;
  } else {
    str = str.slice (0, maxlength - 3) + '...';
  };
  return str
};

alert (truncate ('Вот, что мне хотелось бы сказать на эту тему:', 20));
alert (truncate ('Всем привет!', 20));

// Готовый вариант

function truncate1 (str, maxlength) {
  return (str.length > maxlength) ?
    str.slice (0, maxlength - 3) + '...' :
    str;
};

alert (truncate1 ('Вот, что мне хотелось бы сказать на эту тему:', 20));
alert (truncate1 ('Всем привет!', 20));
