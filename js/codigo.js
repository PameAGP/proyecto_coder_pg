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






// const productosEnPromo = [];

// productosEnPromo.push(
//   producto5,
//   producto3,
//   producto7,
// );

// console.table (productosEnPromo);

// let lpm = document.getElementById('destacadisimo');

// for (const desta of productosEnPromo){
//   lpm.innerHTML +=  `
//   <div class="card" >
//   <img src=${desta.imagenProducto} class="card-img-top" alt=${desta.nombreProducto}>
//   <div class="card-body">
//     <h5 class="card-title">${desta.nombreProducto}</h5>
//     <p class="card-text card-text-producto">$ ${desta.precio}</p>
//     <a href='' target="_blank" class="btn btn-primary">Comprar</a>
//   </div>
// </div>
// `;
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