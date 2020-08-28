
var colormapsSeleccionados = null;
renderizarPorPrimerVez();

function renderizarPorPrimerVez() {

    colormapsSeleccionados = [
        Colormaps.MPL_Set1,
        Colormaps.MPL_Set2,
        Colormaps.MPL_Set3,
        Colormaps.ML_parula,
        Colormaps.MPL_Set2,
        Colormaps.MPL_Set3,
        Colormaps.ML_parula,
        Colormaps.MPL_Set2,
        Colormaps.MPL_Set3,
        Colormaps.ML_parula,
        Colormaps.ML_jet,
    ]

    var textoExtra = document.createElement('a');
    textoExtra.classList.add('dropdown-item');
    textoExtra.setAttribute('href', '#');
    textoExtra.setAttribute('data-toggle', 'modal');
    textoExtra.setAttribute('data-target', '#exampleModalCenter');
    textoExtra.innerHTML = "Personalizado"
    document.getElementById("canvases").appendChild(textoExtra);

    var divisor = document.createElement('div');
    divisor.classList.add("dropdown-divider");
    document.getElementById("canvases").appendChild(divisor);

    for (let i = 0; i < colormapsSeleccionados.length; i++) {
        pintarCanvas(colormapsSeleccionados[i]);
    }


}

function pintarCanvas(MAT) {
    var a = document.createElement('a');
    a.setAttribute('class', 'dropdown-item');
    a.setAttribute('href', '#');
    var canvases = document.getElementById("canvases");
    var c = document.createElement('canvas');
    c.addEventListener('click', function () { pintarSeleccionado(MAT) }, false);
    c.width = 255;
    c.height = 50;
    var ctx = c.getContext("2d");
    for (let i = 0; i < 255; i++) {
        ctx.fillStyle = 'rgb(' + MAT[i][0] + ', ' + MAT[i][1] + ', ' + MAT[i][2] + ')';;
        ctx.fillRect(i, 0, 1, c.height);
    }
    a.appendChild(c);
    canvases.appendChild(a);
}

function pintarSeleccionado(MAT) {
    var c = document.getElementById("colormapSeleccionado");
    c.width = 255;
    c.height = 50;
    var ctx = c.getContext("2d");
    for (let i = 0; i < 255; i++) {
        ctx.fillStyle = 'rgb(' + MAT[i][0] + ', ' + MAT[i][1] + ', ' + MAT[i][2] + ')';;
        ctx.fillRect(i, 0, 1, c.height);
    }
}