"use strict";

/*
  Перепишите if..else с использованием нескольких операторов '?'.
  Для читаемости - оформляйте код в несколько строк.
    var message;
    if (login == 'Вася') {
      message = 'Привет';
    } else if (login == 'Директор') {
      message = 'Здравствуйте';
    } else if (login == '') {
      message = 'Нет логина';
    } else {
      message = '';
    };
*/

var
  login   = prompt ('Укажите логин', ''),
  message = '';

message = (login == 'Вася')     ? 'Привет'       :
          (login == 'Директор') ? 'Здравствуйте' :
          (login == '')         ? 'Нет логина'   :
          '';

alert (message);

