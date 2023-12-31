let sesionIniciada = JSON.parse(localStorage.getItem('sesionIniciada')) || [];

function traerProductosJSON() {
  const URLJSON = '../pseudo-BD.json';
  fetch(URLJSON)
    .then((resultado) => resultado.json())
    .then((pBD) => {
      inventario = pBD.productos
    })
    .catch((error) => console.log('Error', error));
}

traerProductosJSON();


const llamarInventario = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inventario)
    }, 500)
  })
}

let inventario = [];

llamarInventario()
  .then((resp) => {
    inventario = resp
    mostrarProductos(inventario)
  })

//------------------------ENCABEZADO Y PIE 🧑🦶---------------------------------

let headerIndex = document.getElementById('encabezado-index');
let headerSeccions = document.getElementById('encabezado');
let footerIndex = document.getElementById('pie-index');
let footerSeccions = document.getElementById('pie');

let secc1 = './';
let secc2 = '../'
let secc3 = './pages/'

encabezadoElegido(headerSeccions, secc2, secc1, secc1);
footerElegido(footerSeccions, secc1, secc2);

function encabezadoElegido(elegido, op1, op2, op3) {
  elegido.innerHTML = `
    <nav class="navbar navbar-expand-md navbar-dark bg-black">
    <div class="container-fluid">
      <div class="container containerBC">
      <p id="bienvenidaCliente" class='texto-blanco bienvenidoCliente'></p>
      </div>
      <a class="navbar-brand" href="${op1}index.html">Peluquería Nico's</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header bg-black">
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
              <ul id="sesionOp" class="dropdown-menu bg-black ">
                
              </ul>
            </li>
            
          </ul>

        </div>
      </div>
    </div>
  </nav>
    `;

  if (sesionIniciada.username == null) {
    document.getElementById('bienvenidaCliente').innerText = 'Sesión no iniciada.';
    document.getElementById('sesionOp').innerHTML = `
    <li><a class="dropdown-item negrita texto-blanco" href="${op3}sesion.html">Iniciar Sesión</a></li>
    <li><a class="dropdown-item negrita texto-blanco" href="${op3}sesion.html">Registrarme</a></li>
    `;
  } else {
    document.getElementById('bienvenidaCliente').innerText = `
        Bienvenido/a ${sesionIniciada.firstName} ${sesionIniciada.lastName}
        `;
    document.getElementById('sesionOp').innerHTML =`
    <li><a id="cerrarSesion" class="dropdown-item negrita texto-blanco" >Cerrar Sesión</a></li>
    `;

    let sd = document.getElementById('cerrarSesion');
    sd.addEventListener('click', cierraSesion)
  }

}

function cierraSesion() {
  localStorage.setItem('sesionIniciada', JSON.stringify(sesionIniciada=[]));
  location.reload();
}

function footerElegido(elegido, op1, op2) {
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
  carritoMuestra.innerHTML = '';
  carritoVacio();
  localStorage.setItem('carroRecuperado', JSON.stringify(carro = []));
}

//---------------FUNCION MOSTRAR QUE EL CARRO ESTÁ VACÍO 😢
function carritoVacio() {
  document.getElementById('el-total').innerText = '';
  finalCarrito.innerHTML = '<h4>Nada por aquí... 🥀</h4>';
  carritoIcono.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  `;

}

//-----------FUNCION FINALIZAR CARRITO O VACIARLO 😎
function finalizarOvaciar() {
  finalCarrito.innerHTML = `
  <button id="vaciar-carrito" class="btn btn-primary" onclick="location.reload()">Vaciar carrito</button>
  <button id="finalizar-carro" class="btn btn-primary">Finalizar compra</button>
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
    cartelFeliz('¡Gracias por su compra!', 'Una persona se porndrá en contacto con usted para coordinar la entrega.')
    localStorage.setItem('carroRecuperado', JSON.stringify(carro = []));
    setTimeout("redirecciona()", 2000);
  });
}

function redirecciona() {
  location.href = './productos.html';
}


