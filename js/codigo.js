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
  'https://http2.mlstatic.com/D_NQ_NP_678171-MLU45541628787_042021-O.webp',
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

const producto11 = new producto(
  11,
  'Aceite para Barba brillante y suave',
  'https://http2.mlstatic.com/D_NQ_NP_2X_686641-MLU48054352893_102021-F.webp',
  '',
  359,
  true,
  false,
  true,
  true,
  false,
  20,
  1
);

const producto12 = new producto(
  12,
  'Oleo para Braba Jhony Barber',
  'https://http2.mlstatic.com/D_NQ_NP_2X_700713-MLU70079574267_062023-F.webp',
  '',
  490,
  true,
  false,
  true,
  true,
  false,
  12,
  1
);

const producto13 = new producto(
  13,
  'Bálsamo y cepillo para Barba - Set',
  'https://http2.mlstatic.com/D_NQ_NP_2X_746938-MLU52612611363_112022-F.webp',
  '',
  590,
  true,
  false,
  true,
  true,
  false,
  3,
  1
);

const producto14 = new producto(
14,
'Shampoo para barba y bigote',
'https://http2.mlstatic.com/D_NQ_NP_2X_763111-MLU32733123849_112019-F.webp',
'',
270,
true,
false,
true,
true,
false,
55,
1
);

const producto15 = new producto (
  15,
  'Cera para el cabello en gel Barber Style',
  'https://http2.mlstatic.com/D_NQ_NP_2X_610541-MLU48041981231_102021-F.webp',
  '',
  350,
  true,
  false,
  true,
  false,
  true,
  33,
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
  producto10,
  producto11,
  producto12,
  producto13,
  producto14,
  producto15
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

//------------------------ENCABEZADO Y PIE 🧑🦶---------------------------------

let headerIndex = document.getElementById('encabezado-index');
let headerSeccions = document.getElementById('encabezado');
let footerIndex = document.getElementById('pie-index');
let footerSeccions = document.getElementById ('pie');

let secc1 = './';
let secc2 = '../'
let secc3 = './pages/'

encabezadoElegido(headerSeccions, secc2, secc1, secc1);
footerElegido (footerSeccions, secc1, secc2);

function encabezadoElegido (elegido, op1, op2, op3){
    elegido.innerHTML=`
    <nav class="navbar navbar-expand-md navbar-dark bg-black">
    <div class="container-fluid">
      <a class="navbar-brand" href="./index.html">Peluquería Nico's</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body bg-black">
          <ul class="navbar-nav flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="${op1}index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${op2}productos.html">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${op2}contacto.html">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${op2}sob_nosotros.html">Sobre nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${op2}extras.html">Extras</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Usuario
              </a>
              <ul class="dropdown-menu bg-black ">
                <li><a class="dropdown-item negrita texto-blanco" href="${op3}sesion.html">Iniciar Sesión</a></li>
                <li><a class="dropdown-item negrita texto-blanco" href="${op3}sesion.html">Registrarme</a></li>
              </ul>
            </li>
            
          </ul>

        </div>
      </div>
    </div>
  </nav>
    `;

}

function footerElegido (elegido, op1, op2){
elegido.innerHTML = `
<div class="container  footer-cont">

      <div class="footer-info">
        <h5>Horario de atención</h5>
        <p>Lunes a Viernes: <br>
          10:00 hs a 19:00 hs <br>
          Sábado <br>
          10:00 hs a 14:30 hs
        </p>
      </div>

      <div class="footer-info">
        <h5>¿Consultas?</h5>
        <p><a href="${op1}contacto.html">Llena el formulario de contacto haciendo click aquí</a></p>
      </div>

      <div class="footer-info">
        <h5>Dirección:</h5>
        <p>Algun Lado 3399 esquina Una Esquina</p>
      </div>

      <div class="footer-info">
        <h5>Redes Sociales</h5>
        <div class="redes-sociales">
          <a href="https://es-la.facebook.com/" target="_blank">
            <img src="${op2}img/facebook.png" alt="facebook">
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="${op2}img/instagram.png" alt="instagram">
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="${op2}img/youtube.png" alt="youtube">
          </a>
          <a href="https://twitter.com/?lang=es" target="_blank">
            <img src="${op2}img/Twitter_Logo.png" alt="Twitter">
          </a>
        </div>
      </div>

    </div>
`;
}



// -------------------LLAMANDO AL CARRITO GUARDADO 🛒💾-----------------------------
let carro = JSON.parse(localStorage.getItem('carroRecuperado')) || [];


// ---------------FUNCIONES QUE QUITAN O AGREGAN AL STORAGE---------------

const saveLocal = () => {
  localStorage.setItem('carroRecuperado', JSON.stringify(carro));
}

const deleteLocal = () => {
  carritoMuestra.innerHTML='';
  carritoVacio();
  localStorage.setItem('carroRecuperado', JSON.stringify(carro = []));
}

//---------------FUNCION MOSTRAR QUE EL CARRO ESTÁ VACÍO 😢
function carritoVacio(){
  document.getElementById('el-total').innerText = '';
  finalCarrito.innerHTML = '<h4>Nada por aquí... 🥀</h4>';
  carritoIcono.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  `;

}

//-----------FUNCION FINALIZAR CARRITO O VACIARLO 😎
function finalizarOvaciar (){
  finalCarrito.innerHTML = `
  <button id="vaciar-carrito" class="btn btn-primary" onclick="location.reload()">Vaciar carrito</button>
  <button id="finalizar-carro" class="btn btn-primary" onclick="location.href='./finalDeCompra.html'">Finalizar compra</button>
  `;
  carritoIcono.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> 
  `;
  let vaciarCarrito = document.getElementById('vaciar-carrito');
  vaciarCarrito.addEventListener('click', deleteLocal);

  let finalizarCarro = document.getElementById('finalizar-carro');
  finalizarCarro.addEventListener('click', () => {
    // deleteLocal();
    // finalizarCompra();
  });
}

function finalizarCompra (){
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '¡Gracias por tu compra!',
    showConfirmButton: false,
    timer: 1500
  })
}

