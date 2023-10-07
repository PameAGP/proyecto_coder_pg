  let finalizarCarro = document.getElementById('final-carro');
  finalizarCarro.addEventListener('click', () => {
    localStorage.setItem('carroRecuperado', JSON.stringify(carro = []));
    finalizarCompra();
    setTimeout("redirecciona()", 2000);
  });