//----------------- Función Mostrar Carrito  🛒💾🛒---------------
function carritoMostrar(listaCarrito) {
  carritoMuestra.innerHTML = '';
  for (const product of listaCarrito) {

    if (product.cantidadEnCarrito < 2) {
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
    } else {
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

  let total = carro.reduce((accu, suma) => accu + suma.precio * suma.cantidadEnCarrito, 0);
  let iva = total * 0.20;
  let totalConDescuento = total - iva;

  if (carro.length == 0) {
    document.getElementById('el-total').innerHTML= '';
  } else {
    if(sesionIniciada.username== null){
      document.getElementById('el-total').innerHTML= `
      <h5>Total: $ ${total}</h5>
      <h5>No aplica descuento.</h5>
      `;
    } else {
      document.getElementById('el-total').innerHTML= `
      <h5>Total: $ ${total}</h5>
      <h5>Descuento: $ ${iva.toFixed(2)}</h5>
      <h5>Precio final: $ ${totalConDescuento.toFixed(2)}</h5>
      `;
    }

    }
    



  let botonEliminar = document.getElementsByClassName('no-carrito');

  for (const boton of botonEliminar) {
    boton.addEventListener('click', () => {

      const seleccionado = listaCarrito.find((producto) => producto.id == boton.id);

      eliminaDeCarrito(seleccionado);

      if (carro.length == 0) {
        carritoVacio();
      } else {
        finalizarOvaciar();

      }
      saveLocal();

    });

  }

  let botonUnoMenos = document.getElementsByClassName('uno-menos');

  for (const boton of botonUnoMenos) {
    boton.addEventListener('click', () => {

      carritoMuestra.innerHTML = '';

      const seleccionado = listaCarrito.find((producto) => producto.id == boton.id);

      quitarUnoDelCarro(seleccionado);

      if (carro.length == 0) {
        carritoVacio();
      } else {
        finalizarOvaciar();

      }

    });
  }

  let botonUnoMas = document.getElementsByClassName('uno-mas');

  for (const boton of botonUnoMas) {
    boton.addEventListener('click', () => {

      carritoMuestra.innerHTML = '';

      const seleccionado = listaCarrito.find((producto) => producto.id == boton.id);

      subeUnoDelCarrito(seleccionado);

    });
  }


}

//------------Quita uno ❌🧴
function quitarUnoDelCarro(producto) {

  if (producto.cantidadEnCarrito > 1) {
    carro.map((prod) => {
      if (prod.id === producto.id) {
        prod.cantidadEnCarrito--;
      }
      saveLocal();
    });
  } else {
    eliminaDeCarrito(producto);
  }

  carritoMostrar(carro);

}

//-----------------Agrega uno ⬆️⬆️🧴
function subeUnoDelCarrito(producto) {

  if (producto.cantidadEnCarrito < producto.stock) {
    carro.map((prod) => {
      if (prod.id === producto.id) {
        prod.cantidadEnCarrito++;
      }
      saveLocal();
    });
  } else {
    cartelNoMasStock(producto);
  }

  carritoMostrar(carro);
}

// --------------FUNCION ELIMINAR DE CARRITO ❌❌❌----------------
const eliminaDeCarrito = (idEli) => {

  carritoMuestra.innerHTML = '';
  let busca = carro.indexOf(idEli);

  while (idEli.cantidadEnCarrito > 1) {
    idEli.cantidadEnCarrito--;

  }


  if (busca != -1) {
    carro.splice(busca, 1);
    saveLocal();
  }

  carritoMostrar(carro);

}

// ---------------MOSTRAR PRODUCTOS EN PANTALLA 📺---------------

const sectionProductos = document.getElementById('tarjetasProductos');

const mostrarProductos = (listadoProductos) => {
  sectionProductos.innerHTML = '';
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

  var stock = 1;
  carro.map((prod) => {
    if (prod.id === producto.id) {
      stock = prod.cantidadEnCarrito;
    }
  });

  if (repetido == true && stock < producto.stock) {
    carro.map((prod) => {
      if (prod.id === producto.id) {
        prod.cantidadEnCarrito++;
        stock = prod.cantidadEnCarrito;
        saveLocal();
        carritoMostrar(carro);
        cartelAgregadoCarrito(producto);
      }
    });
  } else if (repetido == false && stock < producto.stock) {
    carro.push(producto);
    saveLocal();
    carritoMostrar(carro);
    cartelAgregadoCarrito(producto);
  } else {
    cartelNoMasStock(producto);
  }
}



const prodFemeninos = [];
const prodMasculinos = [];
const prodBarba = [];
const prodCabello = [];

llamarInventario()
  .then((resp) => {
    inventario = resp
    //------------------Encuentra productos femeninos 💁‍♀️💁‍♀️
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].femenino == true) {
        prodFemeninos.push(inventario[i]);
      }
    }
    //---------------Filtra productos masculinos 👨‍🦱👨‍🦱
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].masculino == true) {
        prodMasculinos.push(inventario[i]);
      }
    }
    //---------------Filtra productos solo de barba 👨‍🦱
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].barba == true) {
        prodBarba.push(inventario[i]);
      }
    }
    //---------------Filtra productos solo de cabello 💇‍♀️
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].cabello == true) {
        prodCabello.push(inventario[i]);
      }
    }
  })

