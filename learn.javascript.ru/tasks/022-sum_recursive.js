/*
  Напишите функцию sumTo (n), которая для данного n вычисляет сумму чисел от 1 до n, напремер:
    sumTo (1) = 1
    sumTo (2) = 2 + 1 = 3
    sumTo (3) = 3 + 2 + 1 = 6
    sumTo (4) = 4 + 3 + 2 + 1 = 10
    ...
    sumTo (100) = 100 + 99 + 98 + ... + 2 + 1 = 5050

  Сделайте три варианта решения:
    1. С использованием цикла.
    2. Через рекурсию, т. к. sumTo (n) = n + sumTo (n - 1) для n > 1.
    3. С использованием формулы для суммы арифметической прогрессии.
*/

function sumTo1 (n) {
  var res = 0;
  for (var i = 1; i <= n; i++) {
    res += i
  };
  return res;
};

function sumTo2 (n) {
  if (n == 1) return 1;
  return n + sumTo2 (n - 1);
};

function sumTo3 (n) {
  return (n + 1) * n / 2;
};

alert (sumTo1 (100));
alert (sumTo2 (100));
alert (sumTo3 (100));

