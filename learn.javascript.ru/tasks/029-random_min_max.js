"use strict";

/*
  Напишите код для генерации случайного числа от min до max, не включая max.
*/

function random (min, max) {
  return Math.random () * (max - min) + min;
};

alert (random (5, 7));