//----------------- Función Mostrar Carrito  🛒💾🛒---------------
function carritoMostrar(listaCarrito) {
  carritoMuestra.innerHTML='';
  for (const product of listaCarrito) {

    if (product.cantidadEnCarrito < 2){
      console.log('Cartel 1');
      carritoMuestra.innerHTML += `
      <div class="card cardCarrito">
                  <img src=${product.imagenProducto} class="card-img-top" alt=${product.nombreProducto}>
                  <div class="card-body">
                    <h5 class="card-title">${product.nombreProducto}<br>$ ${product.precio * product.cantidadEnCarrito}</h5>
                    <div class="quita">
                      <button id=${product.id} class="btn btn-primary uno-menos">-</button>
                      <label class="negrita" for=""> ${product.cantidadEnCarrito} </label>
                      <button id=${product.id} class="btn btn-primary uno-mas">+</button>
                    </div>
                    <button id=${product.id} class="btn-quita btn btn-primary no-carrito">Quitar</button>
                  </div>
                </div>
      `;
    }else{
      carritoMuestra.innerHTML += `
      <div class="card cardCarrito">
                  <img src=${product.imagenProducto} class="card-img-top" alt=${product.nombreProducto}>
                  <div class="card-body">
                  <h5 class="card-title">${product.nombreProducto}</h5>
                  <h5>$ ${product.precio * product.cantidadEnCarrito}</h5>
                  <h6 class="card-precio">Precio unitario: $ ${product.precio}</h6>
                    <div class="quita">
                    <button id=${product.id} class="btn btn-primary uno-menos">-</button>
                    <label class="negrita" for=""> ${product.cantidadEnCarrito} </label>
                    <button id=${product.id} class="btn btn-primary uno-mas">+</button>
                  </div>
                    <button id=${product.id} class="btn-quita btn btn-primary no-carrito">Quitar</button>
                  </div>
                </div>
      `;
    }

 
  }

  const total = carro.reduce((accu, suma) => accu + suma.precio * suma.cantidadEnCarrito , 0);

  if(carro.length == 0){
    document.getElementById('el-total').innerText = '';
  }else{
    document.getElementById('el-total').innerText = 'Total: $' +total;
  }
  

  
  let botonEliminar = document.getElementsByClassName('no-carrito');

  for (const boton of botonEliminar) {
    boton.addEventListener('click', () => {

      console.log('Se eliminó: ' + boton.id)

      const seleccionado = listaCarrito.find((producto) => producto.id == boton.id);

      eliminaDeCarrito(seleccionado);

      if (carro.length == 0) {
        console.log('CARRO VACIO')
        carritoVacio(); 
      } else {
      finalizarOvaciar();
      
      }
      saveLocal();

    });

  }

  let botonUnoMenos = document.getElementsByClassName ('uno-menos');

  for (const boton of botonUnoMenos) {
    boton.addEventListener('click', () => {
      
      carritoMuestra.innerHTML ='';

      console.log ('Uno menos en: ' +boton.id)

      const seleccionado = listaCarrito.find((producto) => producto.id == boton.id);

      console.log (seleccionado.cantidadEnCarrito);

      quitarUnoDelCarro(seleccionado);

      if (carro.length == 0) {
        console.log('CARRO VACIO')
        carritoVacio();
      } else {
      finalizarOvaciar();
      
      }

    });
  }

  let botonUnoMas = document.getElementsByClassName ('uno-mas');

  for (const boton of botonUnoMas) {
    boton.addEventListener('click', () => {
      
      carritoMuestra.innerHTML ='';

      console.log ('Uno mas en: ' +boton.id)

      const seleccionado = listaCarrito.find((producto) => producto.id == boton.id);

      console.log (seleccionado.cantidadEnCarrito);

      subeUnoDelCarrito(seleccionado);

    });
  }
  

}

