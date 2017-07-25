"use strict";

/*
  У объекта есть свойство className, которое хранит список "классов" - слов, разделённых пробелами:
    var obj = {
      className: 'open menu',
    };

  Напишите функцию removeClass (obj, cls), которая удаляет класс cls, если он есть:
    removeClass (obj, 'open'); // obj.className = 'menu'
    removeClass (obj, 'blabla'); // без изменений (нет такого класса)

  P.S. Дополнительное усложнение: функция должна корректно обрабатывать дублирование класса в строке:
    obj = {
      className: 'my menu menu',
    };
    removeClass (obj, 'menu'); // 'my'

  Лишних пробелов после функции образовываться не должно.
*/

var obj = {
  className: 'open menu my menu',
};

function removeClass (obj, cls) {
  var
    i,
    classes = obj.className.split (' ');
  for (i = 0; i < classes.length; i++) {
    if (classes [i] == cls) {
      classes.splice (i, 1);
      i--;
    };
  };
  obj.className = classes.join (' ');
};

alert (obj.className);                              // 'open menu my menu'
removeClass (obj, 'open'); alert (obj.className);   // 'menu my menu'
removeClass (obj, 'blabla'); alert (obj.className); // 'menu my menu'
removeClass (obj, 'menu'); alert (obj.className);   // 'my'

