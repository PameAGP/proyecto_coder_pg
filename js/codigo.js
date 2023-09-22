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
  false,
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
  false,
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
