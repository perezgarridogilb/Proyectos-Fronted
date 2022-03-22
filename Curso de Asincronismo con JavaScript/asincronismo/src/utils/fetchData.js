XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest 
// direccion de la API
let API = 'https://rickandmortyapi.com/api/character/'; 

const fetchData = (url_api) => { 
    /* 
    Referencia al XML usando HTTP request 
    (Referencia al objeto XMLHttpRequest)
    */ 
   return new Promise((resolve, reject) => { 
    const xhttp = new XMLHttpRequest(); 
    // Llamado a la url, y que se maneje de manera asincrona 
    xhttp.open('GET', url_api, true) 
    xhttp.onreadystatechange = (() => { 
        // Validación para saber si va a ejecutar su callback 
        // La validación 4 es para saber si se ha descargado
        if(xhttp.readyState === 4) { 
            (xhttp.status === 200) 
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error('Error', url_api)) 
        } 
     }); 
     // Se envía la solicitud  
     xhttp.send();  
   } );

} 

module.exports = fetchData; 
