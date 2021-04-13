/*
Código autogenerado usando ESP Tool by IOT ALL V1.0 para Agenda Cafetera
Generado el: 09-04-2021 16:02:00
*/

//==================================================================================================================================
//--------------------------------------------------| MQTT to Arduino functions |---------------------------------------------------
//==================================================================================================================================

//-----------------------------------------------------| MQTT publish topics: |-----------------------------------------------------

//Modify this block if you need a custom structure for publish topics (You can use the MAC address of the ESP as an unique ID)
function getGlobalTopicForPublish() {
	return "nodes/4C11AEDE9F14/";
}

let topic_ConfigurarWiFi;	//Default topic for publish "ConfigurarWiFi" function.
let topic_ConfigurarGSM;	//Default topic for publish "ConfigurarGSM" function.
let topic_ConfigurarPeriodosDeEnvio;	//Default topic for publish "ConfigurarPeriodosDeEnvio" function.
let topic_RequestConfigData;	//Default topic for publish "RequestConfigData" function.

function startPublishTopics() {
	topic_ConfigurarWiFi = getGlobalTopicForPublish() + "configurarwifi";	//Default topic for publish "ConfigurarWiFi" function.
	topic_ConfigurarGSM = getGlobalTopicForPublish() + "configurargsm";	//Default topic for publish "ConfigurarGSM" function.
	topic_ConfigurarPeriodosDeEnvio = getGlobalTopicForPublish() + "configurarperiodosdeenvio";	//Default topic for publish "ConfigurarPeriodosDeEnvio" function.
	topic_RequestConfigData = getGlobalTopicForPublish() + "requestconfigdata";	//Default topic for publish "RequestConfigData" function.
}

//==================================================================================================================================
//---------------------------------------------| MQTT to Arduino function definitions |---------------------------------------------
//==================================================================================================================================

function ConfigurarWiFi(topic, wifi_SSID, wifi_PASS) {


	//--------------------------------|  DON'T EDIT THIS BLOCK OF CODE  |---------------------------------
	const Topic = topic || topic_ConfigurarWiFi
	const send = {
		"MQTTFunctionID": 0,
		"params": {
			"wifi_SSID": wifi_SSID,
			"wifi_PASS": wifi_PASS
		}
	};
	//-----------------------------------------------| ~ |------------------------------------------------

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (MQTTToArduinoDebug) {
		console.log(`\nSending "ConfigurarWiFi" :`);
		console.log(`\twifi_SSID: ${wifi_SSID}`);
		console.log(`\twifi_PASS: ${wifi_PASS}`);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	client.publish(Topic ,JSON.stringify(send), { qos: 1, rein: false }, (error) => {
		if (MQTTToArduinoDebug) console.log(error || `MQTT sending of "ConfigurarWiFi" to backend [Topic: \"${Topic}\"] succeeded.`);
	});

	//Write your own code for "ConfigurarWiFi" here if necessary (Probably not). Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: kmapgydnvi



	//End of your own code. 	Code: kmapgydnvi

}

function ConfigurarGSM(topic, APN, gsm_user, gsm_pass) {


	//--------------------------------|  DON'T EDIT THIS BLOCK OF CODE  |---------------------------------
	const Topic = topic || topic_ConfigurarGSM
	const send = {
		"MQTTFunctionID": 1,
		"params": {
			"APN": APN,
			"gsm_user": gsm_user,
			"gsm_pass": gsm_pass
		}
	};
	//-----------------------------------------------| ~ |------------------------------------------------

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (MQTTToArduinoDebug) {
		console.log(`\nSending "ConfigurarGSM" :`);
		console.log(`\tAPN: ${APN}`);
		console.log(`\tgsm_user: ${gsm_user}`);
		console.log(`\tgsm_pass: ${gsm_pass}`);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	client.publish(Topic ,JSON.stringify(send), { qos: 1, rein: false }, (error) => {
		if (MQTTToArduinoDebug) console.log(error || `MQTT sending of "ConfigurarGSM" to backend [Topic: \"${Topic}\"] succeeded.`);
	});

	//Write your own code for "ConfigurarGSM" here if necessary (Probably not). Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: ypezarfyiu



	//End of your own code. 	Code: ypezarfyiu

}

function ConfigurarPeriodosDeEnvio(topic, datastations_period, realtime_period) {


	//--------------------------------|  DON'T EDIT THIS BLOCK OF CODE  |---------------------------------
	const Topic = topic || topic_ConfigurarPeriodosDeEnvio
	const send = {
		"MQTTFunctionID": 3,
		"params": {
			"datastations_period": datastations_period,
			"realtime_period": realtime_period
		}
	};
	//-----------------------------------------------| ~ |------------------------------------------------

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (MQTTToArduinoDebug) {
		console.log(`\nSending "ConfigurarPeriodosDeEnvio" :`);
		console.log(`\tdatastations_period: ${datastations_period}`);
		console.log(`\trealtime_period: ${realtime_period}`);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	client.publish(Topic ,JSON.stringify(send), { qos: 1, rein: false }, (error) => {
		if (MQTTToArduinoDebug) console.log(error || `MQTT sending of "ConfigurarPeriodosDeEnvio" to backend [Topic: \"${Topic}\"] succeeded.`);
	});

	//Write your own code for "ConfigurarPeriodosDeEnvio" here if necessary (Probably not). Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: chiczowoky



	//End of your own code. 	Code: chiczowoky

}

function RequestConfigData(topic) {


	//--------------------------------|  DON'T EDIT THIS BLOCK OF CODE  |---------------------------------
	const Topic = topic || topic_RequestConfigData
	const send = {
		"MQTTFunctionID": 4,
		"params": {}
	};
	//-----------------------------------------------| ~ |------------------------------------------------

	//-----------------------------|  Debugging print. Remove if you want.  |-----------------------------
	if (MQTTToArduinoDebug) {
		console.log(`\nSending "RequestConfigData"`);
	}
	//-----------------------------------------------| ~ |------------------------------------------------

	client.publish(Topic ,JSON.stringify(send), { qos: 1, rein: false }, (error) => {
		if (MQTTToArduinoDebug) console.log(error || `MQTT sending of "RequestConfigData" to backend [Topic: \"${Topic}\"] succeeded.`);
	});

	//Write your own code for "RequestConfigData" here if necessary (Probably not). Code inside this comments will not overwrite. DON'T EDIT OR REMOVE THIS COMMENTS. 	Code: zggkwpcyxk



	//End of your own code. 	Code: zggkwpcyxk

}

