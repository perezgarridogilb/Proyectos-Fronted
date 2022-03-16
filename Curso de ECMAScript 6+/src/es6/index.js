function newFunction(name, age, country) { 
    /* El valor que recibía o el valor que yo le podía establecer */
    var name = name || 'oscar'; 
    var age = age || 32; 
    var country = country || 'MX'; 
    console.log(name, age, country); 
} 

/* es6 */

function newFunction1(name = 'oscar', age = 32, country = "MX") { 
    console.log(name, age, country); 
} 

newFunction1();
newFunction1('Ricardo', '23', 'CO') 

/* */ 
let hello = "hello";
let world = "World";
let ePharse = "hello" + ' ' + world; 
console.log(ePharse); 

// es6
let ePharse1 = '${hello} ${World}'; 
console.log(ePharse1); 

/* */

let lorem = "Frase\n"
 + "Frase1"

// es6 
let lorem1 = `Frase
Frase1`;
console.log(lorem);
console.log(lorem1); 

let person = { 
    'name': 'oscar', 
    'age': 32, 
    'country': 'MX'
} 

console.log(person.name, person.age); 

// es6

let { name, age } = person; 
console.log(name, age); 

let team = ['Ocsar', 'Julian', 'Ricardo'];
let team1 = ['Valeria', 'Yessica', 'Karen']; 

let educantion = ['Dvid', ...team, ...team1]; 
console.log(educantion); 

/* let en el scope */ 

{ 
    var globalvar = "Global Var"; 
} 

{ 
    let globallet = "Global Var"; 
    console.log(globallet);  
} 


console.log(globalvar); 


const a = "Soy constante";
a = "No soy constante" ; /* Al ejecutar arroja error porque no puede cambiarse una constante luego de declararse. */

console.log(a); 

let name1 = 'oscar'; 
let age1 = 32; 
// es5
obj = { name: name1, age: age1}; 
// es6
obj1 = { name1, age1 }; 

console.log(obj1)

const names = [
    // arreglo, varipos elementos en un objeto
    { name: 'Oscar', age: 32  }, 
    { name: 'Yessica', age: 27  }

] 
// func anónima
// item: elemento que quiero traer
let listOfNames = names.map(function(item) { 
    console.log(item.name); 
}) 

// =>: función anónima que va a retornar algo
let listOfNames1 = names.map(item => console.log(item.name)); 

// =>: arroy functions 
// const listOfNames2 = (name, age, country) => { 
//     ...
// }
// 
// const listOfNames4 = name => { 
//     ...
// } 

// generando una función para pasarle el valor de num de la operación num * num
const square = num => num * num; 

// const helloPromise = () => { 
//     return new Promise((resolve, reject) => { 
//         if(true) { 
//             resolve('Promesas')
//         } else {
//             reject('None');
//         }
//     });
// }
// 
// helloPromise()
//     .then(response => console.log(response)) 
//     .then(() => console.log('hola'))
//     .catch(error => console.log(error)) 

const helloPromise = () => { 
    return new Promise((resolve, reject) => { 
        if(false) { 
            resolve('Promesas')
        } else {
            reject('None');
        }
    });
}

helloPromise()
    .then(response => console.log(response)) 
    .catch(error => console.log(error)) 
