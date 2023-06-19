//defino el valor del ticket
const ticket= 200;

//defino los descuentos

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//defino las variables a trabajar

let formulario, nombre, apellido, correo, cantidad, categoria, totalP, botonBorrar, botonResumen;

//elementos para calcular

formulario = document.querySelector('#formulario');
cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
totalP = document.querySelector('#totalAPagar');
botonResumen = document.querySelector('#resumen');
botonBorrar = document.querySelector('#borrar');

//funcion calcular pago
function calcularPago(){
    //condicionar por descuento

    let total = cantidad.value * ticket;

    switch (categoria.value){
        case "estudiante":
            total = total - (total * descuentoEstudiante)
            break;
        case "trainee":
            total = total - (total * descuentoTrainee)
            break;
        case "junior":
            total = total - (total * descuentoJunior)
            break;
    }

    totalP.innerHTML = `Total a Pagar: $ ${total}`;

}

//botones
botonResumen.addEventListener ('click',(event) => {
    event.preventDefault();
    comprobacion();
    calcularPago();

})

botonBorrar.addEventListener('click', ()=> formulario.reset());

// funcion compruebo ingresos
function comprobacion() {
    nombre = document.querySelector('input[placeholder="Nombre"]').value;
    apellido = document.querySelector('input[placeholder="Apellido"]').value;
    correo = document.querySelector('input[placeholder="Correo"]').value;

    if (nombre == '' && apellido == '' && correo == '') {
        alert('COMPLETA LOS CAMPOS');
        return
    }
    else if ( nombre == ''){
        alert('ingresa tu nombre')
        return
    }
    else if(apellido == ''){
        alert('ingresa tu apellido')
        return
    }
    else if(correo == ''){
        alert('ingresa tu correo')
        return
    }
    else if(cantidad.value == '' || cantidad.value == 0){
        alert('ingresa la cantidad')
        return
    }

}