//-------------Filtra por precio ↗️↗️↘️↘️

function precioMaxDes(array, precioMaximo, precioMinimo) {
  const filtrados = array.filter((producto) => producto.precio <= precioMaximo && producto.precio >= precioMinimo);

  filtrados.sort((x, y) => y.precio - x.precio);

  mostrarProductos(filtrados);

}

function precioMaxAs(array, precioMaximo, precioMinimo) {
  const filtrados = array.filter((producto) => producto.precio <= precioMaximo && producto.precio >= precioMinimo);

  filtrados.sort((x, y) => x.precio - y.precio);

  if (filtrados.length == 0) {
    sectionProductos.innerHTML = (`
      <h3 class="cartel-no-hay">No se encontraron productos 😓</h3>
      `);
  } else {
    mostrarProductos(filtrados);
  }

}

//--------------------FUNCIONES con Carteles 💬💬➕➕------------------

function cartelAgregadoCarrito(producto) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    background: '#191919'
  })

  Toast.fire({
    icon: 'success',
    title: 'Agregando al carrito: ' + producto.nombreProducto + '.'
  })
}

function cartelNoMasStock(producto) {
  Swal.fire({
    icon: 'error',
    title: '¡Sin Stock!',
    text: 'No hay más stock del producto seleccionado: ' + producto.nombreProducto,
  })
}

function cartelConAdvertencia(titleError, descripcionError) {
  Swal.fire({
    icon: 'error',
    title: titleError,
    text: descripcionError
  })
}

function cartelFeliz (titulo, descripcion){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: titulo,
    text: descripcion,
    showConfirmButton: false,
    timer: 1500
  })
}

function checkAll(opcion) {
  document.querySelectorAll('#f-categoria input[type=checkbox]').forEach(function (checkElement) {
    checkElement.checked = false;
    opcion.checked = true;
    checkAs.checked = false;
    checkDes.checked = false;
  });
}

function desmarcaTodo() {
  document.querySelectorAll('#f-categoria input[type=checkbox]').forEach(function (checkElement) {
    checkElement.checked = false;
    checkAs.checked = false;
    checkDes.checked = false;
  });
}

function filtro(opcion, opcion2) {
  opcion.addEventListener('click', function () {
    if (opcion.checked) {
      sectionProductos.innerHTML = '';
      mostrarProductos(opcion2);
      checkAll(opcion);
    } else {
      mostrarProductos(inventario);
      checkAs.checked = false;
      checkDes.checked = false;
    }
  });
}

function mayorMenor(array) {
  array.sort((x, y) => y.precio - x.precio);
  mostrarProductos(array);
}

function menorMayor(array) {
  array.sort((x, y) => x.precio - y.precio);
  mostrarProductos(array);
}