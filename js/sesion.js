
let usuariosRegistrados = [];
let usuarioLocal = JSON.parse(localStorage.getItem('usuariosR')) || [];

async function traerUsuarios() {
    const URLUSERS = 'https://dummyjson.com/users';
    const respond = await fetch(URLUSERS);

    const recived = await respond.json();
    usuariosRegistrados = recived.users;
    // console.table(usuariosRegistrados);
}

traerUsuarios();

let usuarioT = [];


async function buscaUsuario(usuario, valor) {
    const URLUSERS = 'https://dummyjson.com/users/filter?key='+usuario+'&value='+valor;
    const respond = await fetch(URLUSERS);

    const recived = await respond.json();
    usuarioT = recived.users;
    console.log(usuarioT);
    if(usuarioT.length == 0){
        console.log('Nulo');
    } else {
        console.table(usuarioT);
    }
}

// buscaUsuario('username', 'hbingley1');
buscaUsuario('username', '515654');

function enviarUsuario(p1, p2, p3, p4, p5, p6, p7, p8, p9) {
    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: p1,
            firstName: p2,
            lastName: p3,
            birthDate: p4,
            gender: p5,
            email: p6,
            height: p7,
            weight: p8,
            password: p9
        })
    })
        .then(res => res.json())
}

const botonR = document.getElementById('registrarse');

function check(opcion, variable) {
    opcion.addEventListener('click', function () {
        if (opcion.checked == true) {
            variable = true;
        } else {
            variable = false;
        }
    });
}


var checkPromo = document.getElementById('promosSi');
var checkAnuncios = document.getElementById('anunciosSi');

var promoSiNo = '';
var anuncioSiNo = '';

check(checkPromo, promoSiNo);
check(checkAnuncios, anuncioSiNo);

const userR = document.getElementById('usuarioR');
const nameR = document.getElementById('nombreUsuarioR');
const lastnameR = document.getElementById('apellidoUsuarioR');
const bdayR = document.getElementById('bdayR');
const generoR = document.getElementById('genero');
const emailR = document.getElementById('emailR');
const passR = document.getElementById('passR');
const passR2 = document.getElementById('passR2');


passR.onkeyup = () => {
    if (passR.value.length < 6) {
        passR.style.color = 'red';
    } else {
        passR.style.color = 'black';
    }
}

passR2.onkeyup = () => {
    if (passR.value != passR2.value) {
        passR2.style.color = 'red';
        document.getElementById('passCoincidence').innerText = 'Las contraseñas no coinciden';
    } else {
        passR2.style.color = 'black';
        document.getElementById('passCoincidence').innerText = '';
    }
}

const validarRegistro = (e) => {
    e.preventDefault();
    let rechazar = false;
    let emailAceptable = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let userAceptable = / /;

    if (userR.value === "" || userAceptable.test(userR.value)) {
        document.getElementById('usuarioNoValido').innerText = 'Nombre de usuario no válido';
        rechazar = true;
    } else {
        document.getElementById('usuarioNoValido').innerText = '';
    }

    if (nameR.value === "" || userAceptable.test(nameR.value)) {
        document.getElementById('nombreNoValido').innerText = 'Nombre no válido';
        rechazar = true;
    } else {
        document.getElementById('nombreNoValido').innerText = '';
    }

    if (lastnameR.value === "" || userAceptable.test(lastnameR.value)) {
        document.getElementById('apellidoNoValido').innerText = 'Apellido no válido';
        rechazar = true;
    } else {
        document.getElementById('apellidoNoValido').innerText = '';
    }

    if (bdayR.value === "") {
        document.getElementById('fechaNacimientoNoValida').innerText = 'Ingrese fecha';
        rechazar = true;
    } else {
        document.getElementById('fechaNacimientoNoValida').innerText = '';
    }

    if (passR.value === "" || passR2.value === "") {
        document.getElementById('passCoincidence').innerText = 'Ingrese una contraseña';
        rechazar = true;
    } else if (passR.value != passR2.value) {
        document.getElementById('passCoincidence').innerText = 'Las contraseñas no coinciden';
        rechazar = true;
    } else if (passR.value.length < 6) {
        document.getElementById('passCoincidence').innerText = 'Contraseña muy corta';
        rechazar = true;
    }

    if (!emailAceptable.test(emailR.value)) {
        document.getElementById('correoNoValido').innerText = 'Email no válido';
        rechazar = true;
    } else {
        document.getElementById('correoNoValido').innerText = '';
    }

    if (rechazar) {
        cartelConAdvertencia('Error al registrar', 'Revise los campos, por favor.')
    } else {
        guardarDatos()
    }

}



