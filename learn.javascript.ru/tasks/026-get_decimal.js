/*
  Напишите функцию getDecimal (num), которая возвращает десятичную часть числа:
    alert (getDecimal (12.345)); // 0.345
    alert (getDecimal (1.2)); // 0.2
    alert (getDecimal (-1.2)); // 0.2

  P. S. Постарайтесь не использовать toFixed
*/

function getDecimal (num) {
  num += '';
  return +(num.slice (num.indexOf ('.')));
};

alert (getDecimal (12.345)); // 0.345
alert (getDecimal (1.2)); // 0.2
alert (getDecimal (-1.2)); // 0.2

