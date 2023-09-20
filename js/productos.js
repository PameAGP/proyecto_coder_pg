
console.table(inventario);

let carro = [];
const carroRecuperado = JSON.parse(localStorage.getItem('carroRecuperado')) || [];
let carroMues = [];

console.table(carroRecuperado);

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
          <button id=${product.id} class="btn btn-primary alCarrito" onclick="location.reload()">Comprar</button>
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

    });

  }

}

function agregarAlCarrito(producto) {

  carro.push(producto);
  console.table(carro);

  carroMues = carro.concat(carroRecuperado);
  console.table(carroMues);

  saveLocal();

}

const total = carroRecuperado.reduce((accumulador, suma) => accumulador + suma.precio, 0);

console.log(total);

const finalCarrito = document.getElementById('finalizar-carrito');
const carritoIcono = document.getElementById('cargar-carrito');

if (carroRecuperado == 0) {
  console.log('CARRO VACIO')
  finalCarrito.innerHTML = '<h4>Nada por aquí... 🥀</h4>';
  carritoIcono.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  `;
} else {
  finalCarrito.innerHTML = `
  <h5>Total: $ ${total}</h5>
  <button id="vaciar-carrito" class="btn btn-primary" onclick="location.reload()">Vaciar carrito</button>
  <button class="btn btn-primary">Finalizar compra</button>
  `;
  carritoIcono.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  `;
}

const carritoL = document.getElementById('carrito');

function carritoRecuperado(listaCarrito) {

  for (const product of listaCarrito) {
    carritoL.innerHTML += `
    <div class="card cardCarrito">
                <img src=${product.imagenProducto} class="card-img-top" alt=${product.nombreProducto}>
                <div class="card-body">
                  <h5 class="card-title">${product.nombreProducto}<br>$ ${product.precio}</h5>
                  <input class="card-input" type="number" id="" placeholder="">
                  <button id=${product.id} class="btn btn-primary no-carrito" onclick="location.reload()">Quitar</button>
                </div>
              </div>
    `;
  }

  let botonEliminar = document.getElementsByClassName('no-carrito');

  for (const boton of botonEliminar) {
    boton.addEventListener('click', () => {

      console.log('Se eliminará: ' + boton.id)

      const seleccionado = listaCarrito.find((producto) => producto.id == boton.id);

      eliminaDeCarrito(seleccionado);

    });
  }

}

carritoRecuperado(carroRecuperado);






mostrarProductos(inventario);



const saveLocal = () => {
  localStorage.setItem('carroRecuperado', JSON.stringify(carroMues));
}

const deleteLocal = () => {
  localStorage.setItem('carroRecuperado', JSON.stringify(carroMues = []));
}

let vaciarCarrito = document.getElementById('vaciar-carrito');

vaciarCarrito.addEventListener('click', deleteLocal);

const eliminaDeCarrito = (idEli) => {
  let busca = carroRecuperado.indexOf(idEli);
  if (busca != -1) {
    carroRecuperado.splice(busca, 1);
    console.table(carroRecuperado);
    localStorage.setItem('carroRecuperado', JSON.stringify(carroRecuperado));
  }
}

// Prueba botón

// let boton = document.getElementById('no-carrito-3');

// // Ejemplo Funcion -------
// // boton.addEventListener('click', dispararAlert);
// // Funcion Flecha -----------
// boton.addEventListener('click', ()=>{alert('CLICK ;)')});

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