"use strict";

/*
  Напишите функцию checkSpam (str), которая возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе - false.
  Функция должна быть нечувствительна к регистру:
    checkSpam ('buy ViAgRA now') == true
    checkSpam ('free xxxxx') == true
    checkSpam ('iinocent rabbit') == false
*/

function checkSpam (str) {
  str = str.toLowerCase ();

  if (
    ~str.indexOf ('viagra') ||
    ~str.indexOf ('xxx')
  ) {
    return true;
  };

  return false;
};

alert (checkSpam ('buy ViAgRA now')); //  == true
alert (checkSpam ('free xxxxx')); // == true
alert (checkSpam ('iinocent rabbit')); // == false

// Готовое решение
function checkSpam1 (str) {
  var lowerStr = str.toLowerCase ();

  return !!(~lowerStr.indexOf ('viagra') || ~lowerStr.indexOf ('xxx'));
};

alert (checkSpam1 ('buy ViAgRA now')); //  == true
alert (checkSpam1 ('free xxxxx')); // == true
alert (checkSpam1 ('iinocent rabbit')); // == false

