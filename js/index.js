
let promociones = [];

function traerPromos() {
  const URLJSON = '../pseudo-BD.json';
  fetch(URLJSON)
    .then((resultado) => resultado.json())
    .then((promos) => {
      promociones = promos.promociones
    })

}

traerPromos();

const mostrarPromos = () => {
  return new Promise ((resolve, rejet) => {
    setTimeout(()=> {
      resolve(promociones)
    }, 1000)
  })
}

let promoEnCarrusel = document.getElementById('carrusel');

mostrarPromos ()
.then ((resp) => {
  promociones = resp
  promoEnCarrusel.innerHTML += `
  <div class="carousel-item active">
          <img src=${promociones[0].imagenPromo} class="d-block w-100" alt=${promociones[0].imagenAlt}>
          <div class="carousel-caption">
            <a href="./pages/contacto.html">
              <h5>Promoción ${promociones[0].numeroDePromo}</h5>
            </a>
            <p>${promociones[0].infoPromo}</p>
          </div>
        </div>
  `;

for (let carrusel = 1; carrusel <= promociones.length; carrusel++) {
  promoEnCarrusel.innerHTML += `
  <div class="carousel-item">
          <img src=${promociones[carrusel].imagenPromo} class="d-block w-100" alt=${promociones[carrusel].imagenAlt}>
          <div class="carousel-caption">
            <a href="./pages/contacto.html">
              <h5>Promoción ${promociones[carrusel].numeroDePromo}</h5>
            </a>
            <p>${promociones[carrusel].infoPromo}</p>
          </div>
        </div>
  `;
}
})


encabezadoElegido(headerIndex, secc1, secc3, secc3);


let destacados = document.getElementById('destacados');

let productosDestacados = [];

llamarInventario()
  .then((resp) => {
    inventario = resp
    productosDestacados.push(
      inventario[4],
      inventario[2],
      inventario[6]
    )

    for (const producto of productosDestacados) {
      destacados.innerHTML += `
          <div class="card card-animacion">
            <img src=${producto.imagenProducto} class="card-img-top" alt=${producto.nombreProducto}>
            <div class="card-body">
              <h5 class="card-title">$ ${producto.precio}<br>${producto.nombreProducto}</h5>
              <p class="card-text">${producto.descripcion}</p>
              <a href="./pages/productos.html"
                target="" class="btn btn-primary">Comprar</a>
            </div>
          </div>
      `; 
  }
  })

footerElegido(footerIndex, secc3, secc1);