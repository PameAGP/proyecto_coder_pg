let headerBarraNavegacion = document.getElementById('encabezado');

headerBarraNavegacion.innerHTML += `
<nav class="navbar navbar-expand-md navbar-dark bg-black">
      <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">Peluquería Nico's</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body bg-black">
            <ul class="navbar-nav flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./productos.html">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contacto.html">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./sob_nosotros.html">Sobre nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./extras.html">Extras</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Usuario
                </a>
                <ul class="dropdown-menu bg-black ">
                  <li>
                    <label class="dropdown-item negrita texto-blanco" for="">Iniciar de Sesión: <br></label>
                    <div><label for="usuario">Nombre de usuario: </label> <br>
                      <input type="name" id="usuario" placeholder="Ej: Pepe123"> <br>
                      <label class= 'texto-blanco' for="usuario">Contraseña: </label> <br>
                      <input type="password" id="pass" placeholder="12345">
                      <input type="submit" value="Enviar" class="btn btn-primary btn-sesion">
                    </div><hr>
                  </li>
                  <li><a class="dropdown-item negrita texto-blanco" href="./sesion.html">Registrarme</a></li>
                </ul>
              </li>
              
            </ul>

          </div>
        </div>
      </div>
    </nav>

`;

let footerPie = document.getElementById('pie');

footerPie.innerHTML += `
<div class="container  footer-cont">

      <div class="footer-info">
        <h5>Horario de atención</h5>
        <p>Lunes a Viernes: <br>
            10:00 hs a 19:00 hs <br>
            Sábado <br>
            10:00 hs a 14:30 hs
        </p>
      </div>

    <div class="footer-info">
        <h5>¿Consultas?</h5>
        <p><a href="./contacto.html">Llena el formulario de contacto haciendo click aquí</a></p>
    </div>

    <div class="footer-info">
        <h5>Dirección:</h5>
        <p>Algun Lado 3399 esquina Una Esquina</p>
    </div>
    
    <div class="footer-info">
        <h5>Redes Sociales</h5>
        <div class="redes-sociales">
          <a href="https://es-la.facebook.com/" target="_blank">
            <img src="../img/facebook.png" alt="facebook">
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="../img/instagram.png" alt="instagram">
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="../img/youtube.png" alt="youtube">
          </a>
          <a href="https://twitter.com/?lang=es" target="_blank">
            <img src="../img/Twitter_Logo.png" alt="Twitter">
          </a>
        </div>
      </div>

  </div>
`;