// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//     return "В заказе еще нет товаров";
//   } else if (ordered > available) {
//     return "Слишком большой заказ, на складе недостаточно товаров!";
//   }
//   return "Заказ оформлен, с вами свяжется менеджер";

//   // Пиши код выше этой строки
// }

// console.log(checkStorage(200, 20));

// const fruits = ["яблоко", "слива", "груша", "апельсин"];

// const fruits = ["яблоко", "слива", "груша", "апельсин"];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[2];

// const fruits = ["яблоко", "персик", "груша", "банан"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[3];

// console.log(lastElement);

// function getExtremeElements(array) {
//   // Пиши код ниже этой строки
//   const firstElement = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];
//   const elements = [firstElement, lastElement];

//   return elements;

//   // Пиши код выше этой строки
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//   if (delimeter === " ") {
//     return message.split(" ");
//   } else if (delimeter === "") {
//     return message.split("");
//   } else if (delimeter === "_") {
//     return message.split("_");
//   } else {
//     return message.split(" ");
//   }
// 		words = message.split();
//   switch (delimeter) {
//     case "_":
//       words = message.split("_");
//       break;
//     case "":
//       words = message.split("");
//       break;
//     case " ":
//       words = message.split(" ");
//       break;
//     default:
//       words = message.split();
//   }
//   words = message.split(delimeter);

//   // Пиши код выше этой строки
//   return words;
// }

// console.log(splitMessage("Манго спешит на поезд", " "));
// console.log(splitMessage("Манго", ""));
// console.log(splitMessage("лучшее_за_неделю", "_"));
// console.log(splitMessage("я хочу домой"));

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   let word;
//   word = message.split(" ");
//   console.log(word);
//   let wordLength;
//   wordLength = word.length;
//   console.log(wordLength);
//   let totalPrice;
//   totalPrice = wordLength * pricePerWord;
//   console.log(totalPrice);
//   // Пиши код выше этой строки
// }

// console.log(calculateEngravingPrice("JavaScript у меня в крови", 10));

// function slugify(title) {
//   // Пиши код ниже этой строки
//   let word;
//   word = title.split(" ");
//   word = word.join("-");
//   word = word.toLowerCase();

//   console.log(word);

//   // Пиши код выше этой строки
//   return word;
// }
// console.log(slugify("Массивы для новичков"));
// console.log();

// const fruits = ["яблоко", "слива", "груша", "апельсин", "банан"];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray;
//   newArray = firstArray.concat(secondArray);
//   console.log(newArray);

//   let newArrayLength;
//   newArrayLength = newArray.length;
//   console.log(newArrayLength);

//   let message;
//   if (newArrayLength >= maxLength) {
//     message = newArray.slice(0, maxLength);
//   } else {
//     message = newArray.slice();
//   }
//   return message;
// }

// console.log(makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 0));
//18
// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   const start = 0;
//   let total = 0;
//   for (i = start; i <= number; i += 1) {
//     console.log(i);

//     total += i;
//   }
//   console.log(total);
// }
// console.log(calculateTotal(18));

// const fruits = ["яблоко", "слива", "груша", "апельсин"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;

//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1) {
//     const orders = order[i];
//     console.log(orders);
//     total += orders;
//   }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   let maxLength;
//   maxLength = "";
//   let word;

//   const stringSplit = string.split(" ");
//   console.log(stringSplit);

//   for (i = 0; i < stringSplit.length; i += 1) {
//     word = stringSplit[i];
//     console.log(word);

//     if (word.length > maxLength.length) {
//       maxLength = word;
//     }
//   }

//   return maxLength;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// МОДУЛЬ 2
//9

/*22*/
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
//23

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const arr = [];
//   for (let i = 0; i <= numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] > value) {
//       arr.push(numbers[i]);
//     }
//   }
//   return arr;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//24

// function checkFruit(fruit) {
//   const fruits = ["яблоко", "слива", "груша", "апельсин"];

//   return fruits.includes(fruit); // Дополни эту строку
// }
// console.log(checkFruit("слива"));
//25
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки

//   const arr1 = [];
//   //   const arr2 = [];

//   for (let i = 0; i <= array1.length - 1; i += 1) {
//     console.log(array1[i]);
//     if (array2.includes(array1[i])) {
//       arr1.push(array1[i]);
//     }
//     console.log(arr1);
//   }
//   return arr1;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
//29

// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const number = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       number.push(i);
//     }
//   }
//   return number;
//   // Пиши код выше этой строки
// }
// console.log(getEvenNumbers(2, 5));
//32
// function includes(array, value) {
//   // Пиши код ниже этой строки

//   for (let i = 0; i <= array.length - 1; i += 1) {
//     console.log(array[i]);

//     if (array[i] === value) {
//       return true;
//     }
//   }

//   return false;
//   // Пиши код выше этой строки
// }
// console.log(includes([1, 2, 3, 4, 5], 60));
// console.log(includes(["Земля", "Марс", "Венера", "Юпитер", "Сатурн"], "Уран"));

//ЗАНЯТИЕ С РЕПЕТОЙ

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// const friends = ["Mango", "Poly", "Kiwi"];
// const string = friends.join(", ");

// console.log(string);

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";
// console.log(letters);

// for (const letter of letters) {
//   //   if (letter === letter.toLowerCase()) {
//   //     invertedString += letter.toUpperCase();
//   //   } else {
//   //     invertedString += letter.toLowerCase();
//   //   }
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log(invertedString);

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Генри",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Пиши код ниже этой строки

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Генри Сибола";
// apartment.tags = apartment.tags.push("trusted");
// apartment.area = 60;
// apartment.rooms = 3;

