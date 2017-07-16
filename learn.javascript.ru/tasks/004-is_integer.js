/*
  Напишите функцию, которая возвращает true, если num - целое число, иначе - false.
  Например:
    alert (isInteger (1)); // true
    alert (isInteger (1.5)); // false
    alert (isInteger (-0.5)); // false
*/

alert (isInteger (1)); // true
alert (isInteger (1.5)); // false
alert (isInteger (-0.5)); // false

function isInteger (count) {
  return (count ^ 0) === count;
};

