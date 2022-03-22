/* 
Implementación de una API con XMLHttpRquest

Instanciando el request.
Permite hacer peticiones a algun servidor en la nube 
*/
XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest 
// direccion de la API
let API = 'https://rickandmortyapi.com/api/character/'; 

function fetchData(url_api, callback) { 
    /* 
    Referencia al XML usando HTTP request 
    (Referencia al objeto XMLHttpRequest)
    */ 
   let xhttp = new XMLHttpRequest(); 
   // Llamado a la url, y que se maneje de manera asincrona 
   xhttp.open('GET', url_api, true) 
   xhttp.onreadystatechange = function (event) { 
       // Validación para saber si va a ejecutar su callback 
       // La validación 4 es para saber si se ha descargado
       if(xhttp.readyState === 4) { 
           // Garantizar que la petición ha sido concretada correctamente 
           if(xhttp.status === 200) { 
               // Regresando callback 
               callback(null, JSON.parse(xhttp.responseText))
           } else { 
               const error = new Error('Error ' + url_api); 
               return callback(error, null)
           }
       } 
    }
    // Se envía la solicitud  
    xhttp.send(); 
} 
// primero buscamos la lista de personajes 
fetchData(API, function(error1, data1) { 
    if(error1) return console.error(error1); 
    fetchData(API + data1.results[0].id, function(error2, data2) { 
        if(error2) return console.error(error2); 
        fetchData(data2.origin.url, function (error3, data3) { 
            if (error3) return console.error(error3); 
            console.log(data1.info.count); 
            console.log(data2.name); 
            console.log(data1.dimension); 
        }); 
    })
}) 
