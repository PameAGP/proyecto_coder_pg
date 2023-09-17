

class producto {
    constructor(
      idProducto,
      nombreProducto,
      imagenProducto,
      precio,
      enStock,
      femenino,
      masculino,
      barba,
      cabello,
      stock
  
    ) {
      this.idProducto = idProducto;
      this.nombreProducto = nombreProducto;
      this.imagenProducto = imagenProducto;
      this.precio = precio;
      this.enStock = enStock;
      this.femenino = femenino;
      this.masculino = masculino;
      this.barba = barba;
      this.cabello = cabello;
      this.stock = stock;
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
    300,
    true,
    false,
    true,
    false,
    true,
    20
  );
  const producto2 = new producto(
    2,
    "Cera para peinar profesional Shock",
    'https://m.media-amazon.com/images/I/61oHxr8QjoL._SX425_.jpg',
    800,
    true,
    false,
    true,
    false,
    true,
    6
  );
  const producto3 = new producto(
    3,
    "Cera Pelo & Barba Capilatis Hombre",
    'https://http2.mlstatic.com/D_NQ_NP_2X_829015-MLU41018740930_032020-F.webp',
    506,
    true,
    false,
    true,
    true,
    true,
    33
  );
  const producto4 = new producto(
    4,
    "Cera Gel Vikingo para Barba",
    'https://i0.wp.com/odinuruguay.com/wp-content/uploads/2021/04/Cera-Gel-Vikingo.png?fit=1024%2C1024&ssl=1',
    293,
    true,
    false,
    true,
    true,
    false,
    5
  );
  const producto5 = new producto(
    5,
    "Crema de peinar Pantene",
    'https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/3/0/30335_10_1.jpg',
    290,
    true,
    true,
    true,
    false,
    true,
    100
  );
  const producto6 = new producto(
    6,
    "Crema Para Peinar Pantene Colágeno",
    'https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/8/0/808682.jpg',
    620,
    true,
    true,
    true,
    false,
    true,
    36,
  );
  const producto7 = new producto(
    7,
    "Gel Primicia Modelador Efecto Mojado",
    'https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/8/7/87959_001.jpg',
    450,
    true,
    false,
    true,
    false,
    true,
    40
  );
  const producto8 = new producto(
    8,
    "DR. SELBY - fijador para cabello",
    'https://www.selby.com.uy/wp-content/uploads/2021/12/fijador_120-510x508.jpg',
    130,
    true,
    false,
    true,
    false,
    true,
    20
  );
  const producto9 = new producto(
    9,
    "Gel Calypso Fijador Fuerte",
    'https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/5/2/52429.jpg',
    78,
    true,
    false,
    true,
    false,
    true,
    8
  );
  const producto10 = new producto(
    10,
    "Cera En Polvo Golden Moustache Efecto Matte",
    'https://http2.mlstatic.com/D_NQ_NP_2X_962059-MLU50099607369_052022-F.webp',
    350,
    true,
    true,
    true,
    false,
    true,
    28
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
    producto10
  );
  
  
  console.table(inventario);
  
  
  let sectionProductos = document.getElementById('tarjetasProductos');
  
  for (const product of inventario) {
    sectionProductos.innerHTML += `
      <div class="card" >
      <img src=${product.imagenProducto} class="card-img-top" alt=${product.nombreProducto}>
      <div class="card-body">
        <h5 class="card-title">${product.nombreProducto}</h5>
        <p class="card-text card-text-producto">$ ${product.precio}</p>
        <a href='' target="_blank" class="btn btn-primary">Comprar</a>
      </div>
    </div>
    `;
  }