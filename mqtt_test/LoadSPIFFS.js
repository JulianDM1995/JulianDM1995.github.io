/*
Código autogenerado usando ESP Tool by IOT ALL V1.0 para Agenda Cafetera
Generado el: 09-04-2021 16:02:00
*/

//==================================================================================================================================
//-------------------------------------------| Functions to LOAD variables from SPIFFS |--------------------------------------------
//==================================================================================================================================

//-----------------------------------------| Available functions to invoke a load request |-----------------------------------------

// load_ConfigurarID();
// load_ConfigurarUltimaIP_WIFI();
// load_ModoDeConexionPreferido();
// load_ConfigurarPeriodosDeEnvio();

//------------------------------------------------------| On load functions |-------------------------------------------------------

// This function will execute when "load_ConfigurarID()" is called and successfully streamed
function on_load_ConfigurarID(station_id) {

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (LoadFunctionsDebug) {
		console.log("Loaded \"ConfigurarID\" :");
		console.log("\tstation_id: " + station_id);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	//Write your own code for "ConfigurarID" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: itxizheifx

	renderQR(station_id);


	//End of your own code. 	Code: itxizheifx

}

// This function will execute when "load_ConfigurarUltimaIP_WIFI()" is called and successfully streamed
function on_load_ConfigurarUltimaIP_WIFI(utlimo_ip) {

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (LoadFunctionsDebug) {
		console.log("Loaded \"ConfigurarUltimaIP_WIFI\" :");
		console.log("\tutlimo_ip: " + utlimo_ip);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	//Write your own code for "ConfigurarUltimaIP_WIFI" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: ospdfejfst



	//End of your own code. 	Code: ospdfejfst

}

// This function will execute when "load_ModoDeConexionPreferido()" is called and successfully streamed
function on_load_ModoDeConexionPreferido(tipo) {

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (LoadFunctionsDebug) {
		console.log("Loaded \"ModoDeConexionPreferido\" :");
		console.log("\ttipo: " + tipo);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	//Write your own code for "ModoDeConexionPreferido" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: gmhdwvexdv



	//End of your own code. 	Code: gmhdwvexdv

}

// This function will execute when "load_ConfigurarPeriodosDeEnvio()" is called and successfully streamed
function on_load_ConfigurarPeriodosDeEnvio(datastations_period, realtime_period) {

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (LoadFunctionsDebug) {
		console.log("Loaded \"ConfigurarPeriodosDeEnvio\" :");
		console.log("\tdatastations_period: " + datastations_period);
		console.log("\trealtime_period: " + realtime_period);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	//Write your own code for "ConfigurarPeriodosDeEnvio" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: chiczowoky



	//End of your own code. 	Code: chiczowoky

}

//----------------------------------------------------| ON LOAD JSON FUNCTIONS |----------------------------------------------------

function load_ConfigurarID(){
	ArduinoJSONRequest("ConfigurarID.json", function (jsonString) {
		let jsonData = JSON.parse(jsonString);
		let station_id = jsonData["station_id"];
		on_load_ConfigurarID(station_id);
	});
}

function load_ConfigurarUltimaIP_WIFI(){
	ArduinoJSONRequest("ConfigurarUltimaIP_WIFI.json", function (jsonString) {
		let jsonData = JSON.parse(jsonString);
		let utlimo_ip = jsonData["utlimo_ip"];
		on_load_ConfigurarUltimaIP_WIFI(utlimo_ip);
	});
}

function load_ModoDeConexionPreferido(){
	ArduinoJSONRequest("ModoDeConexionPreferido.json", function (jsonString) {
		let jsonData = JSON.parse(jsonString);
		let tipo = jsonData["tipo"];
		on_load_ModoDeConexionPreferido(tipo);
	});
}

function load_ConfigurarPeriodosDeEnvio(){
	ArduinoJSONRequest("ConfigurarPeriodosDeEnvio.json", function (jsonString) {
		let jsonData = JSON.parse(jsonString);
		let datastations_period = jsonData["datastations_period"];
		let realtime_period = jsonData["realtime_period"];
		on_load_ConfigurarPeriodosDeEnvio(datastations_period, realtime_period);
	});
}

