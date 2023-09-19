  console.table(inventario);
  
  const carro=[];
  
  const sectionProductos = document.getElementById('tarjetasProductos');
  
  function mostrarProductos (listadoProductos){
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
    for (const boton of botones){
      boton.addEventListener('click', ()=> {
        console.log('Se clickeo boton ' +boton.id)
        const seleccionado = listadoProductos.find((producto)=>producto.id == boton.id);
        console.table(seleccionado);
        // carro.push(seleccionado);
        // console.table(carro);

        agregarAlCarrito(seleccionado);
      })

    }
    
  }

 
  mostrarProductos(inventario);

  function agregarAlCarrito (producto){
    carro.push(producto);
    console.table(carro);

    const carrito = document.getElementById('carrito');
    
    carrito.innerHTML += `
            <div class="card cardCarrito">
              <img src=${producto.imagenProducto} class="card-img-top" alt=${producto.nombreProducto}>
              <div class="card-body">
                <h5 class="card-title">${producto.nombreProducto}<br>$ ${producto.precio}</h5>
                <input class="card-input" type="number" id="" placeholder="">
                <button id=${producto.id} class="btn btn-primary noCarrito">Quitar</button>
              </div>
            </div>
        `; 

  }


  // Prueba botón

  // let boton = document.getElementById('botonPrueba');
  
  // Ejemplo Funcion -------
  // boton.addEventListener('click', dispararAlert);


  function listaFemenino (){

    function productoFemenino(feme) {
      const filtrados = inventario.filter((producto) => producto.femenino == feme);
      console.table(filtrados);

      const femenino = document.getElementsByClassName('femenino');

      function mostraFemeninos (listadoFeme){
        for (const product of listadoFeme){
          femenino.innerHTML = `
          <div class="card" >
        <img src=${product.imagenProducto} class="card-img-top" alt=${product.nombreProducto}>
        <div class="card-body">
          <h5 class="card-title">${product.nombreProducto}</h5>
          <p class="card-text card-text-producto">$ ${product.precio}</p>
          <button id=${product.id} class="btn btn-primary alCarrito">Comprar</button>
        </div>
      </div>
          `;

}      }

mostraFemeninos (filtrados);
console.table(filtrados);
    

    }
  
    productoFemenino(true);


  }


let check = document.getElementById('dama');

check.addEventListener('click',listaFemenino);




  // Funcion Flecha -----------
  // boton.addEventListener('click', ()=>{alert('CLICK ;)')})

