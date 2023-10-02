

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



mostrarProductos(inventario);


// ---------------LISTAR PRODUCTOS--------------

//---------------Coloca productos femeninos 💁‍♀️💁‍♀️

var checkF = document.getElementById('dama');

filtro (checkF, prodFemeninos)

//---------------Coloca productos masculinos 👨‍🦱👨‍🦱

var checkM = document.getElementById('caballero');

filtro (checkM, prodMasculinos);

//---------------Coloca productos solo de barba 👨‍🦱

var checkB = document.getElementById('barba');

filtro (checkB, prodBarba);

//---------------Coloca productos solo de cabello 💇‍♀️

var checkCabello = document.getElementById('cabello');

filtro (checkCabello, prodCabello);

//----------------Coloca productos descendentemente ↘️

var checkDes = document.getElementById('descendente');

checkDes.addEventListener('click', function(){
  checkAs.checked = false;
  if (checkDes.checked){
    if(checkF.checked == true ){
      mayorMenor (prodFemeninos);
    }else if (checkM.checked == true){
      mayorMenor (prodMasculinos);
    } else if (checkB.checked == true){
      mayorMenor (prodBarba);
      mostrarProductos(prodBarba);
    } else if (checkCabello.checked == true){
      mayorMenor (prodCabello);
    } else{
    mayorMenor(inventario);
    }

  }else{
    inventario.sort((x, y) => x.id - y.id);
    console.table(inventario);
    mostrarProductos(inventario);
    document.querySelectorAll('#f-categoria input[type=checkbox]').forEach(function(checkElement) {
      checkElement.checked = false;
  });
  }
});

//----------------Coloca productos Ascendentemente ↗️

var checkAs = document.getElementById('ascendente');

checkAs.addEventListener('click', function(){
  if (checkAs.checked){
    checkDes.checked = false;
    if(checkF.checked == true ){
      menorMayor (prodFemeninos);
    }else if (checkM.checked == true){
      menorMayor (prodMasculinos);
    } else if (checkB.checked == true){
      menorMayor (prodBarba);
    } else if (checkCabello.checked == true){
      menorMayor (prodCabello);
    } else{
    menorMayor(inventario);
    }

  }else{
    inventario.sort((x, y) => x.id - y.id);
    console.table(inventario);
    mostrarProductos(inventario);
    document.querySelectorAll('#f-categoria input[type=checkbox]').forEach(function(checkElement) {
      checkElement.checked = false;
  });
  }
});


//-------------Filtra por precio  

var botonPreciosElegidos = document.getElementById ('b-elegidos-precios');
var botonVolver = document.getElementById ('b-elegidos-volver');

botonPreciosElegidos.addEventListener('click', () => {

var max = parseInt(document.getElementById ('precioMaximo').value);
var min = parseInt(document.getElementById ('precioMinimo').value);

  if (checkDes.checked == true) {
    if (checkF.checked == true){
      precioMaxDes(prodFemeninos, max, min);
    } else if (checkM.checked == true){
      precioMaxDes(prodMasculinos, max, min);
    } else if (checkB.checked == true){
      precioMaxDes(prodBarba, max, min);
    } else if(checkCabello.checked == true){
      precioMaxDes(prodCabello, max, min);
    }else{
      precioMaxDes(inventario,max,min);
    } 
  } else if (checkAs.checked == true){
    if (checkF.checked == true){
      precioMaxAs(prodFemeninos, max, min);
    } else if (checkM.checked == true){
      precioMaxAs(prodMasculinos, max, min);
    } else if (checkB.checked == true){
      precioMaxAs(prodBarba, max, min);
    } else if(checkCabello.checked == true){
      precioMaxAs(prodCabello, max, min);
    }else{
      precioMaxAs(inventario,max,min);
    }
  } else {
    precioMaxAs(inventario, max, min);
  }
  
});

botonVolver.addEventListener ('click', () => {
  document.getElementById('precioMaximo').value='';
  document.getElementById('precioMinimo').value='';
  sectionProductos.innerHTML += '';
  desmarcaTodo();
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

