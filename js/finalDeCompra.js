


// const finalCarrito = document.getElementById('');



  let finalizarCarro = document.getElementById('final-carro');
  finalizarCarro.addEventListener('click', () => {
    localStorage.setItem('carroRecuperado', JSON.stringify(carro = []));
    finalizarCompra();
    setTimeout("redirecciona()", 2000);
  });


  // console.table(carro);
  // console.log(carro.length);

  // if (carro.length == 0){
  //   setTimeout("redirecciona()", 2000);
  // } else {
  //   carritoMostrar(carro);
  // }

