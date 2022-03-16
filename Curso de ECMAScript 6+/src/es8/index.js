const hello = require("../es6/module");

const data = { 
    front: 'Dante' ,
    back: 'Tú', 
    design: 'Ana',
} 

const entries = Object.entries(data); 
console.log(entries); 
console.log(entries.length); 

// Convirtiendo a un arreglo de strings

const values = Object.values(data); 
console.log(values); 

// agregando a la cadena de texto 
const string = 'hello'; 
console.log(string.padStart(7, 'hi')); 
console.log(string.padEnd(12, ' ----')); 
console.log('food'.padEnd(12, ' ----')); 


const data1 = { 
    front: 'Dante' ,

} 

const helloWorld = () => { 
    return new Promise((revolve, reject) => { 
        (true) 
        ? setTimeout(() => revolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}; 

const helloAsync = async () => { 
    const hello = await helloWorld();
    console.log(hello); 
}; 

helloAsync(); 



const anotherFuncs = () => { 
    try { 
        const hello = await helloWorld(); 
        console.log(hello); 

    } catch (error) { 
        console.log(hello); 
    }
}; 

anotherFuncs(); 