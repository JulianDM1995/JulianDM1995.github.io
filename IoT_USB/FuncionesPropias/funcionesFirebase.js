// Configuración de Firebase propia de este proyecto
var firebaseConfig = {
  apiKey: "AIzaSyD_2VA6BHpYjmhUiiSxWszTKpCbapWnw1M",
  authDomain: "proyectoiot-85ff2.firebaseapp.com",
  databaseURL: "https://proyectoiot-85ff2.firebaseio.com",
  projectId: "proyectoiot-85ff2",
  storageBucket: "proyectoiot-85ff2.appspot.com",
  messagingSenderId: "500053418949",
  appId: "1:500053418949:web:6deae61c63f0a4c07121ac",
  measurementId: "G-TGMVFYV3XV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Inicializamos los objetos que van a tener las configuraciones de cada variable
var FB_Temp1;
var FB_Temp2;
var FB_Temp3;
var FB_Temp4;

var FB_Hum1;
var FB_Hum2;
var FB_Hum3;
var FB_Hum4;

var FB_Fechas;

function iniciarLecturaRemotaDeSensores(prototipo) {
  console.log("Iniciando sensores remotos de " + prototipo);

  //Decimos de donde van a tomar los valores los objetos de firebase
  FB_Temp1 = firebase.database().ref().child("Prototipo" + prototipo + "/Temperatura_1");
  FB_Temp2 = firebase.database().ref().child("Prototipo" + prototipo + "/Temperatura_2");
  FB_Temp3 = firebase.database().ref().child("Prototipo" + prototipo + "/Temperatura_3");
  FB_Temp4 = firebase.database().ref().child("Prototipo" + prototipo + "/Temperatura_4");

  FB_Hum1 = firebase.database().ref().child("Prototipo" + prototipo + "/Humedad_1");
  FB_Hum2 = firebase.database().ref().child("Prototipo" + prototipo + "/Humedad_2");
  FB_Hum3 = firebase.database().ref().child("Prototipo" + prototipo + "/Humedad_3");
  FB_Hum4 = firebase.database().ref().child("Prototipo" + prototipo + "/Humedad_4");

  FB_Fechas = firebase.database().ref().child("Prototipo" + prototipo + "/FECHAS");

  //Cuando un valor cambia en cada uno de estos, qué cosa se ejecuta

  FB_Temp1.on('value', function (snapshot) {
    Temperatura_1 = [] //Reiniciamos el vector
    var objeto = snapshot.val(); //Obtenemos el objeto que está llegando
    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) { //Capturamos cada uno de los objetos
      var valor = objeto[Object.keys(objeto)[i]];  
      Temperatura_1.push(desencriptar(valor)); //los agregamos DESENCRIPTADOS al vector Temperatura 1
    }
    myChart.data.datasets[0].data = Temperatura_1; //Actualizamos estos datos en la gráfica
    myChart.update(); //Repintamos la gráfica
    actualizarTabla(); //Actualizamos la tabla de abajo
  });

  FB_Temp2.on('value', function (snapshot) {
    Temperatura_2 = []
    var objeto = snapshot.val();
    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) {
      var valor = objeto[Object.keys(objeto)[i]];
      Temperatura_2.push(desencriptar(valor));
    }
    myChart.data.datasets[1].data = Temperatura_2;
    myChart.update();
    actualizarTabla();
  });

  FB_Temp3.on('value', function (snapshot) {
    Temperatura_3 = []
    var objeto = snapshot.val();
    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) {
      var valor = objeto[Object.keys(objeto)[i]];
      Temperatura_3.push(desencriptar(valor));
    }
    myChart.data.datasets[2].data = Temperatura_3;
    myChart.update();
    actualizarTabla();
  });

  FB_Temp4.on('value', function (snapshot) {
    Temperatura_4 = []
    var objeto = snapshot.val();
    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) {
      var valor = objeto[Object.keys(objeto)[i]];
      Temperatura_4.push(desencriptar(valor));
    }
    myChart.data.datasets[3].data = Temperatura_4;
    myChart.update();
    actualizarTabla();
  });

  FB_Hum1.on('value', function (snapshot) {
    Humedad_1 = []
    var objeto = snapshot.val();
    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) {
      var valor = objeto[Object.keys(objeto)[i]];
      Humedad_1.push(desencriptar(valor));
    }
    myChart2.data.datasets[0].data = Humedad_1;
    myChart2.update();
    actualizarTabla();
  });

  FB_Hum2.on('value', function (snapshot) {
    Humedad_2 = []
    var objeto = snapshot.val();
    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) {
      var valor = objeto[Object.keys(objeto)[i]];
      Humedad_2.push(desencriptar(valor));
    }
    myChart2.data.datasets[1].data = Humedad_2;
    myChart2.update();
    actualizarTabla();
  });

  FB_Hum3.on('value', function (snapshot) {
    Humedad_3 = []
    var objeto = snapshot.val();
    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) {
      var valor = objeto[Object.keys(objeto)[i]];
      Humedad_3.push(desencriptar(valor));
    }
    myChart2.data.datasets[2].data = Humedad_3;
    myChart2.update();
    actualizarTabla();
  });

  FB_Hum4.on('value', function (snapshot) {
    Humedad_4 = []
    var objeto = snapshot.val();
    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) {
      var valor = objeto[Object.keys(objeto)[i]];
      Humedad_4.push(desencriptar(valor));
    }
    myChart2.data.datasets[3].data = Humedad_4;
    myChart2.update();
    actualizarTabla();
  });

  //Esta parte toma las fechas y las agrega a los labels de la tabla
  FB_Fechas.on('value', function (snapshot) {
    Fechas = []
    var objeto = snapshot.val();

    var largo = Object.keys(objeto).length;
    for (var i = 0; i < largo; i++) {
      var valor = objeto[Object.keys(objeto)[i]];
      Fechas.push(desencriptar(valor));
    }

    myChart.data.labels = Fechas;
    myChart2.data.labels = Fechas;
    myChart.update();
    myChart2.update();
    actualizarTabla();
  });

}

//Para reiniciar los objetos que están pendientes de los cambios en Firebase
function resetearExternal() {
  FB_Fechas.off();
  FB_Temp1.off();
  FB_Temp2.off();
  FB_Temp3.off();
  FB_Temp4.off();
  FB_Hum1.off();
  FB_Hum2.off();
  FB_Hum3.off();
  FB_Hum4.off();
}