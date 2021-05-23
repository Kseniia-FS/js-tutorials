/*#1.
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен 
понимать плюс + и минус -.
Пример использования:
let calc = new Calculator();
alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), 
которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.*/

// class Calculator {
//   //   constructor() {
//   //     this.a = 27;
//   //     this.b = "fff";
//   //   }
//   calculate(str) {
//     const [a, operator, b] = str.split(" ");

//     switch (operator) {
//       case "+":
//         return Number(a) + Number(b);

//       case "-":
//         return Number(a) - Number(b);

//       default:
//         if (!this.instructions) {
//           return;
//         }
//         const usageFunc = this.instructions[operator];
//         return usageFunc(Number(a), Number(b));
//     }
//   }

//   addMethod(operatorName, funcOperation) {
//     if (!this.instructions) {
//       this.instructions = {};
//     }
//     this.instructions[operatorName] = funcOperation;
//   }
// }

// const calc = new Calculator();
// // console.log(calc.calculate("1 + 2"));
// // console.log(calc.calculate("10 - 2"));
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// // console.log(powerCalc);
// // console.log(powerCalc.calculate("10 * 2"));
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// console.log(powerCalc);
// console.log(powerCalc.calculate("3 / 2"));
// console.log(powerCalc.calculate("2 ** 10"));

/*#2.
Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), 
который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество 
отработанных дней days.
Вот так должен работать наш класс:
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
====
Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, 
а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.getRate); //выведет 10
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 310 - то есть 10*31
====
Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days 
сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
var worker = new Worker('Иван', 'Иванов', 10, 31);
worker.getRate; //выведет 10
worker.getDays; //выведет 31
worker.getSalary; //выведет 310 - то есть 10*31
//Теперь используем сеттер:
worker.setRate = 20; //увеличим ставку
worker.setDays = 10; //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10*/

// class Worker {
//   #name;
//   #surname;
//   #rate;
//   #days;
//   constructor({ name, surname, rate, days }) {
//     this.#name = name;
//     this.#surname = surname;
//     this.#rate = rate;
//     this.#days = days;
//   }
//   get getSalary() {
//     return this.#rate * this.#days;
//   }

//   get getName() {
//     return this.#name;
//   }

//   get getSurname() {
//     return this.#surname;
//   }

//   get getRate() {
//     return this.#rate;
//   }

//   set setRate(newRate) {
//     this.#rate = newRate;
//   }

//   get getDays() {
//     return this.#days;
//   }

//   set setDays(newDays) {
//     this.#days = newDays;
//   }
// }

// let worker = new Worker({
//   name: "Иван",
//   surname: "Иванов",
//   rate: 10,
//   days: 31,
// });
// // console.log(worker.name); //выведет 'Иван'
// // console.log(worker.surname); //выведет 'Иванов'
// // console.log(worker.rate); //выведет 10
// // console.log(worker.days); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getSalary); //выведет 310 - то есть 10*31

// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10; //уменьшим дни

// console.log(worker.getSalary); //выведет 200 - то есть 20*10*/

/*#4.
Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром 
принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, 
если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, 
метод isDate для проверки даты и метод isPhone для проверки телефона:
var validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны*/

// class Validator {
//   //   isEmail(email) {
//   //     if (!email.includes("@")) return false;
//   //     const emailSplit = email.split("@");
//   //     if (emailSplit.length > 2) return false;

//   //     const [userName, domain] = emailSplit;

//   //     if (!userName.length || !domain.length) return false;
//   //     if (!domain.includes(".")) return false;

//   //     // console.log(emailSplit);
//   //   }

//   isEmailReg(email) {
//     const regExp = /\b[\w]+@[\w]+\.[a-z0-9\.]+[a-z]/;
//     return regExp.test(email);
//   }
// }

// var validator = new Validator();
// console.log(validator.isEmailReg("phphtml@mailru"));
// console.log(validator.isEmailReg("phphtml@mail.com.com.com"));
//? Задачи от Андре
/*#3.
//?Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром 
//?принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, 
//?а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает 
//?заглавной первую букву каждого слова этой строки.
//?Наш класс должен работать так:
var str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'*/

class MyString {
  reverse(str) {
    return str.split("").reverse().join("");
  }
  ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  ucWords(str) {
    return str
      .split(" ")
      .map((el) => el[0].toUpperCase() + el.slice(1))
      .join(" ");
  }
}

