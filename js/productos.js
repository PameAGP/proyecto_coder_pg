// ---------------FUNCIONES QUE QUITAN O AGREGAN AL STORAGE---------------

const saveLocal = () => {
  localStorage.setItem('carroRecuperado', JSON.stringify(carro));
}

const deleteLocal = () => {
  carritoMuestra.innerHTML='';
  carritoVacio();
  localStorage.setItem('carroRecuperado', JSON.stringify(carro = []));
}

console.table(inventario);


// -------------------LLAMANDO AL CARRITO GUARDADO 🛒💾-----------------------------
let carro = JSON.parse(localStorage.getItem('carroRecuperado')) || [];

console.log( carro.length );

console.table(carro);

const finalCarrito = document.getElementById('finalizar-carrito');
const carritoIcono = document.getElementById('cargar-carrito');


//-------------------MOSTRANDO QUE EL CARRO ESTA VACIO O BOTONES DE CARRITO ---------------------------
if (carro.length == 0) {
  console.log('CARRO VACIO')
  carritoVacio();
} else {
finalizarOvaciar();

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
  <h6 id="el-total">''</h6>
  <button id="vaciar-carrito" class="btn btn-primary" >Vaciar carrito</button>
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
    deleteLocal();
    finalizarCompra();
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

// ---------------MOSTRAR CARRITO GUARDADO 🛒💾🛒---------------

const carritoMuestra = document.getElementById('carrito');

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

carritoMostrar(carro);

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
    alert('¡Lo sentimos! ¡No hay más stock del producto seleccionado ❌');
    carritoMostrar(carro);
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
const sectionProductos = document.getElementById('tarjetasProductos');

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

mostrarProductos(inventario);


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
      }
    });
  }else if (repetido == false && stock < producto.stock) {
    carro.push(producto);
    console.table(carro);
    saveLocal();
    carritoMostrar(carro);
  } else {
    alert('¡Lo sentimos! ¡No hay más stock del producto seleccionado! ❌');
  }




}

buscaStock ()

function buscaStock (parametro){
  const filtrados = carro.filter((producto) => producto.cantidadEnCarrito == parametro);
  console.table(filtrados);
}



// ---------------LISTAR PRODUCTOS--------------

//---------------Coloca productos femeninos 💁‍♀️💁‍♀️
function listaFemenino() {

  function filtraProductos(opcion) {
    const filtrados = inventario.filter((producto) => producto.femenino == opcion);
    console.table(filtrados);

    mostrarProductos(filtrados);
  }

  filtraProductos(true);

}


var checkF = document.getElementById('dama');

checkF.addEventListener('click', function(){
if(checkF.checked){
  sectionProductos.innerHTML = '';
  listaFemenino();
}else{
  mostrarProductos(inventario);
}
});

//---------------Coloca productos masculinos 👨‍🦱👨‍🦱

function listaMasculino() {

  function filtraProductos(opcion) {
    const filtrados = inventario.filter((producto) => producto.masculino == opcion);
    console.table(filtrados);

    mostrarProductos(filtrados);
  }

  filtraProductos(true);

}

var checkM = document.getElementById('caballero');

checkM.addEventListener('click', function(){
  if (checkM.checked){
    sectionProductos.innerHTML += '';
    listaMasculino();
  }else{
    mostrarProductos(inventario);
  }
});

//---------------Coloca productos solo de barba 👨‍🦱

function listaBarba() {

  function filtraProductos(opcion) {
    const filtrados = inventario.filter((producto) => producto.barba == opcion);
    console.table(filtrados);

    mostrarProductos(filtrados);
  }

  filtraProductos(true);

}

var checkB = document.getElementById('barba');
checkB.addEventListener('click', function(){
  if (checkB.checked){
    sectionProductos.innerHTML += '';
    listaBarba();
  }else{
    mostrarProductos(inventario);
  }
});

//---------------Coloca productos solo de cabello 💇‍♀️

function listaCabello() {

  function filtraProductos(opcion) {
    const filtrados = inventario.filter((producto) => producto.cabello == opcion);
    console.table(filtrados);

    mostrarProductos(filtrados);
  }

  filtraProductos(true);

}

var checkCabello = document.getElementById('cabello');
checkCabello.addEventListener('click', function(){
  if (checkCabello.checked){
    sectionProductos.innerHTML += '';
    listaCabello();
  }else{
    mostrarProductos(inventario);
  }
});

//----------------Coloca productos descendentemente 
var checkDes = document.getElementById('descendente');

checkDes.addEventListener('click', function(){
  if (checkDes.checked){
    sectionProductos.innerHTML += '';
    inventario.sort((x, y) => y.precio - x.precio);
    console.table(inventario);
    mostrarProductos(inventario);
  }else{
    inventario.sort((x, y) => x.id - y.id);
    console.table(inventario);
    mostrarProductos(inventario);
  }
});

//----------------Coloca productos Ascendentemente
var checkAs = document.getElementById('ascendente');

checkAs.addEventListener('click', function(){
  if (checkAs.checked){
    sectionProductos.innerHTML += '';
    inventario.sort((x, y) => x.precio - y.precio);
    console.table(inventario);
    mostrarProductos(inventario);
  }else{
    inventario.sort((x, y) => x.id - y.id);
    console.table(inventario);
    mostrarProductos(inventario);
  }
});

//-------------Filtra por precio

var botonPreciosElegidos = document.getElementById ('b-elegidos-precios');
var botonVolver = document.getElementById ('b-elegidos-volver');

botonPreciosElegidos.addEventListener('click', () => {

var max = parseInt(document.getElementById ('precioMaximo').value);
var min = parseInt(document.getElementById ('precioMinimo').value);
  console.log (max, min);
  
  sectionProductos.innerHTML='';

  precioMax(max, min);

});

function precioMax(precioMaximo, precioMinimo) {
const filtrados = inventario.filter((producto) => producto.precio <= precioMaximo && producto.precio >= precioMinimo);
console.table(filtrados);
filtrados.sort((x, y) => y.precio - x.precio);

mostrarProductos(filtrados);

}

botonVolver.addEventListener ('click', () => {
  document.getElementById('precioMaximo').value='';
  document.getElementById('precioMinimo').value='';
  sectionProductos.innerHTML += '';
  mostrarProductos(inventario);
});

//----------------Busqueda 🔍

var botonBuscar = document.getElementById('buscar');

botonBuscar.addEventListener('click', () => {

  var busqueda = document.getElementById('busqueda').value;

  console.log (busqueda);

  const buscado = inventario.filter((bus) => bus.nombreProducto.includes(busqueda));

  console.log(buscado);

      sectionProductos.innerHTML='';
    mostrarProductos(buscado);


});

