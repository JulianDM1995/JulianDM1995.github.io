/*
Código autogenerado usando ESP Tool by IOT ALL V1.0 para Agenda Cafetera
Generado el: 09-04-2021 16:02:00
*/

//==================================================================================================================================
//--------------------------------------------------| Arduino to MQTT functions |---------------------------------------------------
//==================================================================================================================================

//----------------------------------------------------| MQTT subscribe topics: |----------------------------------------------------


//Modify this block if you need a custom structure for subscription topics (You can use the MAC address of the ESP as an unique ID)
function getGlobalTopicForSubscription() {
	return "nodes/4C11AEDE9F14/";
}

//Modify this block if you need custom subscription topics.
let topic_datastations;	//Default topic for subscription "datastations" function.
let topic_realtime;	//Default topic for subscription "realtime" function.
let topic_StreamConfigData;	//Default topic for subscription "StreamConfigData" function.

function startSubscriptionTopics() {
	topic_datastations = getGlobalTopicForSubscription() + "datastations";
	topic_realtime = getGlobalTopicForSubscription() + "realtime";
	topic_StreamConfigData = getGlobalTopicForSubscription() + "streamconfigdata";
}

//==================================================================================================================================
//---------------------------------------------| Arduino to MQTT function definitions |---------------------------------------------
//==================================================================================================================================

