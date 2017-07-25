"use strict";

/*
  На входе массив чисел, например arr = [1, -2, 3, 4, -9, 6].
  Задача - найти непрерывный подмассив arr, сумма элементов которого максимальна. Ваша функция должна возвращать только эту сумму.

  Например:
    getMaxSubSum ([-1, |2, 3|, -9])      = 5
    getMaxSubSum ([|2, -1, 2, 3|, -9])   = 6
    getMaxSubSum ([-1, 2, 3, -9, |11|])  = 11
    getMaxSubSum ([-2, -1, |1, 2|])      = 3
    getMaxSubSum ([|100|, -9, 2, -3, 5]) = 100
    getMaxSubSum ([|1, 2, 3|])           = 6

  Если все элементы отрицательные, то не берём ни одного элемента и считаем сумму равной нулю:
    getMaxSubSum ([-1, -2, -3]) = 0
*/

function getMaxSubSum (arr) {
  var
    sum    = 0,
    maxSum = 0,
    i,
    j;
  for (i = 0; i < arr.length; i++) {
    sum = 0;
    for (j = i; j < arr.length; j++) {
      sum += arr [j];
      maxSum = Math.max (maxSum, sum);
    };
  };
  return maxSum;
};

function getMaxSubSum2 (arr) {
  var
    maxSum = 0,
    partialSum = 0,
    i;
  for (i = 0; i < arr.length; i++) {
    partialSum += arr [i];
    maxSum = Math.max (maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  };
  return maxSum;
};

alert (getMaxSubSum ([-1, 2, 3, -9]));      // = 5
alert (getMaxSubSum ([2, -1, 2, 3, -9]));   // = 6
alert (getMaxSubSum ([-1, 2, 3, -9, 11]));  // = 11
alert (getMaxSubSum ([-2, -1, 1, 2]));      // = 3
alert (getMaxSubSum ([100, -9, 2, -3, 5])); // = 100
alert (getMaxSubSum ([1, 2, 3]));           // = 6
alert (getMaxSubSum ([-1, -2, -3]));        // = 0

alert (getMaxSubSum2 ([-1, 2, 3, -9]));      // = 5
alert (getMaxSubSum2 ([2, -1, 2, 3, -9]));   // = 6
alert (getMaxSubSum2 ([-1, 2, 3, -9, 11]));  // = 11
alert (getMaxSubSum2 ([-2, -1, 1, 2]));      // = 3
alert (getMaxSubSum2 ([100, -9, 2, -3, 5])); // = 100
alert (getMaxSubSum2 ([1, 2, 3]));           // = 6
alert (getMaxSubSum2 ([-1, -2, -3]));        // = 0

