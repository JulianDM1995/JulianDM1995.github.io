cambiarPrototipoSeleccionado(1);
function cambiarPrototipoSeleccionado(seleccion){

    //Activar y desactivar la coloración de los botones
    document.getElementById("tagPrototipo1").setAttribute('class', seleccion==1? 'nav-link active' : 'nav-link');
    document.getElementById("tagPrototipo2").setAttribute('class', seleccion==2? 'nav-link active' : 'nav-link');
    document.getElementById("tagPrototipo3").setAttribute('class', seleccion==3? 'nav-link active' : 'nav-link');
    document.getElementById("tagPrototipo4").setAttribute('class', seleccion==4? 'nav-link active' : 'nav-link');
    document.getElementById("numero_prototipo").innerHTML = "Prototipo " + seleccion;

    iniciarLecturaRemotaDeSensores(seleccion);

}