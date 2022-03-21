/* 
Implementación de una API con XMLHttpRquest

Instanciando el request.
Permite hacer peticiones a algun servidor en la nube 
*/
XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest 

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
       // Se envía la solicitud  
       xhttp.send(); 
   }
}

