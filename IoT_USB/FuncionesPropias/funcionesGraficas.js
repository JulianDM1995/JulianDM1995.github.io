var Temperatura_1 = []
var Temperatura_2 = []
var Temperatura_3 = []
var Temperatura_4 = []

var Humedad_1 = []
var Humedad_2 = []
var Humedad_3 = []
var Humedad_4 = []

var Fechas = [];

var myChart
var myChart2

InicializarGraficas();
function InicializarGraficas() {
    console.log("Actualizando gráfica de temperatura");

    var ctx = document.getElementById('myChart')
    var chartData = {
        type: 'line',
        data: {
            labels: Fechas,
            datasets: [{
                label: 'Temp 1',
                fill: false,
                data: Temperatura_1,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                borderWidth: 2,
                pointRadius: 0,
                showLine: true
            },
            {
                label: 'Temp 2',
                fill: false,
                data: Temperatura_2,
                backgroundColor: '#28A745',
                borderColor: '#28A745',
                borderWidth: 2,
                pointRadius: 0,
                showLine: true
            },
            {
                label: 'Temp 3',
                fill: false,
                data: Temperatura_3,
                backgroundColor: '#DC3545',
                borderColor: '#DC3545',
                borderWidth: 2,
                pointRadius: 0,
                showLine: true
            },
            {
                label: 'Temp 4',
                fill: false,
                data: Temperatura_4,
                backgroundColor: '#FFC107',
                borderColor: '#FFC107',
                borderWidth: 2,
                pointRadius: 0,
                showLine: true
            },]
        }
    };
    myChart = new Chart(ctx, chartData);

    var ctx2 = document.getElementById('myChart2')
    var chartData2 = {
        type: 'line',
        data: {
            labels: Fechas,
            datasets: [{
                label: 'Hum 1',
                fill: false,
                data: Humedad_1,
                backgroundColor: '#007bff',
                borderColor: '#007bff',
                borderWidth: 2,
                pointRadius: 0,
                showLine: true
            },
            {
                label: 'Hum 2',
                fill: false,
                data: Humedad_2,
                backgroundColor: '#28A745',
                borderColor: '#28A745',
                borderWidth: 2,
                pointRadius: 0,
                showLine: true
            },
            {
                label: 'Hum 3',
                fill: false,
                data: Humedad_3,
                backgroundColor: '#DC3545',
                borderColor: '#DC3545',
                borderWidth: 2,
                pointRadius: 0,
                showLine: true
            },
            {
                label: 'Hum 4',
                fill: false,
                data: Humedad_4,
                backgroundColor: '#FFC107',
                borderColor: '#FFC107',
                borderWidth: 2,
                pointRadius: 0,
                showLine: true
            },]
        }
    };
    myChart2 = new Chart(ctx2, chartData2);

}