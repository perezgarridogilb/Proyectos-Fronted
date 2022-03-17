const obj = { 
    name: 'oscar', 
    age: 32, 
    country: 'MX'
}; 
// Establecer name lo demás 
// let { name, ...all } = obj; 
// nombre y encapsulado 
console.log(name, all); 
/* Más ágiles */
let { country, ...all } = obj; 
// extraer country
console.log(all); 

const obj1 = { 
    name: 'oscar', 
    age: 32
}; 

const obj2 = { 
    ...obj, 
    country: 'MX'
}; 

console.log(ob2); 

/* Promesa */ 
const helloWorld = () => { 
    return new Promise((resolve, reject) => { 
        (true) 
       // ? resolve('Hello World') 
       // tres milisegundos
       ? setTimeout(() => { resolve('Hello World!'); }, 3000)        
       : reject(new Error('Test Error'))
    }); 
}; 

helloWorld() 
.then(response => console.log(response)) 
.catch(error => console.log(error)) 
// ver qué finaliza
.finally(() => console.log('Finaliza')) 

/* Regex */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20') 
const year = match[1];
const month = match[2]; 
const day = match[3];
console.log('Date -> ', year, month, day);