"use strict"

/*
  Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
  Если объект пустой, то результат должен быть 0.
  Например:
    var salaries = {
      'Вася': 100,
      'Петя': 300,
      'Даша': 250
    };

    // Ваш код выведет 650
*/

var salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250,
};

var summa = 0;
for (var name in salaries) {
  summa += salaries [name];
};

alert (summa);

