/*
Código autogenerado usando ESP Tool by IOT ALL V1.0 para Agenda Cafetera
Generado el: 09-04-2021 16:02:00
*/

//--------------------------------------------------| DONT FORGET TO ADD IN HTML |--------------------------------------------------
/*
<script src="LocalServer.js"></script>
<script src="ArduinoToLocalServer.js"></script>
<script src="LocalServerToArduino.js"></script>
<script src="ConnEvt.js"></script>
<script src="LoadSPIFFS.js"></script>
*/
//-------------------------------------------------------| IOTALL VARIABLES |-------------------------------------------------------

var reconnectionPeriod = 1000;

//-------------------------------------------------------| DEBUG VARIABLES |--------------------------------------------------------

var ServeDebug = true;
var BackendToFrontendDebug = true;
var FrontendToBackendDebug = true;
var LoadFunctionsDebug = true;

//==================================================================================================================================
//--------------------------------------------| MAIN CODE FOR JAVASCRIPT/LOCAL-SERVER |---------------------------------------------
//==================================================================================================================================


//---------------------------------------------------| WEBSOCKET CONFIGURATION |----------------------------------------------------

var websocket;
window.addEventListener("load", webSocketEvent, false);

function webSocketEvent() {
	websocket = new WebSocket('ws://' + location.hostname + ':81/');
	websocket.onopen = function (evt) {
		onServerConnection();
	};
	websocket.onclose = function (evt) {
		setTimeout(function () {
			webSocketEvent()
		}, reconnectionPeriod);
		onServerDisconnection();
	};
	websocket.onmessage = function (evt) {
		//console.log("Received:" + evt.data);

		//Load values from this json object
		var jsonObj = JSON.parse(evt.data);

		executeFunction(jsonObj);
	};
	websocket.onerror = function (evt) {
		console.log("Websocket error :" + evt.data);
	};
}

//---------------------------------------------------------| JSON REQUEST |---------------------------------------------------------

function ArduinoJSONRequest(url, requestFunction) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			requestFunction(this.responseText);
		}
	};

	xhr.onerror = function () {
		console.log("Error in the request of \"" + url + "\"");
	};

	xhr.open("GET", url, true);
	xhr.send();
};
