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

console.table(carro);

const finalCarrito = document.getElementById('finalizar-carrito');
const carritoIcono = document.getElementById('cargar-carrito');


//-------------------MOSTRANDO QUE EL CARRO ESTA VACIO O BOTONES DE CARRITO ---------------------------
if (carro == 0) {
  console.log('CARRO VACIO')
  carritoVacio();
} else {
finalizarOvaciar();

}

//---------------FUNCION MOSTRAR QUE EL CARRO ESTÁ VACÍO 😢
function carritoVacio(){
  finalCarrito.innerHTML = '<h4>Nada por aquí... 🥀</h4>';
  carritoIcono.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  `;
  document.getElementById('el-total').innerText = '';
}

//-----------FUNCION FINALIZAR CARRITO O VACIARLO 😎
function finalizarOvaciar (){
  finalCarrito.innerHTML = `
  <h6 id="el-total">---</h6>
  <button id="vaciar-carrito" class="btn btn-primary" >Vaciar carrito</button>
  <button class="btn btn-primary">Finalizar compra</button>
  `;
  carritoIcono.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> 
  `;
  let vaciarCarrito = document.getElementById('vaciar-carrito');
  vaciarCarrito.addEventListener('click', deleteLocal);
}

// ---------------MOSTRAR CARRITO GUARDADO 🛒💾🛒---------------
const carritoMuestra = document.getElementById('carrito');




function carritoMostrar(listaCarrito) {

  for (const product of listaCarrito) {

    carritoMuestra.innerHTML += `
    <div class="card cardCarrito">
                <img src=${product.imagenProducto} class="card-img-top" alt=${product.nombreProducto}>
                <div class="card-body">
                  <h5 class="card-title">${product.nombreProducto}<br>$ ${product.precio}</h5>
                  <input class="card-input" type="number" id="cantidad" placeholder="${product.cantidadEnCarrito}">
                  <button id=${product.id} class="btn btn-primary no-carrito">Quitar</button>
                </div>
              </div>
    `;

  }

  const total = carro.reduce((accu, suma) => accu + suma.precio, 0);
  console.log ('¿Estoy sumando? --->' +total);
  document.getElementById('el-total').innerText = 'Total: $' +total;
  
  let botonEliminar = document.getElementsByClassName('no-carrito');


  for (const boton of botonEliminar) {
    boton.addEventListener('click', () => {

      carritoMuestra.innerHTML=''; 

      console.log('Se eliminará: ' + boton.id)

      const seleccionado = listaCarrito.find((producto) => producto.id == boton.id);


      eliminaDeCarrito(seleccionado);

    });
  }

}

carritoMostrar(carro);

// ---------------MOSTRAR PRODUCTOS EN PANTALLA 📺---------------
const sectionProductos = document.getElementById('tarjetasProductos');


function mostrarProductos(listadoProductos) {
  sectionProductos.innerHTML='';
  for (const product of listadoProductos) {
    sectionProductos.innerHTML += `
        <div class="card" >
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

      
      // seleccionado.cantidadEnCarrito += 1;

      finalizarOvaciar();
    });

  }

}

mostrarProductos(inventario);


// ---------------MOSTRAR CARRO QUE SE VA SELECCIONANDO 🛒---------------
function agregarAlCarrito(producto) {

  carro.push(producto);
  console.table(carro);

  // alert(`🛒 Al carro ${producto.nombreProducto}`);
  var cantidad = 1;
  carritoMuestra.innerHTML +=`
  <div class="card cardCarrito">
  <img src=${producto.imagenProducto} class="card-img-top" alt=${producto.nombreProducto}>
  <div class="card-body">
    <h5 class="card-title">${producto.nombreProducto}<br>$ ${producto.precio}</h5>
    <input class="card-input" type="number" id="" placeholder=${cantidad}>
    <button id=${producto.id} class="btn btn-primary no-carrito" >Quitar</button>
  </div>
</div>
  `;

  const total = carro.reduce((accu, suma) => accu + suma , 0);
  console.log ('¿Estoy sumando? --->' +total);
  document.getElementById('el-total').innerText = 'Total: $' +total;
  saveLocal();

  let botonEliminar = document.getElementsByClassName('no-carrito');


  for (const boton of botonEliminar) {
    boton.addEventListener('click', () => {

      carritoMuestra.innerHTML=''; 

      console.log('Se eliminará: ' + boton.id)

      const seleccionado = carro.find((producto) => producto.id == boton.id);


      eliminaDeCarrito(seleccionado);


    });
  }
}


// --------------FUNCION ELIMINAR DE CARRITO----------------

const eliminaDeCarrito = (idEli) => {
  let busca = carro.indexOf(idEli);
  carritoMuestra.innerHTML='';

  if (busca != -1) {
    carro.splice(busca, 1);
    console.table(carro);
  }
  saveLocal();
  carritoMostrar(carro);
}

// Prueba botón

// let boton = document.getElementById('no-carrito-3');

// // Ejemplo Funcion -------
// // boton.addEventListener('click', dispararAlert);
// // Funcion Flecha -----------
// boton.addEventListener('click', ()=>{alert('CLICK ;)')});


// ---------------LISTAR PRODUCTOS FEMENINOS 💁‍♀️💁‍♀️---------------
function listaFemenino() {

  function productoFemenino(feme) {
    const filtrados = inventario.filter((producto) => producto.femenino == feme);
    console.table(filtrados);

    mostrarProductos(filtrados);
  }

  productoFemenino(true);


}


var checkF = document.getElementById('dama');

checkF.addEventListener('click', function(){
if(checkF.checked){
  sectionProductos.innerHTML += '';
  listaFemenino();
}else{

  mostrarProductos(inventario);
}
});





// function listarMasculino() {

//   function productoFemenino(feme) {
//     const filtrados = inventario.filter((producto) => producto.masculino== feme);
//     console.table(filtrados);

//     mostrarProductos(filtrados);
//   }

//   productoFemenino(true);


// }

// var checkM = document.getElementById('caballero');

// checkM.addEventListener('click', function (){
//   if(checkF.checked){
//     sectionProductos.innerHTML += '';
//     listarMasculino();
//   }else{
  
//     mostrarProductos(inventario);
//   }
// });


// var miCheckbox = document.getElementById('miElementoCheckbox');
//   var msg = document.getElementById('msg');

//   alert('El valor inicial del checkbox es ' + miCheckbox.checked);

//   miCheckbox.addEventListener('click', function() {
//     if(miCheckbox.checked) {
//       msg.innerText = 'El elemento está marcado';
//     } else {
//       msg.innerText = 'Ahora está desmarcado';
//     }
//   });