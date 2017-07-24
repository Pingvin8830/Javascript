"use strict";

/*
  Создайте функцию filterRange (arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из 
  диапазона от a до b. Т. е. проверка имеет вид a <= arr [i] <= b. Функция не должна менять arr.

  Пример:
    var arr = [5, 4, 3, 8, 0];

    var filtered = filterRange (arr, 3, 5);
    // Теперь filtered = [5, 4, 3]
    // arr не изменился
*/

function filterRange (arr, a, b) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    if (a <= arr [i] && arr [i] <= b) {
      res.push (arr [i]);
    };
  };

  return res;
};

var arr = [5, 4, 3, 8, 0];
var filtered = filterRange (arr, 3, 5);

alert (arr);
alert (filtered);

