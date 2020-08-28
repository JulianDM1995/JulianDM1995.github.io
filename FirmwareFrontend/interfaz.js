vista(2);
function vista(view) {
    document.getElementById("colorEstatico").style.display = view == 0 ? " block" : "none";
    document.getElementById("degradado").style.display = view == 1 ? " block" : "none";
    document.getElementById("mensajeEncriptado").style.display = view == 2 ? " block" : "none";
}

vistaBinarioMorse(0);
function vistaBinarioMorse(view){
    document.getElementById("divBinario").style.display = view == 0 ? " block" : "none";
    document.getElementById("divMorse").style.display = view == 1 ? " block" : "none";
    document.getElementById("labelSliderTiempoEncriptado").innerHTML = view == 0? "Tiempo de pulso":"Tiempo de punto";
}

function changeSliderTiempoDegradado() {
    document.getElementById("tiempoDegradadoSegundos").innerHTML = document.getElementById("sliderTiempoDegradado").value + "s"

}

function changeSliderMensajeEncriptado() {
    document.getElementById("tiempoEncriptadoSegundos").innerHTML = (document.getElementById("sliderTiempoEncriptado").value/1000).toFixed(1) + "s"
}