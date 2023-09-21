// let ingreso = prompt("¿Cuenta con usuario? S/N");

// if (ingreso.toLowerCase() == 's') {

//     let usuarioIngresando = prompt("Ingrese nombreProducto de usuario:");
//     let pass = prompt('Ingrese contraseña:');

//     while (usuarioIngresando != 'cliente' || pass != 'cliente') {

//         alert("Usuario y/o contraseña incorrecta.");
//         usuarioIngresando = prompt("Ingrese nombreProducto de usuario:");
//         pass = prompt('Ingrese contraseña:');

//     }
//     user = "cliente";
//     alert('¡Bienvenido, ' + usuarioIngresando + '!');

// } else if (ingreso.toLowerCase() == 'n') {
//     user = "no";
//     alert('Bienvenido, cliente no registrado');
// } else {
//     user = "no";
//     alert('Error');
// }

// let seccionHeader = document.getElementById('mainID');
// console.dir(seccionHeader);

// seccionHeader.style.background='grey';

//Navbar

class producto {
  constructor(
    id,
    nombreProducto,
    imagenProducto,
    descripcion,
    precio,
    enStock,
    femenino,
    masculino,
    barba,
    cabello,
    stock,
    cantidadEnCarrito

  ) {
    this.id = id;
    this.nombreProducto = nombreProducto;
    this.imagenProducto = imagenProducto;
    this.descripcion = descripcion;
    this.precio = precio;
    this.enStock = enStock;
    this.femenino = femenino;
    this.masculino = masculino;
    this.barba = barba;
    this.cabello = cabello;
    this.stock = stock;
    this.cantidadEnCarrito = cantidadEnCarrito;
  }

  descuentoCliente() {
    this.precio = this.precio - iva;
  }

  vender() {
    this.vendido = true;
  }
}

const producto1 = new producto(
  1,
  "Cera pomada Cikonielf Styling",
  'https://www.cdiscount.com/pdt2/8/0/7/1/700x700/cik7309587664807/rw/cikonielf-pommade-coiffante-60g-longue-duree-hydra.jpg',
  '',
  300,
  true,
  false,
  true,
  false,
  true,
  20,
  1
);
const producto2 = new producto(
  2,
  "Cera para peinar profesional Shock",
  'https://m.media-amazon.com/images/I/61oHxr8QjoL._SX425_.jpg',
  '',
  800,
  true,
  false,
  true,
  false,
  true,
  6,
  1
);
const producto3 = new producto(
  3,
  "Cera Pelo & Barba Capilatis Hombre",
  'https://http2.mlstatic.com/D_NQ_NP_2X_829015-MLU41018740930_032020-F.webp',
  'Barba perfecta e impecable: cera de modelado para dar forma a distintos tipos de barba. Hidrata, suaviza y define los contornos manteniendo un aspecto natural. Ofrece fijación y estilo, minimizando el encrespamiento en barbas rebeldes. Peinados de larga duración: apta para todo tipo de cabellos, permite definir peinados con precisión y sostener estilos únicos con total control. Especialmente útil para hombres que desean pelo & barba imponentes, alineados y sin frizz.',
  506,
  true,
  false,
  true,
  true,
  true,
  33,
  1
);
const producto4 = new producto(
  4,
  "Cera Gel Vikingo para Barba",
  'https://i0.wp.com/odinuruguay.com/wp-content/uploads/2021/04/Cera-Gel-Vikingo.png?fit=1024%2C1024&ssl=1',
  '',
  293,
  true,
  false,
  true,
  true,
  false,
  5,
  1
);
const producto5 = new producto(
  5,
  "Crema de peinar Pantene",
  'https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/3/0/30335_10_1.jpg',
  'La crema de peinar Rizos Definidos de Pantene cuenta con el poder de la exclusiva fórmula Pro-V de Pantene y su nuevo envase te permite encontrar fácilmente el producto ideal para tu tipo de cabello.',
  290,
  true,
  true,
  true,
  false,
  true,
  100,
  1
);
const producto6 = new producto(
  6,
  "Crema Para Peinar Pantene Colágeno",
  'https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/8/0/808682.jpg',
  '',
  620,
  true,
  true,
  true,
  false,
  true,
  36,
  1
);
const producto7 = new producto(
  7,
  "Gel Primicia Modelador Efecto Mojado",
  'https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/8/7/87959_001.jpg',
  '¡Nada más atractivo que lucir un peinado impecable y único! Gel modelador para cabello. Primicia con fijación media para dar un efecto mojado y un brillo intenso.',
  450,
  true,
  false,
  true,
  false,
  true,
  40,
  1
);
const producto8 = new producto(
  8,
  "DR. SELBY - fijador para cabello",
  'https://www.selby.com.uy/wp-content/uploads/2021/12/fijador_120-510x508.jpg',
  '',
  130,
  true,
  false,
  true,
  false,
  true,
  20,
  1
);
const producto9 = new producto(
  9,
  "Gel Calypso Fijador Fuerte",
  'https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/5/2/52429.jpg',
  '',
  78,
  true,
  false,
  true,
  false,
  true,
  8,
  1
);
const producto10 = new producto(
  10,
  "Cera En Polvo Golden Moustache Efecto Matte",
  'https://http2.mlstatic.com/D_NQ_NP_2X_962059-MLU50099607369_052022-F.webp',
  '',
  350,
  true,
  true,
  true,
  false,
  true,
  28,
  1
);

