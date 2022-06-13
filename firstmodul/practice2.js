/* 
вычисляем расстояние между двумя точками
даны координаты х, у 2-х точек. нужно вывести расстояние между ними
вычисляем по теореме пифагора
 */

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let catenus1 = Math.abs(x1 - x2);
let catenus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
  Math.pow(catenus1, 2) + Math.pow(catenus2, 2)
));


/* 
сравниваем 2 дробных числа с указанной точностью
даны два числа  и кол-во знаков после запятой, которое необходимо учитывать
вывести всю информацию, равны ли эти числа, больше ли первое число или меньше второго
 */

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(
  first * Math.pow(10, precision)
);
let secondNormalized = Math.round(
  second * Math.pow(10, precision)
);

console.log('исходные числа рывны', first === second);
console.log('числа равны', firstNormalized === secondNormalized);
console.log('первое число больше', firstNormalized > secondNormalized);
console.log('первое число меньше', firstNormalized < secondNormalized);


/* 
генератор случайных чисел между n до m
учесть что n необязательно меньше, чем m
*/

let n = -100;
let m = 350;

// кол-во цифр, которые могут быть сгенерированны
let range = Math.abs(m - n);
// округленное число от 0 до range
let numberInRange = Math.round(Math.random() * range);
//левая граница возможного числа
let min = Math.min(n, m);

console.log(min + numberInRange);


/* 
выводим отдельно целую и дробную части числа с точностью n
*/

let precision2 = 3;
let number = 0x12f + .3 + .1;

console.log('исходное число', number); //303.40000000000003

console.log('целая часть', Math.floor(number));
//остаток от деления на 1 возвращает дробную часть
console.log('дробная часть', Math.round(number % 1 * Math.pow(10, precision2)));

