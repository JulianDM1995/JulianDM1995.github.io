  // Configuración de Firebase propia de este proyecto
  var firebaseConfig = {
    apiKey: "AIzaSyCp0s0gDvv_9t64oxYb1mAPAX3X0x_-Huk",
    authDomain: "iot-tesisusb-c5a4a.firebaseapp.com",
    databaseURL: "https://iot-tesisusb-c5a4a.firebaseio.com",
    projectId: "iot-tesisusb-c5a4a",
    storageBucket: "iot-tesisusb-c5a4a.appspot.com",
    messagingSenderId: "810100706507",
    appId: "1:810100706507:web:39768c29b496de10565f4e",
    measurementId: "G-S30XZX1JP9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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
    console.log("Iniciando sensores remotos");

    FB_Temp1 = firebase.database().ref().child("Prototipo" + prototipo + "/Temperatura_1");
    FB_Temp2 = firebase.database().ref().child("Prototipo" + prototipo + "/Temperatura_2");
    FB_Temp3 = firebase.database().ref().child("Prototipo" + prototipo + "/Temperatura_3");
    FB_Temp4 = firebase.database().ref().child("Prototipo" + prototipo + "/Temperatura_4");

    FB_Hum1 = firebase.database().ref().child("Prototipo" + prototipo + "/Humedad_1");
    FB_Hum2 = firebase.database().ref().child("Prototipo" + prototipo + "/Humedad_2");
    FB_Hum3 = firebase.database().ref().child("Prototipo" + prototipo + "/Humedad_3");
    FB_Hum4 = firebase.database().ref().child("Prototipo" + prototipo + "/Humedad_4");

    FB_Fechas = firebase.database().ref().child("Fechas");

    FB_Temp1.on('value', function (snapshot) {
      Temperatura_1 = []
      var objeto = snapshot.val();
      var largo = Object.keys(objeto).length;
      for (var i = 0; i < largo; i++) {
        var valor = objeto[Object.keys(objeto)[i]];
        Temperatura_1.push(valor);
      }
      myChart.data.datasets[0].data = Temperatura_1;
      myChart.update();
      actualizarTabla();
    });

    FB_Temp2.on('value', function (snapshot) {
      Temperatura_2 = []
      var objeto = snapshot.val();
      var largo = Object.keys(objeto).length;
      for (var i = 0; i < largo; i++) {
        var valor = objeto[Object.keys(objeto)[i]];
        Temperatura_2.push(valor);
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
        Temperatura_3.push(valor);
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
        Temperatura_4.push(valor);
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
        Humedad_1.push(valor);
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
        Humedad_2.push(valor);
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
        Humedad_3.push(valor);
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
        Humedad_4.push(valor);
      }
      myChart2.data.datasets[3].data = Humedad_4;
      myChart2.update();
      actualizarTabla();
    });

    FB_Fechas.on('value', function (snapshot) {
      Fechas = []
      var objeto = snapshot.val();
      var largo = Object.keys(objeto).length;
      for (var i = 0; i < largo; i++) {
        var valor = objeto[Object.keys(objeto)[i]];
        Fechas.push(valor);
      }
      myChart.data.labels = Fechas;
      myChart2.data.labels = Fechas;
      myChart.update();
      myChart2.update();
      actualizarTabla();
    });

  }