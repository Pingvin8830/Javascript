/*
  Напишите функцию ucFirst (str), которая возвращает строку str с заглавным первым символом, например:
    ucFirst ('вася') == 'Вася';
    ucFirst ('') == '' // нет ошибок при пустой строке

  P. S. В JavaScript нет встроенного метода для этого. Создайте функцию, использую toUpperCase () и charAt ().
*/

function ucFirst (str) {
  return str.charAt (0).toUpperCase () + str.slice (1);
};

alert (ucFirst ('вася'));
alert (ucFirst (''));
