"use strict";

/*
  Перепишите if с использованием оператора '?':
    if (a + b < 4) {
      result = 'Мало';
    } else {
      result = 'Много'
    };
*/

var
  a = +prompt ('Укажите первое число', 0),
  b = +prompt ('Укажите второе число', 0),
  result = '';

result = (a + b < 4) ? 'Мало' : 'Много';

alert (result);

