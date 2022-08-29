/* variables en js
declaracion de variables
 var numero // no usamos var
let nombre; // vamos let
let numero;
let nombreCompletoUsuario;


inicializar variables

let resultado = 0;
const PI=3.141516;
const DNI=
asignar valores

numero = 10.3;
nombre = 'Mau';
nombreCompletoUsuario = 'Mauro Pasinato';
nombre=nombreCompletoUsuario;
console.log(numero);


reasignar valores
numero = 20;
nombre = 'Mari';
nombreCompletoUsuario = 'Marina Daquino';

consola de navegador
console.log(numero);
console.log(numero);


let result = PI - 35;
console.log(numero);

resultado = PI + numero;
//concatenar variables
console.log(resultado);


nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');
nombreCompletoUsuario = nombre +' '+ apellido;

console.log(nombreCompletoUsuario);

*/
/*CLASE 2*/
// let numero= prompt('ingresa un numero');
// let numero= parseInt (prompt('ingresa un numero'));

// if (numero == 12 ){
//     console.log('el numero que ingresaste es ' + numero)
// }else{
//     console.log('el numero que ingresaste no es 12'+' es: '+ numero);
// }

// let numero= parseInt (prompt('ingresa un numero'));

// if (numero == 12 ){
//     console.log('el numero que ingresaste es ' + numero)
// }else if(numero > 23){
//     console.log('el numero que ingresaste no es 12'+' es: '+ numero);
// }else{
//     console.log('el numero es '+numero )
// }

/*VARIABLES BOOLEAN*/
// let verdadero=true; let falso = false;

// let numero= parseInt (prompt('ingresa un numero'));

// let esIgual = numero ==12;
// let esMayor = numero > 23;

// if (esIgual ){
//     console.log('el numero que ingresaste es ' + numero)
// }else if(esMayor){
//     console.log('el numero que ingresaste no es 12'+' es: '+ numero);
// }else{
//     console.log('el numero es '+numero )
// }

// let usuario = prompt('ingrese tu usuario');
// let password = prompt('ingresa tu pass');
// let pass= '1234';
// let user= 'Maipa';
// //&& ambas tienen que ser verdaderas. ||cualquiera tiene que ser verdadera

// if(usuario ==user || password ==pass){
//     console.log('Hola '+ usuario);
// }else{
//     console.log('User or Password incorrect');
// }
/*
let nombre = prompt('ingresa tu nombre');
if(nombre == 'pedro' || nombre =='PEDRO'){
    console.log('Hola Pedro que bueno tenerte de nuevo');
}else{
    console.log('Hola '+nombre);
} */

/*CLASE 3 */
/*bucles en js
//i++= i=i+1
// for(desde; hasta; actualización) {
//     … //lo que se escriba acá se ejecutará mientras dure el ciclo
//    }

for (let i=1; i<=3; i++){
    let ingreso= prompt('ingresa tu nombre')
    console.log(ingreso);
}
*/
/*
let ingreso =parseInt(prompt('ingresa un numero'));
let limite = parseInt(prompt('ingresa un limite'));
for (let i =0; i<=limite; i++){
    let resultado =ingreso*i;
    console.log(ingreso +'*' + i + '=' + resultado);
}
*/

//let palabraClave = 'patatas';

// for (let index = 0; index < 3; index++) {

//     let palabraUsuario = prompt('Ingresa tu palabra clave')
//     if(palabraClave===palabraUsuario)
//     {
//         console.log('Login Exitoso');
//         break;
//     }else{
//         console.log(('te quedan '+(2- index) + ' intentos'));
//     }
// }
/*for (let index = 0; index<=10; index++){
    if (index==5 || index==9){
        console.log('salto');
        break;
    }
    console.log(index);
}*/


//WHILE o Mientras
/* let repetir = true;

while(repetir){
    console.log('soy un bucle while');
    repetir=false;
}
let contador=0;

while(contador<10){
    console.log('Soy un bucle while');
    contador++;
}*/

/*
let edad =parseInt(prompt('Ingrese su edad'));
while (edad<=18){
    console.log('No podes pasar tenes menos de 18');
    //condicion de salida
    edad = parseInt(prompt('ingrese su edad'));
}
*/
/*
let palabra='tomate'
let palabraIngresada= prompt('Ingrese la palabra clave')

while(palabra!=palabraIngresada){
    console.log('Palabra incorrecta');
    palabraIngresada=prompt('Ingrese la palabra clave')
}
*/

//DO WHILE

// let condicion =  false
// do{
// console.log('Yo me ejecuto igual');

// }while(condicion)

// let continuar= true
// let passGuardado='1150'
// do{
//     let password = prompt('Cuanto es 785+365');
//     if (password == passGuardado){
//         console.log('Esa, matematico');
//         continuar=false
//     }
// }while(continuar)


//Swith 22/08

/*let ingreso = prompt(
    'Ingrese una opcion \n 1-Cafe solo \n 2-Cafe con leche \n 3-Te\n 4-Te con leche \n 5-Agua caliente'
);

switch (ingreso){
    case'1':
        alert('Seleccionaste cafe?');
        break;
    case'2':
        alert('Seleccionaste cafe con leche?');
        break;
    case'3':
        alert('Seleccionaste Te?');
        break;

    default:
        alert('opcion no valida');
        break;
}
//if()else if()else if()else{alert(opcion no valida)} */

//funciones
//declarar funciones
// function saludar(){
//     //codigo a ejecturar
//     alert('Hola como estas?')
// }
//llamar a la funcion
// saludar();

// function solicitarNombre(){
//     let nombre=prompt('Ingresa tu nombre');
//     alert(nombre)
// }
// solicitarNombre();

//Funciones con parametros
// function saludar(nombre, apellido){
//     alert('Hola ' + nombre +' ' + apellido + ' como estas?')
// }

// let ingresarNombre=prompt('ingresa tu nombre');
// let ingresarApellido=prompt('ingresa tu apellido');

// saludar(ingresarNombre, ingresarApellido);


function sumar(parametro1, parametro2){
    if (parametro1!==undefined && parametro2!==undefined){
    alert ('no puedes tener campos vacios')
    }else{
    alert (parametro1 + parametro2);
    }
}
let num1 = parseFloat(prompt('ingresa un numero'));
let num2 = parseFloat(prompt('ingresa otro numero'));

sumar (num1, num2);
