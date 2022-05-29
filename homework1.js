
// вычисляем площадь прямоугольника
let x1 = 8;
let y1 = 1;

let x2 = 5;
let y2 = 1;

let catenus1 = Math.abs(x1 - x2);
let catenus2 = Math.abs(y1 - y2);

console.log(catenus1 * catenus2);


// сравниваем дробные числа

let a = 13.890123;
let b = 2.891564;
let n = 2;

let firstNormalized = Math.floor((a - Math.floor(a)) * Math.pow(10, n));

console.log(firstNormalized);

let secondNormalized = Math.floor((b - Math.floor(b)) * Math.pow(10, n));

console.log(secondNormalized);

console.log('первое число больше', firstNormalized > secondNormalized);
console.log('первое число меньше', firstNormalized < secondNormalized);
console.log('первое число больше или равно', firstNormalized >= secondNormalized);
console.log('первое число меньше или равно', firstNormalized <= secondNormalized);
console.log('числа равны', firstNormalized === secondNormalized);
console.log('числа не равны', firstNormalized !== secondNormalized);

