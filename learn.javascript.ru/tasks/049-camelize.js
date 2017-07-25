"use strict";

/*
  Напишите функцию camelize (str), которая преобразует строки вида "my-short-string" в "myShortString".
  Т.е. дефисы удаляются, а все слова после них получают заглавную букву.

  Например:
    camelize ('background-color') == 'backgroundColor';
    camelize ('list-style-image') == 'listStyleImage';
    camelize ('-webkit-transition') == 'WebkitTransition';

  Такая функция полезна при работе с CSS.
  P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/

function camelize (str) {
  var
    i,
    arr = str.split ('-');
  for (i = 1; i < arr.length; i++) {
    arr [i] = arr [i].charAt (0).toUpperCase () + arr [i].slice (1);
  };
  return arr.join ('');
};

alert (camelize ('background-color'));
alert (camelize ('list-style-image'));
alert (camelize ('-webkit-transition'));

