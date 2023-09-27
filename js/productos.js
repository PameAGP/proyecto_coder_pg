

console.table(inventario);

// console.log( carro.length );

// console.table(carro);

const finalCarrito = document.getElementById('finalizar-carrito');
const carritoIcono = document.getElementById('cargar-carrito');


//-------------------MOSTRANDO QUE EL CARRO ESTA VACIO O BOTONES DE CARRITO ---------------------------
if (carro.length == 0) {
  console.log('CARRO VACIO')
  carritoVacio();
} else {
finalizarOvaciar();

}
// ---------------MOSTRAR CARRITO GUARDADO 🛒💾🛒---------------

const carritoMuestra = document.getElementById('carrito');

carritoMostrar(carro);

// ---------------MOSTRAR PRODUCTOS EN PANTALLA 📺---------------

const sectionProductos = document.getElementById('tarjetasProductos');

mostrarProductos(inventario);


// ---------------LISTAR PRODUCTOS--------------

//---------------Coloca productos femeninos 💁‍♀️💁‍♀️

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
