var numero = 1;

switch (numero) {
    case 1:
        console.log('Es uno');
        break;
    case 2:
        console.log('El uno no es');
        break;
}

/* Reto con switch */

function jugar(p, pc) {
    switch (true) {
        case p === pc:
            console.log("Empate");
            break;
        case (p === 0 && pc !== 1) || (p === 1 && pc !== 2) || (p === 2 && pc !== 0):
            console.log("Ganas");
            break;
        default:
            console.log("Pierdes");
            break;
    }
}    