console.log(producto1);

const inventario = [];

inventario.push(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10
);

const productosDestacados = [];

productosDestacados.push(
  producto5,
  producto3,
  producto7
)

class usuario {
  constructor (
    userName,
    nombreUsuario,
    apellidoUsuario,
    passUsuario,
    fechaNacimiento,
    genero,
    email,
    promo,
    info
  ){
    this.userName = userName;
    this.nombreUsuario = nombreUsuario;
    this.apellidoUsuario = apellidoUsuario;
    this.passUsuario = passUsuario;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero;
    this.email = email;
    this.promo = promo;
    this.info = info;
  }
}

const usuarios = [];

const usuario1 = new usuario (
  'Pepe123',
  'José',
  'Gomez',
  12345,
  '15/4/95',
  'masculino',
  'pepeelgroso123@hotmail.com',
  true,
  true
);

usuarios.push(usuario1);

console.log (usuarios);
// console.table(productosDestacados);

// // ----------------Validaciones---------------------

// const inputNombre = document.getElementById('usuario');
// const inputPass = document.getElementById('pass');

// inputNombre.onkeyup = () => {
//   if (inputNombre.value.length < 3) {
//     inputNombre.style.color = 'red';
//   }x
//   else {
//     inputNombre.style.color = 'black';
//   }
// }

// inputPass.onkeyup = () => {
//   if (inputPass.value.length < 6) {
//     inputPass.style.color = 'red';
//   }
//   else {
//     inputPass.style.color = 'black';
//   }
// }

// const formulario = document.getElementById('inicioSesion');

// formulario.addEventListener('submit', validar);

// function validar(evento) {
//   if (inputNombre.value == '' || inputPass.value == '') {
//     evento.preventDefault();
//     alert('Usuario o contraseña invalida');
//   }

// }



// //lista todos los productos

// let listadoProductos = "";
// for (const producto of inventario) {
//     listadoProductos += producto.idProducto + ") " + producto.nombreProducto + ". Precio: $" + producto.precio + "\n";
// }

// //MENU
// let opcionMenu = prompt("Menú: \n1) Listar productos femeninos. \n2) Listar productos masculinos. \n3) Listar de mayor precio menor precio. \n4) Listar producto de menor a mayor precio. \n5) Listar productos solo de barba. \n6) Listar productos solo de cabello. \n7)Listar todos los productos. \n8) Seleccionar precio máximo. \n9) Agregar a carrito. \n10) Buscar. \n0) SALIR.");

