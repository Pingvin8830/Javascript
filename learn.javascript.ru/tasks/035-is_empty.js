/*
  Создайте функцию isEmpty (obj), которая возвращает true, если в объекте нет свойств и false - если хоть одно свойсвто есть.
  Пример:
    var shedule = {};
    alert (isEmpty (shedule)); // true
    shedule ['8:30'] = 'Подъём';
    alert (isEmpty (shedule)); // false
*/

function isEmpty (obj) {
  for (key in obj) {
    return false;
  };

  return true;
};

var shedule = {};
alert (isEmpty (shedule)); // true
shedule ['8:30'] = 'Подъём';
alert (isEmpty (shedule)); // false

