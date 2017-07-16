/*
  Напишите функцию factorial (n), которая возвращает факториал числа n!, используя рекурсивный вызов.
*/

function factorial (n) {
  if (n == 1) return 1;
  return n * factorial (n - 1);
};

alert (factorial (1));
alert (factorial (2));
alert (factorial (3));
alert (factorial (4));
alert (factorial (5));

