"use strict";

/*
  Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.
  Сделайте два варианта условия: первый с использованием оператора НЕ !, второй - без этого оператора.
*/

var
  age = +prompt ('Укажите возраст', 18),
  min = 14,
  max = 90,
  isOutside = false;

if (!(age >= 14 && age <= 90)) {
  isOutside = true;
};

alert (isOutside);

isOutside = false;

if (age < 14 || age > 90) {
  isOutside = true;
};

alert (isOutside);

