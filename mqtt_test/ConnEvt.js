/*
Código autogenerado usando ESP Tool by IOT ALL V1.0 para Agenda Cafetera
Generado el: 09-04-2021 16:02:00
*/

//==================================================================================================================================
//------------------------------------------------------| Connection events |-------------------------------------------------------
//==================================================================================================================================

//-----------------------------------------------------| On server connection |-----------------------------------------------------

function onServerConnection() {
	if (BackendToFrontendDebug) console.log("Arduino/Local server webSocket connected");

	//load_ConfigurarID(); // when it's loaded, the function on_load_ConfigurarID() is called
	//load_ConfigurarUltimaIP_WIFI(); // when it's loaded, the function on_load_ConfigurarUltimaIP_WIFI() is called
	//load_ModoDeConexionPreferido(); // when it's loaded, the function on_load_ModoDeConexionPreferido() is called
	//load_ConfigurarPeriodosDeEnvio(); // when it's loaded, the function on_load_ConfigurarPeriodosDeEnvio() is called

	//Write your own code for "On server connection" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: osccabcdef

	load_ConfigurarID();
	RequestConfigDataLocal();

	//End of your own code. 	Code: osccabcdef

}

//---------------------------------------------------| On server disconnection |----------------------------------------------------

function onServerDisconnection() {
	if (BackendToFrontendDebug) console.log("Arduino/Local server webSocket disconnected");

	//Write your own code for "On server disconnection" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: osdcabcdef



	//End of your own code. 	Code: osdcabcdef

}

