function first() {
  //Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
  let age = prompt("Введите свой возраст");
  age = Math.floor(age);
  if (Number(age) > 0 && Number(age) < 12) {
    alert("Ути пути ребенок");
  } else if (Number(age) >= 12 && Number(age) < 18) {
    alert("Неплохо подросток, но пива тебе все еще нельзя");
  } else if (Number(age) >= 18 && Number(age) < 60) {
    alert("Уже взрослый человек, вставай на работу пора!");
  } else if (Number(age) >= 60) {
    alert("Вот и пенсия, пора нянчить внуков");
  } else {
    alert("Это невозможно");
  }
}
function second() {
  //Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д)
  let ans = prompt("введите число от 0 до 9");
  switch (Number(ans)) {
    case 0:
      alert(")");
      break;
    case 1:
      alert("!");
      break;
    case 2:
      alert("@");
      break;
    case 3:
      alert("#");
      break;
    case 4:
      alert("$");
      break;
    case 5:
      alert("%");
      break;
    case 6:
      alert("^");
      break;
    case 7:
      alert("&");
      break;
    case 8:
      alert("*");
      break;
    case 9:
      alert("(");
      break;
    default:
      alert("Ошибочка вышла");
      break;
  }
}
function third() {
  //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
  let ans = prompt("Введите трехзначное число");
  num = Number(ans);
  tens = (num % 100) / 10;
  hundreds = (num % 1000) / 100;
  nums = num % 10;
  if (num >= 100 && num <= 999) {
    if (
      Math.floor(hundreds) == nums ||
      Math.floor(hundreds) == Math.floor(tens) ||
      Math.floor(tens) == nums
    ) {
      alert("Тут есть одинаковые цифры");
    } else {
      alert("Тут нет одинаковых цифр");
    }
  } else {
    alert("Ошибочка вышла");
  }
}
function fourth() {
  //Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
  let ans = prompt("Введите год");
  year = Number(ans);
  if (!isNaN(year)) {
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      alert("Это высокосный год");
    } else {
      alert("Это НЕ высокосный год");
    }
  } else {
    alert("Ошибка");
  }
}
function fivth() {
  //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом

  let ans = prompt("Введите пятиразрядное число");
  num = Number(ans);
  if (num != NaN && num >= 10000 && num <= 99999) {
    tens = Math.floor((num % 100) / 10);
    hundreds = Math.floor((num % 1000) / 100);
    nums = Math.floor(num % 10);
    thousands = Math.floor((num % 10000) / 1000);
    ten_thousands = Math.floor((num % 100000) / 10000);

    if (ten_thousands == nums && thousands == tens) {
      alert("АГА! Это палиндром");
    } else {
      alert("НЕТ");
    }
  } else {
    alert("Введено неправильное число");
  }
}
function sixth() {
  //Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

  let ans = prompt(
    "В какую валюту вы хотите перевести USD? 1 - EUR, 2 - UAН, 3 - AZN"
  );
  if (ans === "1" || ans === "2" || ans === "3") {
    let sum = prompt("Какую сумму вы хотите перевести");
    if (ans == 1) {
      sum = sum * 0.83;
    } else if (ans == 2) {
      sum = sum * 27.04;
    } else {
      sum = sum * 1.7;
    }
    alert(`Это будет ${sum}`);
  } else {
    alert("Вы ввели неправильно");
  }
}
function seventh() {
  //Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
  let ans = prompt("Введите сумму покупки");
  if (isNaN(ans) || Number(ans) <= 0) {
    alert("Вы ввели неправильно");
  } else {
    if (Number(ans) < 200) {
      alert(`При покупке меньше 200 скидки не будет, с вас ${ans}`);
    } else if (Number(ans) >= 200 && Number(ans) < 300) {
      ans = ans * 0.97;
      alert(`Со скидкой это будет ${ans}`);
    } else if (Number(ans) >= 300 && Number(ans) < 500) {
      ans = ans * 0.95;
      alert(`Со скидкой это будет ${ans}`);
    } else if (Number(ans) >= 500) {
      ans = ans * 0.93;
      alert(`Со скидкой это будет ${ans}`);
    }
  }
}
function eigth() {
  //Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
  let square_per = prompt("Введите периметр квадрата");
  let circle_length = prompt("Введите длину окружности");
  if (isNaN(square_per) || isNaN(circle_length)) {
    alert("Вы ввели неправильно");
  } else {
    circle_length = Math.abs(circle_length);
    square_per = Math.abs(square_per);
    if (circle_length / (2 * Math.PI) <= square_per / 8) {
      alert(
        `Да, окружность с длиной ${circle_length} поместится в квадрат с периметром ${square_per}`
      );
    } else {
      alert(
        `НЕТ, окружность с длиной ${circle_length} НЕ поместится в квадрат с периметром ${square_per}`
      );
    }
  }
}
function nineth() {
  //Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
  function answer_check(a) {
    if (a == 1 || a == 2 || a == 3) {
      return a;
    } else {
      alert("Вы ввели неправильно");
    }
  }
  let result = 0;
  let ans_1 =
    prompt(`Вопрос 1. С какой командой Михаэль Шумахер выиграл свой первый титул чемпиона мира среди пилотов в классе Формула 1?
  1- Ferrari
  2- Benneton
  3- Williams
  `);
  ans_1 = answer_check(ans_1);
  if (ans_1 == 2) {
    result = result + 2;
  }
  let ans_2 =
    prompt(`Вопрос 2. Кто стал чемпионом мира среди пилотов в классе Формула 1 в 1997 году?
  1- Дэймон Хилл
  2- Михаэль ШУмахер
  3- Жан Алези`);
  ans_2 = answer_check(ans_2);

  if (ans_2 == 1) {
    result = result + 2;
  }
  let ans_3 =
    prompt(`Вопрос 3. Кто стал последним (на 2021 год) для Феррари чемпионом мира среди пилотов в классе Формула 1?
  1- Кими Райконен
  2- Михаэль Шумахер
  3- Фернандо Алонсо`);
  ans_3 = answer_check(ans_3);

  if (ans_3 == 1) {
    result = result + 2;
  }
  if (result == 6) {
    alert(`Отлично, вы набрали ${result} баллов`);
  } else {
    alert(`Вы набрали ${result} баллов`);
  }
}
function tenth() {
  //Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
  let day = prompt("Введите дату. День:");
  let mounth = prompt("Введите месяц:");
  let year = prompt("Введите год:");
  function year_check(year) {
    if (!isNaN(year)) {
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return true;
      } else {
        return false;
      }
    } else {
      alert("Ошибка");
    }
  }
  if (year_check(year)) {
    if (mounth == 2 && day <= 28) {
      day++;
    } else if (mounth == 2 && day == 29) {
      day = 1;
      mounth++;
    } else if (
      (mounth == 1 ||
        mounth == 3 ||
        mounth == 5 ||
        mounth == 7 ||
        mounth == 8 ||
        mounth == 10 ||
        mounth == 12) &&
      day <= 30
    ) {
      day++;
    } else if (
      (mounth == 1 ||
        mounth == 3 ||
        mounth == 5 ||
        mounth == 7 ||
        mounth == 8 ||
        mounth == 10) &&
      day == 31
    ) {
      day = 1;
      mounth++;
    } else if (mounth == 12 && day == 31) {
      day = 1;
      mounth = 1;
      year++;
    } else if (
      (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11) &&
      day <= 29
    ) {
      day++;
    } else if (
      (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11) &&
      day == 30
    ) {
      day = 1;
      mounth++;
    }
  } else {
    if (mounth == 2 && day <= 27) {
      day++;
    } else if (mounth == 2 && day == 28) {
      day = 1;
      mounth++;
    } else if (
      (mounth == 1 ||
        mounth == 3 ||
        mounth == 5 ||
        mounth == 7 ||
        mounth == 8 ||
        mounth == 10 ||
        mounth == 12) &&
      day <= 30
    ) {
      day++;
    } else if (
      (mounth == 1 ||
        mounth == 3 ||
        mounth == 5 ||
        mounth == 7 ||
        mounth == 8 ||
        mounth == 10) &&
      day == 31
    ) {
      day = 1;
      mounth++;
    } else if (mounth == 12 && day == 31) {
      day = 1;
      mounth = 1;
      year++;
    } else if (
      (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11) &&
      day <= 29
    ) {
      day++;
    } else if (
      (mounth == 4 || mounth == 6 || mounth == 9 || mounth == 11) &&
      day == 30
    ) {
      day = 1;
      mounth++;
    }
  }
  alert(`Следующий день: ${day}, ${mounth}, ${year}`);
}
