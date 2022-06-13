Infinity > 100500; //true
-Infinity < -100500; //true
100500 / 0; // Infinity :)

// а вот дальше интереснее

Infinity === Infinity; //true

Infinity > Infinity; //false
Infinity < Infinity; //false

Infinity >= Infinity; //true
Infinity <= Infinity; //true

Infinity + Infinity; //Infinity
-Infinity - Infinity; //-Infinity

Infinity - Infinity; //NaN O_o
-Infinity + Infinity; //NaN O_o
Infinity / Infinity; //NaN 

Infinity / 10; //Infinity
Infinity * 10; //Infinity
Infinity ** 10; //Infinity
Infinity ** Infinity; //Infinity

Infinity ** -Infinity; //0
(-Infinity) ** Infinity; //Infinity

/*
-не используйте Infinity без явной необходимости!

-всё, что делает бесконечность ещё более бесконечной,
  возвращает бесконечность

-любые операции с числом и бесконечностью вернут бесконечность

-уменьшение бесконечности при делении или вычитании
  (прибавлении для отрицательной) бесконечности в JAVASCRIPT не работает

-две бесконечности равны

-деление на ноль дает бесконечность
 */