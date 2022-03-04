/* Objeto de JavaScript */
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto, ${this.modelo} $${this.annio}`);
    }
}

miAuto.marca; // Un sólo atributo, en este caso es string
miAuto.detalleDelAuto(); // El atributo función, se les llama métodos de objetos

// Función constructora 

function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

var newAuto = new auto("Tesla", "Model 3", 2020);