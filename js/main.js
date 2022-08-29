alert ('Bienvenido a Componentes Gamers, registrese para continuar');

function registrarse(){
    let usuario = prompt('Ingrese su usuario');
    let password = prompt('Ingrese su contraseña');
    alert('Hola ' + usuario + ' gracias por registrarse');
}
registrarse();

// Procesadores
let I7 = 93820
let I5 = 49480
let I3 = 26180

// Placas de video
let Nvidia3090 = 399999
let Nvidia3080 = 333499
let Nvidia3070 = 300054

// Mothers
let Z590  = 58260
let B560M = 24050
let H510MH = 15370

//sub y total

let subtotal = 0;
let valorTotal = 0;

//funciones
    function sumarProductos (producto) {
    subtotal = producto + subtotal  
    };
    function calcularTotal (total) {
    valorTotal = total ;
    };
    function cuotificar (cuotas) {
        return subtotal / cuotas;
    };

    let comprar = true;
    let carritoEnd = false;

    let categorias = prompt (
        'En que te puedo ayudar? \n 1-Procesadores \n 2-Placas de video \n 3-Mothers'
    );

    switch (categorias) {
        case "1":
            alert('Seleccionaste Procesadores, elige cual agregar al carrito');
            while (comprar) {
    
                let producto = prompt('Ingrese el numero del procesador para agregar al carrito:\n 1-I7\n 2-I5\n 3-I3 \n 4-Finalizar');
            
                if (producto === "4") {
                calcularTotal (subtotal);
                alert('El valor total de la compra es de $' + subtotal);
                comprar = false;
                carritoFinalizado = true;
                }
                else if (producto == "1") {
                sumarProductos (I7);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('Procesador MICRO INTEL CORE I7 12700K fue agregada al carrito');
                }
                else if (producto == "2") {
                sumarProductos (I5);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('Procesador MICRO INTEL CORE I5 12400K fue agregada al carrito');
                }
                else if (producto === "3") {
                sumarProductos (I3);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('Procesador MICRO INTEL CORE I3 10105 fue agregada al carrito');
                }
            }
            
            break;

            case "2":
            alert('Seleccionaste Placas de video, elige cual agregar al carrito');
            while (comprar) {
    
                let producto = prompt('Ingrese el numero del procesador para agregar al carrito:\n 1-Nvidia 3090\n 2-Nvidia 3080\n 3-Nvidia 3070 \n 4-Finalizar');
            
                if (producto === "4") {
                calcularTotal (subtotal);
                alert('El valor total de la compra es de $' + subtotal);
                comprar = false;
                carritoFinalizado = true;
                }
                else if (producto == "1") {
                sumarProductos (Nvidia3090);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('Nvidia Zotac Gaming GeForce RTX 30 Series RTX 3090 ZT-A30900D-10P 24GB fue agregada al carrito');
                }
                else if (producto == "2") {
                sumarProductos (Nvidia3080);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('Nvidia MSI Gaming GeForce RTX 30 Series RTX 3080 Ti GEFORCE RTX 3080 Ti GAMING X TRIO 12G 12GB fue agregada al carrito');
                }
                else if (producto == "3") {
                sumarProductos (Nvidia3070);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('Nvidia Evga FTW3 Ultra Gaming GeForce RTX 30 Series RTX 3070 08G-P5-3767-KL 8GB fue agregada al carrito');
                }
            }
            break;  

            case "3":
            alert('Seleccionaste Mothers, elige cual agregar al carrito');
            while (comprar) {
    
                let producto = prompt('Ingrese el numero de la Mother para agregar al carrito:\n 1- Z590\n 2-B560M\n 3-H510M H \n 4-Finalizar');
            
                if (producto === "4") {
                calcularTotal (subtotal);
                alert('El valor total de la compra es de $' + subtotal);
                comprar = false;
                carritoFinalizado = true;
                }
                else if (producto == "1") {
                sumarProductos (Z590);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('MOTHER GIGABYTE Z590 AORUS ELITE AX fue agregada al carrito');
                }
                else if (producto == "2") {
                sumarProductos (B560M);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('MOTHER GIGABYTE B560M DS3H AC fue agregada al carrito');
                }
                else if (producto === "3") {
                sumarProductos (H510MH);
                console.log('Producto añadido: '+producto+ '. Subtotal = $'+subtotal);
                alert('MOTHER GIGABYTE H510M H fue agregada al carrito');
                }
            }
            break;

        default:
            alert("Opcion no valida");
            break;
    }
    //Pagos
    if (carritoFinalizado) {

    let formaPago = prompt("Seleccione como desea abonar su compra, usando la palabra correspondiente: \n MERCADOPAGO \n TRANSFERENCIA \n CREDITO");
    while (formaPago !== "MERCADOPAGO" && formaPago !== "TRANSFERENCIA" && formaPago !== "CREDITO") {
        formaPago = prompt("Ingrese una forma de pago válida:\nMERCADOPAGO\nTRANSFERENCIA\nCREDITO");
    }
    
    switch (formaPago) {
        case "MERCADOPAGO":
        alert("Continue la operacion desde la app abonando un total de: $"+valorTotal+".");  
        break;  
        case "TRANSFERENCIA":
        alert("Se debitaran $"+valorTotal+" de su cuenta bancaria.");
        break;
        case "CREDITO":
        let cuotas = 0;
        let cuotasAprobado = true;
        cuotas = parseInt(prompt("Elija cantidad de cuotas: \n1\n3\n6\n12"));
        while (cuotasAprobado) {
        if (cuotas === 1 || cuotas === 3 || cuotas === 6 || cuotas === 12 ) {
        alert("Su pago será de "+cuotas+" cuotas de $"+cuotificar(cuotas)+"." );
        cuotasAprobado= false;
        }
        else {
        cuotas = parseInt(prompt("Ingrese un número de cuotas válido: 1, 3, 6 o 12 cuotas."));
        }
        let creditCard = prompt("Ingrese número de tarjeta de crédito");
        alert("Su tarjeta "+creditCard+" ha sido aprobada. Muchas gracias por su compra!");
    }
        break;
    }
    let envio = prompt("Indique su direccion para el envio");
    alert("Su envio ha sido programado para mañana en el horario de 8:00 a 18:00 a la direccion de " + envio);
    }