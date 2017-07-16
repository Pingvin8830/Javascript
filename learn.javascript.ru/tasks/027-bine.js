/*
  Напишите функцию fibBinet (n), которая будет вычислять число Фибоначчи, используя формулу Бине.
*/

function fibBinet (n) {
  var phi = (1);
  return Math.round (Math.pow ((1 + Math.sqrt (5)) / 2, n) / Math.sqrt (5));
};

alert (fibBinet (3));
alert (fibBinet (7));
alert (fibBinet (77));

