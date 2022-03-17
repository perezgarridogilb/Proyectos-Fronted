let array = [1,2,3, [1,2,3, [1,2,3]]]; 
/* Devolver cualquier matriz con cualquier submatriz aplanada */ 
console.log(array.flat()); 
console.log(array.flat(2)); 
/* 
Dos niveles

[
  1, 2, 3, 1, 2,
  3, 1, 2, 3
]

*/ 

/* Lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar. 
Lo "mapea" y lo multiplica por dos
*/
let array1 = [1,2,3,4,5]; 
console.log(array1.flatMap(value => [value, value * 2])) 

/* 
[
  1, 2, 2, 4,  3,
  6, 4, 8, 5, 10
]
*/ 

/* 
Permite quitar los espacios al inicio o al final dependiendo de la funciona.
*/ 

let hello = '     hello world'; 
console.log(hello); 
console.log(hello.trimStart()); 


let hello1 = 'hello world     '; 
console.log(hello1); 
console.log(hello1.trimEnd()); 

try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

/* Arreglo de arreglos convertido a un objeto */ 

let entries = [["name", "tu nombre"], ["age", 32]];
console.log(Object.fromEntries(entries))

/* Ver simbolo, objeto de tipo simbolo que accede a una descripción */ 

let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description); 