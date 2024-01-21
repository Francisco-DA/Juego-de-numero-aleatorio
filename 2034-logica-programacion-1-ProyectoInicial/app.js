
//numero contraseña
let NumeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*NumeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = `vez`;
let maximosIntentos = 6;

while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${NumeroMaximoPosible} por favor:`));

    console.log(typeof (numeroUsuario));
    // compara los numeros
    if (numeroUsuario == numeroSecreto) {
        //Si acerto
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert(`El numero secreto es menor`);
        } else {
                alert(`El  numero secreto es mayor`);
        }
        //No se acerto
        //alert(`Lo siento, no acertaste el número`);
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`); 
            break;
        }
    }
}
