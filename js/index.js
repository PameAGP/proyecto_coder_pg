class promocion {
    constructor(
        imagenPromo,
        imagenAlt,
        infoPromo,
        numeroDePromo
    ) {
        this.imagenPromo = imagenPromo;
        this.imagenAlt = imagenAlt;
        this.infoPromo = infoPromo;
        this.numeroDePromo = numeroDePromo;
    }

}

const promocion1 = new promocion(
    './img/promo_1.jpg',
    'Promoción de cortes número 1, cortes en tendencia',
    '¡Cortes en tendencia a tu elección con un descuento increíble!',
    1
);

const promocion2 = new promocion(
    './img/promo_2.jpg',
    'Promoción de cortes numero 2, 3 opciones',
    'Tres tipos de corte en promoción para ti.',
    2
);

const promocion3 = new promocion(
    './img/promo_3.jpg',
    'Promoción de cortes numero 3, tramiento a cabellos largos',
    'Tratamientos para el cabello, largo o corto.',
    3
);

const promocion4 = new promocion(
    './img/promo_4.jpg',
    'Promoción de cortes numero 4, tintura a cabellos largos',
    'Especial tintura para cabellos largos.',
    4
);

const promocion5 = new promocion(
    './img/promo_5.jpg',
    'Promoción de cortes numero 5, tintura a cabellos largos',
    'Cortes para cabello largo en promocón, ¡Animate a un cambio!',
    5
);

const promociones = [];

promociones.push(
    promocion2,
    promocion3,
    promocion4,
    promocion5
);

console.table(promociones);

encabezadoElegido(headerIndex, secc1, secc3, secc3);


let promoEnCarrusel = document.getElementById('carrusel');

promoEnCarrusel.innerHTML += `
    <div class="carousel-item active">
            <img src="./img/promo_1.jpg" class="d-block w-100" alt="Promoción de cortes número 1, cortes en tendencia">
            <div class="carousel-caption">
              <a href="./pages/contacto.html">
                <h5>Promoción 1</h5>
              </a>
              <p>¡Cortes en tendencia a tu elección con un descuento increíble!</p>
            </div>
          </div>
    `;

for (const carrusel of promociones) {
    promoEnCarrusel.innerHTML += `
    <div class="carousel-item">
            <img src=${carrusel.imagenPromo} class="d-block w-100" alt=${carrusel.imagenAlt}>
            <div class="carousel-caption">
              <a href="./pages/contacto.html">
                <h5>Promoción ${carrusel.numeroDePromo}</h5>
              </a>
              <p>${carrusel.infoPromo}</p>
            </div>
          </div>
    `;
}

console.table(productosDestacados);

let destacados = document.getElementById('destacados');

for (const producto of productosDestacados) {
    destacados.innerHTML += `
        <div class="card">
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

footerElegido(footerIndex, secc3, secc1);