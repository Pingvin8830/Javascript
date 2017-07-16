/*
  Напишите функцию min (a, b), которая возвращает меньшее из чисел a, b.
  Пример:
    min (2, 5) == 2
    min (3, -1) == -1
    min (1, 1) == 1
*/

function min (a, b) {
  return (a < b) ? a : b;
};

alert (min (2, 5));
alert (min (3, -1));
alert (min (1, 1));