// apartment.location: {
// 	country: "Ямайка";
// 	city: "Кингстон";
// }
// console.log(apartment);

//МОДУЛЬ 3
//11
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   console.log(key);

//   keys.push(key);
//   console.log(keys);
//   values.push(apartment[key]);
//   console.log(values);
// }

//12
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   const keys = [];
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       keys.push(key);

//       propCount = keys.length;
//     }
//   }

//   // Пиши код выше этой строки
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));
//13
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки

// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   values.push(apartment[key]);
//   console.log(values);
// }

//14

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   const keys = Object.keys(object);
//   console.log(keys);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }

// console.log(countProps({ name: "Mango", age: 2 }));
//16
//

//17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
// 	console.log(color);

//   hexColors.push(color.hex);
//   //   console.log(hexColors);

//   rgbColors.push(color.rgb);
//   //   console.log(rgbColors);
// }

//18
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const mass of products) {
//     console.log(mass);

//     // const key = Object.keys(mass);
//     // console.log(key);

//     if (mass.name === productName) {
//       return mass.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Захват"));
//19
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const key = [];
//   for (const mass of products) {
//     if (propName === "name") {
//       key.push(mass.name);
//     } else if (propName === "price") {
//       key.push(mass.price);
//     } else if (propName === "quantity") {
//       key.push(mass.quantity);
//     } else {
//       console.log([]);
//     }
//   }
//   return key;
//   // Пиши код выше этой строки
// }

// console.log(getAllPropValues("name"));
//20
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let total = 0;

//   for (const key of products) {
//     let price = key.price;
//     let quantity = key.quantity;

//     if (productName === key.name) {
//       total = price * quantity;
//     }

//     // Пиши код выше этой строки
//   }
//   return total;
// }
// console.log(calculateTotalPrice("Радар"));
//25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;
//26
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { high: todayHigh, low: todayLow },
//     tomorrow: { high: tomorrowHigh, low: tomorrowLow },
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );
//27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
//28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
//30
// function makeTask(data) {
//   const completed = false;
//   const category = "Общее";
//   const priority = "Обычный";
//   // Пиши код ниже этой строки
//   const newData = { completed, category, priority, ...data };
//   return newData;
//   // Пиши код выше этой строки
// }

// console.log(
//   makeTask({ category: "Домашнее", priority: "Низкий", text: "Вынести мусор" })
// );
//31
// Пиши код ниже этой строки
// function add(...args) {
//   let total = 0;

//   for (const i of args) {
//     total += i;
//   }
//   return total;
//   // Пиши код выше этой строки
// }
// console.log(add(15, 27));
//32
// Пиши код ниже этой строки
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
//   // Пиши код выше этой строки
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
//33
// function findMatches(firstMass, ...args) {
//   const matches = []; // Не изменяй эту строку

//   for (const el of args) {
//     if (firstMass.includes(el)) {
//       matches.push(el);
//     }
//   }
//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
//34
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ["Последнее королевство", "Страж снов"],
//   getBooks() {
//     return "Возвращаем все книги";
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };
// console.log(bookShelf.addBook("Мгла"));
// console.log(bookShelf.getBooks());
// console.log(bookShelf.updateBook("Пески Дюны", "Дюна"));
// console.log(bookShelf.removeBook("Красный закат"));

//35
// const bookShelf = {
//   books: ["Последнее королевство", "Мгла", "Страж снов"],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
//     return this.books;
//     // Пиши код выше этой строки
//   },
// };
// console.log(bookShelf.updateBook("Мгла", "Хроники подземелий"));
//39
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const index = this.potions.indexOf(potionName);
//     this.potions.splice(index, 1);
//     return this.potions;
//     // Пиши код выше этой строки
//   },
// };

// console.log(atTheOldToad.removePotion("Дыхание дракона"));
//41
// const atTheOldToad = {
//   potions: [
//     { name: "Зелье скорости", price: 460 },
//     { name: "Дыхание дракона", price: 780 },
//     { name: "Каменная кожа", price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Зелье ${newPotion} уже есть в инвентаре!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const el of this.potions) {
//       //   console.log(el.name);

//       if (potionName === el.name) {
//         console.log(el);
//         const indexEl = this.potions.indexOf(el);
//         console.log(indexEl);
//         this.potions.splice(indexEl, 1);
//         return this.potions;
//       }
//     }

//     // return `Зелья ${potionName} нет в инвентаре!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const el of this.potions) {
//       console.log(el.name);

//       if (el.name === oldName) {
//         el.name = newName;
//         // this.potions.splice(indexEl, 1, newName);
//         return this.potions;
//       }
//     }
//   },

//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф"));

//!____________________________________________________________________________________
//*____________________________________________________________________________________
//?___________________________________________________________________________________

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));

function factorialize(num) {
  let total = 1;

  for (let i = 1; i <= num; i += 1) {
    total *= i;
  }
  return total;
}

factorialize(10);
//!-----------------------------------------------------------------------------------------
// function findLongestWordLength(str) {
//   let words = str.split(" ");
//   //   console.log(words);
//   let maxWordLength = 0;

//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > maxWordLength) {
//       maxWordLength = words[i].length;
//       //   console.log(maxWordLength);
//     }
//   }
//   return maxWordLength;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

//!-----------------------------------------------------------------------------------------

function largestOfFour(arr) {
  const arrLarge = arr.flatMap((array) => Math.max(...array));

  return arrLarge;
}

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );

//*------------------------------------------------------------------------------------------

function repeatStringNumTimes(str, num) {
  return str * num;
}

// console.log(repeatStringNumTimes("abc", 3));
