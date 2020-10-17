let primerBooteo = true;
let PrototipoActual = 2;
cambiarPrototipoSeleccionado(PrototipoActual);
function cambiarPrototipoSeleccionado(seleccion) {

    //Inicializamos los vectores vacios
    Temperatura_1 = []
    Temperatura_2 = []
    Temperatura_3 = []
    Temperatura_4 = []

    Humedad_1 = []
    Humedad_2 = []
    Humedad_3 = []
    Humedad_4 = []

    Fechas = [];

    //Activar y desactivar la coloración de los botones
    document.getElementById("tagPrototipo1").setAttribute('class', seleccion == 1 ? 'nav-link active' : 'nav-link');
    document.getElementById("tagPrototipo2").setAttribute('class', seleccion == 2 ? 'nav-link active' : 'nav-link');
    document.getElementById("tagPrototipo3").setAttribute('class', seleccion == 3 ? 'nav-link active' : 'nav-link');
    document.getElementById("tagPrototipo4").setAttribute('class', seleccion == 4 ? 'nav-link active' : 'nav-link');
    document.getElementById("numero_prototipo").innerHTML = "Prototipo " + seleccion;

    //Si no es el primer booteo entonces reseteamos los objetos
    if(!primerBooteo){
        resetearExternal();
    }else{
        primerBooteo = false;
    }

    iniciarLecturaRemotaDeSensores(seleccion);
    actualizarTabla();
}