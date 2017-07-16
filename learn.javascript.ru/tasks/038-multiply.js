"use strict";

/*
  Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2.
  Например:
    // До вызова
    var menu = {
      width: 200,
      height: 300,
      title: 'My menu',
    };

    multiplyNumeric (menu);

    // После вызова
    menu = {
      width: 400,
      height: 600,
      title: 'My menu',
    };

  P. S. Для проверки на число используйте функцию:
    function isNumeric (n) {
      return !isNaN (parseFloat (n)) && isFinite (n);
    };
*/

function isNumeric (n) {
  return !isNaN (parseFloat (n)) && isFinite (n);
};

function multiplyNumeric (obj) {
  for (var key in obj) if (isNumeric (obj [key])) obj [key] *= 2;
};

function showObject (obj) {
  var str = '';
  for (var key in obj) str += key + ': ' + obj [key] + '\n';
  alert (str);
};

var menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
showObject (menu);

multiplyNumeric (menu);
showObject (menu);

