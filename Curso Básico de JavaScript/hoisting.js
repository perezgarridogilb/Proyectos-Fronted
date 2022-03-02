/* 
Cuándo las variables y funciones se procesan antes de que se ejecute cualquier
tipo de código 
*/
/* var miNombre = undefined */
console.log(miNombre); // undefined

/* var miNombre; */

miNombre = "Tú nombre" // Tú nombre


/* Hoisting1 */

var miNombre1 = undefined;

console.log(miNombre1 + ", Soy ese hoisting"); // undefined, Soy ese hoisting

miNombre1 = "Diego"; // Diego

/* Hoisting2 */

hey();

function hey() {
    console.log("Hola" + miNombre); // Hola undefined
}

var miNombre = "Diego";

/* 
Resumen: 
Como buenas prácticas declarar se deben 
declarar las funciones al inicio del código 
para evitar problemas con el hoisting de JavaScript
*/