// var str = new MyString();
// console.log(str.reverse("abcde")); //выведет 'edcba'
// console.log(str.ucFirst("abcde")); //выведет 'Abcde'
// console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'*/

/*#5.
//?Напишите функцию-конструктор Accumulator(startingValue).
//?Объект, который она создаёт, должен уметь следующее:
//?Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора 
//?startingValue.
//?Метод read() использует prompt для получения числа и прибавляет его к свойству value.
//?Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), 
//?с учётом начального значения startingValue.
//?Ниже вы можете посмотреть работу кода:
//let accumulator = new Accumulator(1); // начальное значение 1
//accumulator.read(); // прибавит ввод prompt к текущему значению
//accumulator.read(); // прибавит ввод prompt к текущему значению
//alert(accumulator.value); // выведет сумму этих значений*/

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.value += Number(prompt("Add number"));
//   };
// }

class Accumulator {
  constructor(startingValue) {
    this.value = startingValue;
  }

  read() {
    this.value += Number(prompt("Add number"));
  }
}

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений*/
//!---------------------------------------------------------------------------------------------------
//*Repeat a given string str(first argument) for num times(second argument).
//*Return an empty string if num is not a positive number.For the purpose of this
//*challenge, do not use the built -in .repeat() method.

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

// console.log(repeatStringNumTimes("abc", 3));
// console.log(repeatStringNumTimes("*", 8));

//*Truncate a string(first argument) if it is longer than the given maximum string length
//*(second argument).Return the truncated string with a ...ending.

function truncateString(str, num) {
  return num < str.length ? str.split("").slice(0, num).join("") + "..." : str;
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length
//   )
// );

//*Create a function that looks through an array arr and returns the first
//*element in it that passes a 'truth test'.This means that given an element x,
//*the 'truth test' is passed if func(x) is true.If no element passes the test,
//*return undefined.

function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

function findElement(arr, func) {
  return arr.find(func);
}
// console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
// console.log(
//   findElement([1, 3, 5, 9], function (num) {
//     return num % 2 === 0;
//   })
// );

//*Check if a value is classified as a boolean primitive. Return true or false.
//*Boolean primitives are true and false.

function booWho(bool) {
  return typeof bool === "boolean";
}

// console.log(booWho(true));
// console.log(booWho([1, 2, 3]));
// console.log(booWho(false));
// console.log(booWho("false"));

//*Return the provided string with the first letter of each word capitalized.
//*Make sure the rest of the word is in lower case.
//*For the purpose of this exercise, you should also capitalize
//*connecting words like the and of.

function titleCase(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
    .join(" ");
}

// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));

//*You are given two arrays and an index.
//*Copy each element of the first array into the second array, in order.
//*Begin inserting elements at index n of the second array.
//*Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  const newArray = arr2.slice();

  newArray.splice(n, 0, ...arr1);
  return newArray;
}
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

//*Remove all falsy values from an array.
//*Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//*Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  return arr.filter((element) => !!element);
}
// console.log(bouncer([7, "ate", "", false, 9]));

//*Return the lowest index at which a value(second argument) should be inserted into an array
//*(first argument) once it has been sorted.The returned value should be a number.

//*For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater
//*than 1(index 0), but less than 2(index 1).

//*Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has
//*been sorted it will look like[3, 5, 20] and 19 is less than 20(index 2) and greater than 5(index 1).

function getIndexToIns(arr, num) {
  let index = arr.sort((a, b) => a - b).findIndex((el) => num <= el);
  return index === -1 ? arr.length : index;
}

// console.log(getIndexToIns([40, 60], 50));
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// console.log(getIndexToIns([2, 5, 10], 15));

//*Return true if the string in the first element of the array contains all of
//*the letters of the string in the second element of the array.
//*For example, ["hello", "Hello"], should return true because all of the letters
//*in the second string are present in the first, ignoring case.
//*The arguments["hello", "hey"] should return false because the string hello does not
//*contain a y.
//*Lastly, ["Alien", "line"], should return true because all of the letters in line are
//*present in Alien.

function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["Mary", "Army"]));

//*Write a function that splits an array(first argument) into groups the length of
//*size(second argument) and returns them as a two - dimensional array.

function chunkArrayInGroups(arr, size) {
  let firstArr = [];
  while (arr.length > 0) {
    firstArr.push(arr.splice(0, size));
  }

  return firstArr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
