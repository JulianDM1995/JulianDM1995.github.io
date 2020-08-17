let r = 200;
let g = 200;
let b = 200;

let r_min = 255;
let g_min = 0;
let b_min = 0;

let r_max = 255;
let g_max = 0;
let b_max = 255;

let transition_time = 10000;
let periodo = 100;

let time = 0;

let contadorBoton = 0;
let contadorColores = 0;

$(window).on("load", function () {
    rgbToHex(r, g, b);
    inicializarColorWheels();
    vista(0);
})

function terminarIntervalo() {
    let porcentaje = contadorBoton/contadorColores*10000;
    porcentaje = Math.floor(porcentaje)/100;
    document.getElementById("coloresContados").innerHTML = contadorBoton + " / " + contadorColores + "  -  " + porcentaje + "%"
    clearInterval(intervalo);
    vista(2);
}

let intervalo = null;
function empezarIntervalo() {
    transition_time = document.getElementById("transitionTime").value;
    time = 0;
    contadorBoton = 0;
    contadorColores = 0;
    r = 0;
    g = 0;
    b = 0;
    vista(1);
    intervalo = window.setInterval(cambiarColor, periodo);
}

function cambiarColor() {
    if (time <= transition_time) {
        let new_r = Math.floor(map(time, 0, transition_time, r_min, r_max));
        let new_g = Math.floor(map(time, 0, transition_time, g_min, g_max));
        let new_b = Math.floor(map(time, 0, transition_time, b_min, b_max));

        if(r != new_r || g != new_g || b != new_b){
            contadorColores++;
        }

        r = new_r;
        g = new_g;
        b = new_b;
        
        rgbToHex(r, g, b);
    } else {
        terminarIntervalo();
        return;
    }
    console.log(r, g, b, time,contadorColores);
    time += periodo;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function rgbToHex(r, g, b) {
    let Hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    document.body.style.backgroundColor = Hex;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let wheelDesde = null;
let wheelHasta = null;
function inicializarColorWheels() {
    wheelDesde = new iro.ColorPicker("#wheelDesde", {
        width: 140,
        height: 110,
        handleRadius: 8,
        handleUrl: null,
        handleOrigin: { y: 0, x: 0 },
        colors: [
            "#" + componentToHex(r_min) + componentToHex(g_min) + componentToHex(b_min)
        ],
        borderWidth: 0,
        padding: 8,
        wheelLightness: true,
        wheelAngle: 270,
        wheelDirection: 'anticlockwise',
        layoutDirection: 'vertical',
        transparency: false,
    });

    wheelDesde.on('input:change', function (color) {
        r_min = color.rgb.r;
        g_min = color.rgb.g;
        b_min = color.rgb.b;
        llenarCanvas("canvasDesde", r_min, g_min, b_min);
    })
    llenarCanvas("canvasDesde", r_min, g_min, b_min);

    wheelHasta = new iro.ColorPicker("#wheelHasta", {
        width: 140,
        height: 110,
        handleRadius: 8,
        handleUrl: null,
        handleOrigin: { y: 0, x: 0 },
        colors: [
            "#" + componentToHex(r_max) + componentToHex(g_max) + componentToHex(b_max)
        ],
        borderWidth: 0,
        padding: 8,
        wheelLightness: true,
        wheelAngle: 270,
        wheelDirection: 'anticlockwise',
        layoutDirection: 'vertical',
        transparency: false,
    });

    wheelHasta.on('input:change', function (color) {
        r_max = color.rgb.r;
        g_max = color.rgb.g;
        b_max = color.rgb.b;
        llenarCanvas("canvasHasta", r_max, g_max, b_max);
    })

    llenarCanvas("canvasHasta", r_max, g_max, b_max);

}

function llenarCanvas(canvasName, _r, _g, _b) {
    var c = document.getElementById(canvasName);
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#" + componentToHex(_r) + componentToHex(_g) + componentToHex(_b);
    ctx.fillRect(0, 0, 100, 100);
}

function contarColor(){
    contadorBoton++;
}

function vista(view) {
    document.getElementById("div0").style.display = view == 0 ? " block" : "none";
    document.getElementById("div1").style.display = view == 1 ? " block" : "none";
    document.getElementById("div2").style.display = view == 2 ? " block" : "none";
}