botonR.addEventListener('click', validarRegistro);

function guardarDatos() {

    const userR = document.getElementById('usuarioR').value;
    const nameR = document.getElementById('nombreUsuarioR').value;
    const lastnameR = document.getElementById('apellidoUsuarioR').value;
    const bdayR = document.getElementById('bdayR').value;
    const generoR = document.getElementById('genero').value;
    const emailR = document.getElementById('emailR').value;
    const passR = document.getElementById('passR').value;
    const passR2 = document.getElementById('passR2').value;

    if (checkPromo.checked == true) {
        promoSiNo = true;
    } else {
        promoSiNo = false
    }

    if (checkAnuncios.checked == true) {
        anuncioSiNo = true;
    } else {
        anuncioSiNo = false;
    }

    const usuarioNuevo = new usuarioL(
        userR,
        nameR,
        lastnameR,
        passR,
        bdayR,
        generoR,
        emailR,
        promoSiNo,
        anuncioSiNo
    );

    usuarioLocal.push(
        usuarioNuevo
    )

    console.table(usuarioLocal);

    localStorage.setItem('usuariosR', JSON.stringify(usuarioLocal));

    enviarUsuario(userR, nameR, lastnameR, bdayR, generoR, emailR, promoSiNo, anuncioSiNo, passR);

}

class usuarioL {
    constructor(
        username,
        firstName,
        lastName,
        password,
        birthDate,
        gender,
        email,
        promo,
        info
    ) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.birthDate = birthDate;
        this.gender = gender;
        this.email = email;
        this.promo = promo;
        this.info = info;
    }
}

function inicioSesion(evento) {

    const inputNombre = document.getElementById('usuario').value;
    const inputPass = document.getElementById('pass').value;
    sesionNo = true;

    if (sesionIniciada.length != 0) {
        evento.preventDefault();
        cartelConAdvertencia('Error', 'Ya existe una sesión iniciada.');
    } else {
        const seleccionado = usuarioLocal.find((elemento) => elemento.username == inputNombre);

        console.log(seleccionado);

        if (inputNombre == "" || inputPass == "") {
            evento.preventDefault();
            cartelConAdvertencia('Error al iniciar.', 'Campo/s vacío/s.')
        }

        if (seleccionado == null) {
            evento.preventDefault();
            console.log('Usuario no allado');
        } else {
            console.log('Se alló usuario: ' + seleccionado.username);
            if (seleccionado.password == inputPass) {
                console.log('Contraseña correcta');
                localStorage.setItem('sesionIniciada', JSON.stringify(seleccionado));
            } else {
                evento.preventDefault();
                cartelConAdvertencia('Contraseña incorrecta.');
            }
        }
    }

}

const inputNombre = document.getElementById('usuario');
const inputPass = document.getElementById('pass');

inputNombre.onkeyup = () => {
    if (inputNombre.value.length < 3) {
        inputNombre.style.color = 'red';
    }
    else {
        inputNombre.style.color = 'black';
    }
}

inputPass.onkeyup = () => {
    if (inputPass.value.length < 6) {
        inputPass.style.color = 'red';
    }
    else {
        inputPass.style.color = 'black';
    }
}

const formulario = document.getElementById('inicioSesion');

formulario.addEventListener('click', inicioSesion);
