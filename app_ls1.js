"use strict";

/*
1. Задать температуру в градусах по Цельсию. 
Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
Подсказка: расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32, 
где Tf – температура по Фаренгейту, Tc – температура по Цельсию 
*/

let Tc = prompt("Введите температуру в градусах по Цельсию:");
let Tf = (9 / 5) * Tc + 32;
alert(Tf)

/*
2. Объявить две переменные: admin и name. 
Записать в name строку "Василий". 
Скопировать значение из name в admin. 
Вывести в консоль переменную admin (должно вывести "Василий"). 
*/

let name = "Василий";
let admin = name;
alert(admin);

/*
3. Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению:
10 + 10 + "10"
10 + "10" + 10
10 + 10 + +"10"
10 / -""
10 / +"2,5"
*/

let result = 10 + 10 + "10";
console.log(result);
/* 
1. 10 прибавляем 10 получаем 20 
2. конкатенация 20 и 10 получаем 2010
*/

result = 10 + "10" + 10;
console.log(result);
/* 
1. 10 конкатенация 10 получаем "1010"
2. конкатенация "1010" и 10 получаем "101010"
*/

result = 10 + 10 + +"10";
console.log(result);
/* 
1. 10 прибавляем 10 получаем 20 
2. +"10" унарный плюс преобразует его в число.
3. 20 прибавить 10 получаем 30  
*/

result = 10 / -"";
console.log(result);
/* 
1. унарный минус преобразует пустую строку в число, -0
2. 10 разделить на -0 получаем минус бесконечность
*/

result = 10 / +"2,5";
console.log(result);
/* 
1. унарный плюс переводит выражение из строки в число, но т.к. у нас разделительная ","
а не ".", число не получится. Будет NaN.
2. 10 разделить на NaN будет NaN.
*/

/*
4. Напишите, являются ли данные имена переменных корректными:
let mode = "normal"; -- корректно
let my_valu3 = 102; -- корректно
let 3my_value3 = "102"; -- не корректно. Начинать можно только с букв, знака "$" или подчеркивания "_"
let __hello__ = "world"; -- корректно
let $$$ = "money"; -- корректно
let !0_world = true; -- не корректно. Начинать можно только с букв, знака "$" или подчеркивания "_"
*/