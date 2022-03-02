/* 
Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción: 
*/
/* Coerción implícita */

/* Es cuando el lenguaje nos ayuda a cambiar el tipo de valor */

var a = 4 + "7 "; // 47

typeof a; // string

var a = 4 * "7 "; // *: de operación matemática / 28

typeof a; // number

/* Coerción explícita */

/* Es cuando obligamos a que cambie el tipo de valor */

var a = 20;

var c = String(a);

typeof c; // string

/* number */

var d = Number(c);

typeof d; // number
