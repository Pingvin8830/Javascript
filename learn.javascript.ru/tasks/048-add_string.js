"use strict";

/*
  В объекте есть свойство clasName, которое содержит список "классов" - слов, разделённых пробелом:
    var obj = {
      className: 'open menu',
    };

  Создайте функцию addClass (obj, cls), которая добавляет в список класс cls, но только если его там ещё нет:
    addClass (obj, 'new');  // obj.className = 'open menu new'
    addClass (obj, 'open'); // без изменений (класс уже существует)
    addClass (obj, 'me');   // obj.className = 'open menu new me'

    alert (obj.className); // 'open menu new me'

  P.S. Ваша функция не должна добавлять лишних пробелов
*/

function addClass (obj, cls) {
  var
    i,
    classes = obj.className ? obj.className.split (' '): [];

  for (i = 0; i < classes.length; i++) {
    if (classes [i] == cls) return // класс уже есть
  };

  classes.push (cls); // добавить

  obj.className = classes.join (' '); // и обновить свойство
};

var obj = {
  className: 'open menu',
};

addClass (obj, 'new');
addClass (obj, 'open');
addClass (obj, 'me');

alert (obj.className);

