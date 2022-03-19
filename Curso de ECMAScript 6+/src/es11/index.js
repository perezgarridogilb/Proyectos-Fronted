const button = document.getElementById("btn"); 

button.addEventListener("click", async function() { 
    const module = await import("./file.js"); 
    module.hello(); 

}) 
/* Trabajando con números int mayores 2^53 que es el mayor valor por defecto en JavaScript */
const aBigNumber = 9007199254740991n; 
const anotherBigNumber = BigInt(9007199254740991); 

console.log(aBigNumber); 
console.log(anotherBigNumber); 

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));
/* Devuelve una promesa después de sus respectivas promesas */
Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response)); 

// 🌎 Global This de Node

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string'; 
console.log(fooo);

const fooo2 = 'not null' ?? 'default string'; 
console.log(fooo2); 


// ⛓ Optional chaining

const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}