//------------Quita uno ❌🧴
function quitarUnoDelCarro (producto){

  console.log (producto.id);
  console.log (producto.cantidadEnCarrito);

  if (producto.cantidadEnCarrito > 1){
    console.log('Menos uno')
    carro.map((prod) => {
      if (prod.id === producto.id){
        prod.cantidadEnCarrito--;
        // console.log (prod.cantidadEnCarrito);
      }
      console.log (producto.cantidadEnCarrito);
      saveLocal();
    });
  }else{
    eliminaDeCarrito(producto);
  }

  carritoMostrar (carro);

}

//-----------------Agrega uno ⬆️⬆️🧴
function subeUnoDelCarrito (producto){

  if (producto.cantidadEnCarrito < producto.stock){
    console.log('Mas uno' +producto.cantidadEnCarrito);
    carro.map((prod) => {
      if (prod.id === producto.id){
        prod.cantidadEnCarrito++;
      }
      console.log (producto.cantidadEnCarrito);
      saveLocal();
    });
  }else{
    cartelNoMasStock(producto);
    // carritoMostrar(carro);
  }

  carritoMostrar (carro);
}

// --------------FUNCION ELIMINAR DE CARRITO ❌❌❌----------------
const eliminaDeCarrito = (idEli) => {
  
  carritoMuestra.innerHTML='';
  let busca = carro.indexOf(idEli);

  while(idEli.cantidadEnCarrito > 1 ){
    // console.log(idEli.cantidadEnCarrito);
    idEli.cantidadEnCarrito --;

  }

  
  if (busca != -1) {
    carro.splice(busca, 1);
    console.table(carro);
    saveLocal();
  }

  carritoMostrar(carro);

}

// ---------------MOSTRAR PRODUCTOS EN PANTALLA 📺---------------

