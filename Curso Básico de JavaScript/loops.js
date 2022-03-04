var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"] 

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);

}

for(var i = estudiante of estudiantes) {
    saludarEstudiantes(estudiante);

}

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
