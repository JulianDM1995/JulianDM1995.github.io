/*
Código autogenerado usando ESP Tool by IOT ALL V1.0 para Agenda Cafetera
Generado el: 09-04-2021 16:02:00
*/

//==================================================================================================================================
//----------------------------------------------------| MQTT Connection events |----------------------------------------------------
//==================================================================================================================================
//-----------------------------------------------------| On client connection |-----------------------------------------------------

client.on('connect', () => {
	if (ArduinoToMQTTDebug) console.log("MQTT connected as \"" + clientID + "\"");
	subscribeToTopics(); // Don't remove this line

	//Write your own code for "On client connection" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: osccmqttef



	//End of your own code. 	Code: osccmqttef

})

//-----------------------------------------------------| On client reconnect |------------------------------------------------------

client.on('reconnect', (error) => {
	if (ArduinoToMQTTDebug) console.log('MQTT Reconnecting:', error)

	//Write your own code for "On client reconnect" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: osdcmqttef



	//End of your own code. 	Code: osdcmqttef

})

//-------------------------------------------------------| On client error |--------------------------------------------------------

client.on('error', (error) => {
	if (ArduinoToMQTTDebug) console.log('MQTT Connection error:', error)

	//Write your own code for "On client error" here. Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: osdcmqttef



	//End of your own code. 	Code: osdcmqttef

})

