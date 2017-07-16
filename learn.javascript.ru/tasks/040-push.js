"use strict";

/*
  У нас есть массив goods. Напишите код для добавления в его конец значения "Компьютер"
*/

var goods = ['Яблоко', 'Апельсин', 'Слива'];
alert (goods);
goods.push ('Компьютер');
alert (goods);
alert (goods.length);
goods [goods.length] = 'test';
alert (goods);
alert (goods.length);

