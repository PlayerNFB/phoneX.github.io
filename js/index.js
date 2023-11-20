let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))

if(usuarioLogueado){
    console.log(usuarioLogueado);
    document.getElementById("presentación").innerHTML = `¡Hola! ${usuarioLogueado[0].nombre} estás loguead@`
}
else{
    location.href = "/login.html"
}


function cerrarSesion(){
    localStorage.removeItem("usuarioLogueado")
    document.getElementById("presentación").innerHTML = "";
    document.getElementById("cerrarSesion").style.display =  "none";


}







//"¡¡Bienvenido!! "+usuarioLogueado[0].nombre;
    // 

