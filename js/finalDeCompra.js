
const carritoMuestra = document.getElementById('carrito');

carritoMostrar(carro);

let finalizarCarro = document.getElementById('final-carro');
  finalizarCarro.addEventListener('click', () => {
    localStorage.setItem('carroRecuperado', JSON.stringify(carro = []));
    finalizarCompra();
    setTimeout("redirecciona()", 2000);
  });

  function redirecciona (){
    location.href='./productos.html';
  }