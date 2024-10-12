
const formularioregistro = document.getElementById('formulario-registro');
const mensajeserror = document.getElementById('mensajeserror');

formularioregistro.addEventListener("submit", function(event){

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contraseña")

    mensajeserror.innerhtml = "";

    if (!usuario.trim() ) {
        monstrarError("El nombre de usuario es obligatorio");
        return;
    }

    if( !correo.trim() ) {
        monstrarError("El correo es requerido");
        return;
    }

    if( !contrasena.trim() ) {
        monstrarError("La contraseña es requerida");
        return;
    }

})

function monstrarError( mensaje ) {
    const mensajeerror = document.createElement("div");
    mensajeerror.className = "error";
    mensajeerror.textContent = mensaje;
    mensajeerror.appendChild(mensajeerror);
}
