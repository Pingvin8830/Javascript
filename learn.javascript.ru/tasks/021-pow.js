"use strict";

/*
  Напишите функцию pow (x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
    pow (3, 2) = 3 * 3 = 9
    pow (3, 3) = 3 * 3 * 3 = 27
    pow (1, 100) = 1 * 1 * ... * 1 = 1
*/

function pow (x, n) {
  var res = x;
  for (var i = 1; i < n; i++) {
    res *= x;
  };
  return res;
};

var
  x = +prompt ('Укажите число', 2),
  n = +prompt ('Укажите степень', 10);

alert (pow (x, n));

