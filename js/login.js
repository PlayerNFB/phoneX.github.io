
document.getElementById("btn-iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn-registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina)


//declaracion de variables


var contenedor_login_register = document.querySelector(".contenedor-login-register");

var formulario_login = document.querySelector(".formulario-login");
var formulario_register = document.querySelector(".formulario-register");
var caja_trasera_login = document.querySelector(".caja-trasera-login");
var caja_trasera_register = document.querySelector(".caja-trasera-register");


function anchoPagina() {
    if(window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }
    else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}


anchoPagina ();


function iniciarSesion() {
    if(window.innerWidth > 850){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
}

else {
formulario_register.style.display = "none";
contenedor_login_register.style.left = "0px";
formulario_login.style.display = "block";
caja_trasera_register.style.display = "block";
caja_trasera_login.style.display = "none";


}

}




function register() {
    if(window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}

else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";

}


}



function registro() {
    let email = document.getElementById("emailRegistro").value;
    let nombreCompleto = document.getElementById("nombreCompleto").value;
    let genero = document.getElementById("genero").value;
    let passwordRegistro = document.getElementById("passwordRegistro").value;

    let data = localStorage.getItem("usuarios");
    let usuariosData = data ? JSON.parse(data): []
    usuariosData.push({
        email: email,
        nombre: nombreCompleto,
        genero: genero,
        password: passwordRegistro
    })


    localStorage.setItem("usuarios", JSON.stringify(usuariosData))

}



function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("passwordLogin").value;
    let data = JSON.parse(localStorage.getItem("usuarios"));

    let filter = data.filter((usuario) => usuario.email == email && usuario.password == password);


    localStorage.setItem("usuarioLogueado", JSON.stringify(filter))
    window.location.href= "./index.html"

    console.log(filter);
    console.log(email, password);
}