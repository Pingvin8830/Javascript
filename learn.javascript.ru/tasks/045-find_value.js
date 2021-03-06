"use strict";

/*
  Создайте функцию find (arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено или -1, если не найдено.
  Например:
    var arr = ['test', 2, 1.5, false];

    find (arr, 'test'); // 0
    find (arr, 2);      // 1
    find (arr, 1.5);    // 2
    find (arr, 0);      // -1
*/

function find (arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr [i] === value) {
      return i;
    };
  };
  return -1;
};

var arr = ['test', 2, 1.5, false];

alert (find (arr, 'test')); // 0
alert (find (arr, 2)); // 1
alert (find (arr, 1.5)); // 2
alert (find (arr, 0)); // -1

