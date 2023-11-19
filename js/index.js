let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))

if(usuarioLogueado){
    console.log(usuarioLogueado);
    document.getElementById("presentación").innerHTML = `¡Hola! ${usuarioLogueado[0].nombre} estas logueado`
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
    //termiar bien el codigo, recuerda revisar si la seccion de js login
    //tmabien va vinculada al index y acomoda si algo el contenedor del nombre
    // cuando inicie sesion :)


