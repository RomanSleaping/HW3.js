"use strict"
// 1
const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);
// 2
const email = "any@gmail.com";
const checkEmail = email.includes("@");
const countSymbolsOfEmail = email.indexOf("@");
const emailLength = email.length;
console.log (checkEmail, countSymbolsOfEmail, emailLength);

console.log(emailLength);
// 3
const my = "My";
const name = "name";
const is = "is";
const dot = ".";
const userName = "Tolik";
let all= `${my} ${name} ${is}`;
all = all + userName;
const all2 = my + name + is + userName;

// 4
const yourName = "May";
const payment = 700;
const interpulation = `Дякую, ${yourName}! До сплати ${payment} гривень`;
alert(interpulation);
// 5
const fruit = "апельсін";
console.log(fruit[0]);
console.log(fruit[fruit.length-1]);
// 6
const str = "Jason Statham".toLowerCase();
const searchStr = "stathaM";
console.log(str.indexOf(searchStr.toLowerCase()));
console.log(str.toLowerCase());

