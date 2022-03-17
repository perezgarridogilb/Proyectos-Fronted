const button = document.getElementById("btn"); 

button.addEventListener("click", async function() { 
    const module = await import("./file.js"); 
    module.hello(); 

}) 

const aBigNumber = 9007199254740991n; 
const anotherBigNumber = BigInt(9007199254740991); 

console.log(aBigNumber)
console.log(anotherBigNumber)
