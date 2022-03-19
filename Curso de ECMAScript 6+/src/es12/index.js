/* Primer elemento, */
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString); 

/* En general de elementos */
const string1 = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString2 = string1.replaceAll("JavaScript", "Python");
console.log(replacedString2); 

/* Métodos privados */

class Message { 
    // Gato lo hace privado
    #show(val) {
        console.log(val); 
    }; 
    /** 
    Se recomienda usar getters and setters según sea el caso para nuestra aplicación 
    get #show(val) { 
        pass
    } 
   */ 
} 

// Instancia de la clase
const message = new Message(); 
// Llamada al método 
message.show('Hola!'); 

// any: El primero que resuelva 
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response)); 

class anyClass { 
    constructor(element) { 
        this.ref = new WeakRef(element)
    }



}

//  🦴 WeakRef(element); referencia de forma débil para que no lo tome el garbagecollector

/** 
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
    {...}
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

*/
