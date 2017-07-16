/*
  Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
    function checkAge (age) {
      if (age > 18) {
        return true;
      } else {
        return confirm ('Родители разрешили?');
      };
    };

  Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:
    1. Используя оператор '?'
    2. Используя оператор ||
*/

function checkAge (age) {
  if (age > 18) {
    return true;
  } else {
    return confirm ('Родители разрешили?');
  };
};

function checkAge1 (age) {
  return (age > 18) ? true: confirm ('Родители разрешили?');
};

function checkAge2 (age) {
  return (age > 18) || confirm ('Родители разрешили?');
};

var age = +prompt ('Укажите возраст', 21);

alert (checkAge (age));
alert (checkAge1 (age));
alert (checkAge2 (age));

