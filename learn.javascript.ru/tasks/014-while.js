"use strict";

/*
  Перепишите код, заменив цикл for на while, без изменения поведения цикла.
    for (var i = 0; i < 3; i++) {
      alert ('Номер ' + i + '!');
    };
*/

for (var i = 0; i < 3; i++) {
  alert ('Номер ' + i + '!');
};
alert (i);

i = 0;
while (i < 3) {
  alert ('Номер ' + i++ + '!');
};
alert (i);

