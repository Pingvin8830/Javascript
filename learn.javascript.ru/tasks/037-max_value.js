"use strict";

/*
  Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
  Если объект пустой, то пусть он выводит "Нет сотрудников"
  Например:
    var salaries = {
      'Вася': 100,
      'Петя': 300,
      'Даша': 250,
    };

    // ... Ваш код выведет "Петя"
*/

var salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250,
};

var
  maxSumma = 0,
  maxName  = 'Нет сотрудников';

for (var name in salaries) {
  if (salaries [name] > maxSumma) {
    maxSumma = salaries [name];
    maxName  = name;
  };
};

alert (maxName);

