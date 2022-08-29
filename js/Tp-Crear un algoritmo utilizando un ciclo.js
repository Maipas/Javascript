//Crear un algoritmo utilizando un ciclo
let numeroClave = '12'
for (let index = 0; index <3; index++){
    let numeroUsuario = prompt('Cuantos meses tiene el calendario gregoriano(en numero) ?')
    if(numeroClave === numeroUsuario)
    {
        console.log('Correcto!');
        break;
    }else{
        console.log(('incorrecto, te quedan '+(2-index) + ' intentos'));
    }
}
