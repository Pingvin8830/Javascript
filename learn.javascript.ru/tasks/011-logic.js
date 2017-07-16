/*
  Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.
*/

var
  age = +prompt ('Укажите возраст', 18),
  min = 14,
  max = 90,
  isInside = false;

if (age >= 14 && age <= 90) {
  isInside = true;
};

alert (isInside);