function mostrarProductos(listadoProductos) {
  sectionProductos.innerHTML='';
  for (const product of listadoProductos) {
    sectionProductos.innerHTML += `
        <div class="card card-animacion" >
        <img src=${product.imagenProducto} class="card-img-top" alt=${product.nombreProducto}>
        <div class="card-body">
          <h5 class="card-title">${product.nombreProducto}</h5>
          <p class="card-text card-text-producto">$ ${product.precio}</p>
          <button id=${product.id} class="btn btn-primary alCarrito">Comprar</button>
        </div>
      </div>
      `;
  }



  let botones = document.getElementsByClassName('alCarrito');

  for (const boton of botones) {
    boton.addEventListener('click', () => {

          console.log('Se clickeo boton ' + boton.id)

      const seleccionado = listadoProductos.find((producto) =>
        producto.id == boton.id);

      agregarAlCarrito(seleccionado);

      finalizarOvaciar();

    });

  }

}

// ---------------CARRO QUE SE VA SELECCIONANDO 🛒---------------
function agregarAlCarrito(producto) {
  
  const repetido = carro.some((prodRepetido) => prodRepetido.id === producto.id);


  console.log(producto.stock);
  
  var stock = 1;
  carro.map((prod) => {
    if (prod.id === producto.id){
      stock = prod.cantidadEnCarrito;
    }
  });

  if (repetido == true && stock < producto.stock){    
    carro.map((prod) => {
      if (prod.id === producto.id){
        prod.cantidadEnCarrito++;
        stock = prod.cantidadEnCarrito;
        saveLocal();
        carritoMostrar(carro);
        cartelAgregadoCarrito(producto);
      }
    });
  }else if (repetido == false && stock < producto.stock) {
    carro.push(producto);
    console.table(carro);
    saveLocal();
    carritoMostrar(carro);
    cartelAgregadoCarrito(producto);
  } else {
    // alert('¡Lo sentimos! ¡No hay más stock del producto seleccionado! ❌');
    cartelNoMasStock(producto);
  }




}

// buscaStock ()

// function buscaStock (parametro){
//   const filtrados = carro.filter((producto) => producto.cantidadEnCarrito == parametro);
//   console.table(filtrados);
// }

//------------------Encuentra productos femeninos 💁‍♀️💁‍♀️
function listaFemenino() {

  function filtraProductos(opcion) {
    const filtrados = inventario.filter((producto) => producto.femenino == opcion);
    // console.table(filtrados);

    mostrarProductos(filtrados);
  }

  filtraProductos(true);

}

//---------------Filtra productos masculinos 👨‍🦱👨‍🦱

function listaMasculino() {

  function filtraProductos(opcion) {
    const filtrados = inventario.filter((producto) => producto.masculino == opcion);
    console.table(filtrados);

    mostrarProductos(filtrados);
  }

  filtraProductos(true);

}

//---------------Filtra productos solo de barba 👨‍🦱

function listaBarba() {

  function filtraProductos(opcion) {
    const filtrados = inventario.filter((producto) => producto.barba == opcion);
    console.table(filtrados);

    mostrarProductos(filtrados);
  }

  filtraProductos(true);

}

//---------------Filtra productos solo de cabello 💇‍♀️

function listaCabello() {

  function filtraProductos(opcion) {
    const filtrados = inventario.filter((producto) => producto.cabello == opcion);
    console.table(filtrados);

    mostrarProductos(filtrados);
  }

  filtraProductos(true);

}

//-------------Filtra por precio


function precioMax(precioMaximo, precioMinimo) {
  const filtrados = inventario.filter((producto) => producto.precio <= precioMaximo && producto.precio >= precioMinimo);
  console.table(filtrados);
  filtrados.sort((x, y) => y.precio - x.precio);
  
  mostrarProductos(filtrados);
  
  }

  //--------------------FUNCION Cartel agregado al carrito 🖥➕➕------------------

  function cartelAgregadoCarrito(producto){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      background: '#191919'
        })
    
    Toast.fire({
      icon: 'success',
      title: 'Agregando al carrito: ' +producto.nombreProducto+'.'
    })
  }

  function cartelNoMasStock (producto){
    Swal.fire({
      icon: 'error',
      title: '¡Sin Stock!',
      text: 'No hay más stock del producto seleccionado: ' +producto.nombreProducto,
      // footer: '<a href="">Why do I have this issue?</a>'
    })
  }