/*In Arduino add: " datastations(stringVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar); " to call this function. */
function datastations(station_id, longitud, latitud, altitud, precipitacion, velocidad_viento, direccion_viento, temperatura_int, temperatura_ext, humedad, presion, luminosidad) {

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (ArduinoToMQTTDebug) {
		console.log(`\nExecuting MQTT function "datastations" from topic "${topic_datastations}" :`);
		console.log(`\tstation_id: ${station_id}`);
		console.log(`\tlongitud: ${longitud}`);
		console.log(`\tlatitud: ${latitud}`);
		console.log(`\taltitud: ${altitud}`);
		console.log(`\tprecipitacion: ${precipitacion}`);
		console.log(`\tvelocidad_viento: ${velocidad_viento}`);
		console.log(`\tdireccion_viento: ${direccion_viento}`);
		console.log(`\ttemperatura_int: ${temperatura_int}`);
		console.log(`\ttemperatura_ext: ${temperatura_ext}`);
		console.log(`\thumedad: ${humedad}`);
		console.log(`\tpresion: ${presion}`);
		console.log(`\tluminosidad: ${luminosidad}`);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	//Write your own code for "datastations" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: ivonlopgqc



	//End of your own code. 	Code: ivonlopgqc

}

/*In Arduino add: " realtime(stringVar, floatVar, floatVar, floatVar, intVar, floatVar, longVar, intVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar, floatVar); " to call this function. */
function realtime(station_id, longitud, latitud, altitud, satellites, altitud1, ultimoDatoGPS, charsGPS, precipitacion, velocidad_viento, direccion_viento, temperatura_int, temperatura_ext, humedad, presion, luminosidad) {

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (ArduinoToMQTTDebug) {
		console.log(`\nExecuting MQTT function "realtime" from topic "${topic_realtime}" :`);
		console.log(`\tstation_id: ${station_id}`);
		console.log(`\tlongitud: ${longitud}`);
		console.log(`\tlatitud: ${latitud}`);
		console.log(`\taltitud: ${altitud}`);
		console.log(`\tsatellites: ${satellites}`);
		console.log(`\taltitud1: ${altitud1}`);
		console.log(`\tultimoDatoGPS: ${ultimoDatoGPS}`);
		console.log(`\tcharsGPS: ${charsGPS}`);
		console.log(`\tprecipitacion: ${precipitacion}`);
		console.log(`\tvelocidad_viento: ${velocidad_viento}`);
		console.log(`\tdireccion_viento: ${direccion_viento}`);
		console.log(`\ttemperatura_int: ${temperatura_int}`);
		console.log(`\ttemperatura_ext: ${temperatura_ext}`);
		console.log(`\thumedad: ${humedad}`);
		console.log(`\tpresion: ${presion}`);
		console.log(`\tluminosidad: ${luminosidad}`);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	//Write your own code for "realtime" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: eeyewowngn

	document.getElementById("longitud").innerHTML = longitud;
	document.getElementById("latitud").innerHTML = latitud;
	document.getElementById("altitud").innerHTML = altitud;
	document.getElementById("satellites").innerHTML = satellites;
	document.getElementById("altitud1").innerHTML = altitud1;
	document.getElementById("ultimoDatoGPS").innerHTML = ultimoDatoGPS;
	document.getElementById("charsGPS").innerHTML = charsGPS;
	document.getElementById("precipitacion").innerHTML = precipitacion;
	document.getElementById("velocidad_viento").innerHTML = velocidad_viento;
	document.getElementById("direccion_viento").innerHTML = direccion_viento + " " + getWindvaneDirection(direccion_viento);
	document.getElementById("temperatura0").innerHTML = temperatura_int;
	document.getElementById("temperatura1").innerHTML = temperatura_ext;
	document.getElementById("humedad").innerHTML = humedad;
	document.getElementById("presion").innerHTML = presion;
	document.getElementById("luminosidad").innerHTML = luminosidad;

	//End of your own code. 	Code: eeyewowngn

}

/*In Arduino add: " StreamConfigData(stringVar, stringVar, stringVar, intVar, intVar, stringArr, ArrLength, intArr, ArrLength, intArr, ArrLength, intVar, stringVar); " to call this function. */
function StreamConfigData(station_id, currentSSID, currentAPN, current_datastations_period, current_realtime_period, SSIDs, RSSIs, ENCPRs, internetConnectionType, FirmwareVer) {

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (ArduinoToMQTTDebug) {
		console.log(`\nExecuting MQTT function "StreamConfigData" from topic "${topic_StreamConfigData}" :`);
		console.log(`\tstation_id: ${station_id}`);
		console.log(`\tcurrentSSID: ${currentSSID}`);
		console.log(`\tcurrentAPN: ${currentAPN}`);
		console.log(`\tcurrent_datastations_period: ${current_datastations_period}`);
		console.log(`\tcurrent_realtime_period: ${current_realtime_period}`);
		console.log(`\tSSIDs: [${SSIDs}]`);
		console.log(`\tRSSIs: [${RSSIs}]`);
		console.log(`\tENCPRs: [${ENCPRs}]`);
		console.log(`\tinternetConnectionType: ${internetConnectionType}`);
		console.log(`\tFirmwareVer: ${FirmwareVer}`);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	//Write your own code for "StreamConfigData" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: lejubpeyil



	//End of your own code. 	Code: lejubpeyil

}

//----------------------------------------------| JSON decoder and function assigner |----------------------------------------------

function executeFunction({params}, topic) {
	//Function selecter
	if (topic == getTopicString(topic_datastations)) {	//When "datastations" function is called.
		const station_id = params.station_id;	//Parse of "station_id" parameter of "datastations" function
		const longitud = params.longitud;	//Parse of "longitud" parameter of "datastations" function
		const latitud = params.latitud;	//Parse of "latitud" parameter of "datastations" function
		const altitud = params.altitud;	//Parse of "altitud" parameter of "datastations" function
		const precipitacion = params.precipitacion;	//Parse of "precipitacion" parameter of "datastations" function
		const velocidad_viento = params.velocidad_viento;	//Parse of "velocidad_viento" parameter of "datastations" function
		const direccion_viento = params.direccion_viento;	//Parse of "direccion_viento" parameter of "datastations" function
		const temperatura_int = params.temperatura_int;	//Parse of "temperatura_int" parameter of "datastations" function
		const temperatura_ext = params.temperatura_ext;	//Parse of "temperatura_ext" parameter of "datastations" function
		const humedad = params.humedad;	//Parse of "humedad" parameter of "datastations" function
		const presion = params.presion;	//Parse of "presion" parameter of "datastations" function
		const luminosidad = params.luminosidad;	//Parse of "luminosidad" parameter of "datastations" function
		datastations(station_id, longitud, latitud, altitud, precipitacion, velocidad_viento, direccion_viento, temperatura_int, temperatura_ext, humedad, presion, luminosidad);
	}
	else if (topic == getTopicString(topic_realtime)) {	//When "realtime" function is called.
		const station_id = params.station_id;	//Parse of "station_id" parameter of "realtime" function
		const longitud = params.longitud;	//Parse of "longitud" parameter of "realtime" function
		const latitud = params.latitud;	//Parse of "latitud" parameter of "realtime" function
		const altitud = params.altitud;	//Parse of "altitud" parameter of "realtime" function
		const satellites = params.satellites;	//Parse of "satellites" parameter of "realtime" function
		const altitud1 = params.altitud1;	//Parse of "altitud1" parameter of "realtime" function
		const ultimoDatoGPS = params.ultimoDatoGPS;	//Parse of "ultimoDatoGPS" parameter of "realtime" function
		const charsGPS = params.charsGPS;	//Parse of "charsGPS" parameter of "realtime" function
		const precipitacion = params.precipitacion;	//Parse of "precipitacion" parameter of "realtime" function
		const velocidad_viento = params.velocidad_viento;	//Parse of "velocidad_viento" parameter of "realtime" function
		const direccion_viento = params.direccion_viento;	//Parse of "direccion_viento" parameter of "realtime" function
		const temperatura_int = params.temperatura_int;	//Parse of "temperatura_int" parameter of "realtime" function
		const temperatura_ext = params.temperatura_ext;	//Parse of "temperatura_ext" parameter of "realtime" function
		const humedad = params.humedad;	//Parse of "humedad" parameter of "realtime" function
		const presion = params.presion;	//Parse of "presion" parameter of "realtime" function
		const luminosidad = params.luminosidad;	//Parse of "luminosidad" parameter of "realtime" function
		realtime(station_id, longitud, latitud, altitud, satellites, altitud1, ultimoDatoGPS, charsGPS, precipitacion, velocidad_viento, direccion_viento, temperatura_int, temperatura_ext, humedad, presion, luminosidad);
	}
	else if (topic == getTopicString(topic_StreamConfigData)) {	//When "StreamConfigData" function is called.
		const station_id = params.station_id;	//Parse of "station_id" parameter of "StreamConfigData" function
		const currentSSID = params.currentSSID;	//Parse of "currentSSID" parameter of "StreamConfigData" function
		const currentAPN = params.currentAPN;	//Parse of "currentAPN" parameter of "StreamConfigData" function
		const current_datastations_period = params.current_datastations_period;	//Parse of "current_datastations_period" parameter of "StreamConfigData" function
		const current_realtime_period = params.current_realtime_period;	//Parse of "current_realtime_period" parameter of "StreamConfigData" function
		const SSIDs = params.SSIDs;	//Parse of "SSIDs" parameter of "StreamConfigData" function
		const RSSIs = params.RSSIs;	//Parse of "RSSIs" parameter of "StreamConfigData" function
		const ENCPRs = params.ENCPRs;	//Parse of "ENCPRs" parameter of "StreamConfigData" function
		const internetConnectionType = params.internetConnectionType;	//Parse of "internetConnectionType" parameter of "StreamConfigData" function
		const FirmwareVer = params.FirmwareVer;	//Parse of "FirmwareVer" parameter of "StreamConfigData" function
		StreamConfigData(station_id, currentSSID, currentAPN, current_datastations_period, current_realtime_period, SSIDs, RSSIs, ENCPRs, internetConnectionType, FirmwareVer);
	}
}
