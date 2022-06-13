let entrances = 4;
let floors = 9;
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log('квартир в подьезде', flatsPerEntrance);

let flats = entrances * flatsPerEntrance;
console.log('всего квартир в доме', flats);


/*вычисление дискриминанта и решение квадратного уравнения
a*x*x + b*x + c = 0
даны параметры a,b, и с для квадратного уравнения.
нужно вывести возможные значения x этого уравнения. 
*/
let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

//корень дискриминанта
let dRoot = Math.sqrt(d);
console.log('x1 = ', (-b + dRoot) / (2 * a));
console.log('x2 = ', (-b - dRoot) / (2 * a));

/*вычисляем n чисел ряда Фибоначчи
каждое следующее число - сумма двух предыдущих */
let n = 10;
let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
  prevPrev = prev;
  prev = current;
  current += prevPrev;
  console.log(current);
}