// while (opcionMenu != 0) {
//     switch (opcionMenu) {
//         case '1':
//             function productoFemenino(feme) {
//                 const filtrados = inventario.filter((producto) => producto.femenino == feme);
//                 console.table(filtrados);
//             }
//             productoFemenino(true);
//             break;
//         case '2':
//             function productoMasculino(masc) {
//                 const filtrados = inventario.filter((producto) => producto.masculino == masc);
//                 console.table(filtrados);
//             }
//             productoMasculino(true);
//             break;
//         case '3':
//             inventario.sort((x, y) => y.precio - x.precio);
//             console.table(inventario); 0
//             break;
//         case '4':
//             inventario.sort((x, y) => x.precio - y.precio);
//             console.table(inventario); 0
//             break;
//         case '5':
//             function productoBarba(barba1) {
//                 const filtrados = inventario.filter((producto) => producto.barba == barba1);
//                 console.table(filtrados);
//             }
//             productoBarba(true);
//             break;
//         case '6':
//             function productoSoloCabello(soloCabello) {
//                 const filtrados = inventario.filter((producto) => producto.cabello = soloCabello);
//                 console.table(filtrados);
//             }
//             productoSoloCabello(true);
//             break;
//         case '7':
//             console.table(inventario);
//             break;
//         case '8':

//             function precioMax(precioMaximo) {
//                 const filtrados = inventario.filter((producto) => producto.precio <= precioMaximo);
//                 console.table(filtrados);
//             }

//             let precioElegido = parseInt(prompt('Ingrese precio máximo aceptado (0 para volver):'));

//             while (precioElegido != 0) {

//                 precioMax(precioElegido);
//                 precioElegido = parseInt(prompt('Ingrese precio máximo aceptado (0 para volver):'));

//             }

//             precioMax(precioElegido);
//             break;
//         case '9':
//             const carro = [];

//             let opcionCarro = parseInt(prompt('Ingrese ID de producto: \n' + listadoProductos));
//             let totalPagar = 0;
//             let precioPagar = '';


//             while (opcionCarro != 0) {

//                 function encuentraProducto(productoID) {
//                     const seleccionado = inventario.find((producto1) => producto1.idProducto == productoID);
//                     console.table(seleccionado.precio);
//                     precioPagar = seleccionado.precio;
//                     carro.push(seleccionado);

//                 }
//                 encuentraProducto(opcionCarro);
//                 console.table(carro);

//                 totalPagar = totalPagar + precioPagar;

//                 opcionCarro = parseInt(prompt('Ingrese ID de producto: \n' + listadoProductos));
//             }

//             console.log(totalPagar);


//             let productosEnCarrito = '';
//             for (const producto of carro) {
//                 productosEnCarrito += producto.nombreProducto + '. Precio: $' + producto.precio + '\n';
//             }

//             let clienteRegistrado;
//             let pagar;
//             let iva = totalPagar * 0.20;

//             if (user == 'cliente') {
//                 clienteRegistrado = true;
//                 pagar = totalPagar - iva;
//             } else {
//                 clienteRegistrado = false;
//                 pagar = totalPagar;
//             }

//             function mensajeDePago(client, aPagar) {
//                 if (client == true) {
//                     alert('Su carrito contiene: ' + productosEnCarrito);
//                     alert('Su total es de: $' + totalPagar + '\nAplica descuento de IVA de: $' + iva + '\nSu precio final es de: $' + aPagar);
//                 } else {
//                     alert('Su carrito contiene: ' + productosEnCarrito);
//                     alert('Su total es de: $' + aPagar + '\nLos clientes registrados obtienen descuento del IVA.');
//                 }
//             }

//             mensajeDePago(clienteRegistrado, pagar);
//             break;
//         case '10':
//             let busqueda = prompt('Buscar...');

//             const buscado = inventario.filter((bus) => bus.nombreProducto.includes(busqueda));

//             console.table(buscado);
//             break;
//         default:
//             alert('Seleccione una opción válida');
//     }
//     opcionMenu = prompt("Menú: \n1) Listar productos femeninos. \n2) Listar productos masculinos. \n3) Listar de mayor precio menor precio. \n4) Listar producto de menor a mayor precio. \n5) Listar productos solo de barba. \n6) Listar productos solo de cabello. \n7)Listar todos los productos. \n8) Seleccionar precio máximo. \n9) Generar carrito. \n10) Buscar. \n0) SALIR.");

// }