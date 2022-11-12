/* 
TAREAS:
    PRINCIPAL: CALCULAR EL VALOR DE TICKETS ADQUIRIDOS SEGUN CANTIDAD Y CATEGORIA DE DESCUENTO
    1. ESTABLECER VALOR DE UN TICKET
    2. ESTABLECER PORCENTAJES DE LOS DESCUENTOS
    3. CONOCER LA CANTIDAD DE TICKETS Y EL DESCUENTO CORRESPONDIENTE
    4. EN CASO QUE EXISTA DESCUENTO APLICARLO AL VALOR UNITARIO DEL TICKET
    5. MULTIPLICAR LA CANTIDAD DE TICKETS POR EL VALOR UNITARIO DE TICKET CON EL DESCUENTTO SI CORRESPONDE
    6. MOSTRAR EL TOTAL DE LA COMPRA EN LA PANTALLA
    
    SECUNDARIAS:
    1. VALIDAR LOS DATOS INGRESADOS POR EL USUARIO
    2. PODER BORRAR EL FORMULARIO AL PRESIONAR UN BOTON


*/
//  1. ESTABLECER VALOR DE UN TICKET
const TICKET = 200;

// 2. ESTABLECER PORCENTAJES DE LOS DESCUENTOS
const ESTUDIANTE = 80;
const TRAINEE = 50;
const JUNIOR = 30;

// 3. CREAR VARIABLES DE LOS ELEMENTOS
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#mail");
let cantidad = document.querySelector("#cantidadTickets");
let categoria = document.querySelector("#categoriaSelect");
let resultado = document.querySelector("#totalPago");
let btnBorrar = document.querySelector("#btnBorrar");
let btnCalcular = document.querySelector("#btnResumen");

// 4. APLICAR LA ESTRATEGIA PARA ESCUCHAR O CAPTURAR EL EVENTO
btnCalcular.addEventListener("click", calcularTotal);
//2. PODER BORRAR EL FORMULARIO AL PRESIONAR UN BOTON
btnBorrar.addEventListener("click", borrar);

// 5. MULTIPLICAR LA CANTIDAD DE TICKETS POR EL VALOR UNITARIO DE TICKET CON EL DESCUENTO SI CORRESPONDE
function calcularTotal(event) {
  event.preventDefault();
  if (validateInputs() === true ) {
    let descuento = calcularDescuento(categoria.value);
    let resultado = (TICKET - descuento) * cantidad.value;
    // 6. MOSTRAR EL TOTAL DE LA COMPRA EN LA PANTALLA
    Swal.fire({
      icon: 'info',
      title: 'Total a pagar: $' + resultado,
      showCancelButton: true,
      confirmButtonText: 'Comprar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Has comprado unos tickets', '', 'success')
      }
    })
  } else {
    
  }
  
}

function calcularDescuento(categoria) {
  switch (categoria) {
    case "0":
      return 0;
    case "1":
      return (TICKET * 80) / 100;
    case "2":
      return (TICKET * 50) / 100;
    case "3":
      return (TICKET * 15) / 100;
    default:
      break;
  }
}

// VALIDACIÓN DE LOS DATOS INGRESADOS POR EL USUARIO
function validateInputs() {
  let inputNombre = nombre.value;
  let inputApellido = apellido.value;
  let inputEmail = email.value;
  let inputCantidad = cantidad.value;
  let selectCategoria = categoria.selectedIndex;
  if( inputNombre == null || inputNombre.length == 0 || /^\s+$/.test(inputNombre) ) { 
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Completa el formulario con tu nombre',
      showConfirmButton: false,
      timer: 1300
    })
  } else if (inputApellido == null || inputApellido.length == 0 || /^\s+$/.test(inputApellido) ) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Completa el formulario con tu apellido',
      showConfirmButton: false,
      timer: 1300
    })
  } else if ( !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(inputEmail)) ) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Completa el formulario con un email válido',
      showConfirmButton: false,
      timer: 1300
    })
  } else if ( inputCantidad == null || inputCantidad.length == 0 || isNaN(inputCantidad) ) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Ingresa la cantidad de tickets a comprar',
      showConfirmButton: false,
      timer: 1300
    })
  } else if (selectCategoria == null || selectCategoria == 0 ) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Selecciona alguna categoria',
      showConfirmButton: false,
      timer: 1300
    })
  } else {
    return true;
  }
}

function borrar() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  categoria.value = "";
}
