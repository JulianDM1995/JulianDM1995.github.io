/*
Código autogenerado usando ESP Tool by IOT ALL V1.0 para Agenda Cafetera
Generado el: 09-04-2021 16:02:00
*/

//--------------------------------------------------| DONT FORGET TO ADD IN HTML |--------------------------------------------------
/*
	<script src="https://unpkg.com/mqtt/dist/mqtt.min.js"></script>
	<script src="MQTTController.js"></script>
	<script src="ConnEvt_MQTT.js"></script>
	<script src="ArduinoToMQTT.js"></script>
	<script src="MQTTToArduino.js"></script>
*/
//-------------------------------------------------------| DEBUG VARIABLES |--------------------------------------------------------

let ArduinoToMQTTDebug = true;
let MQTTToArduinoDebug = true;

//--------------------------------------------------------| MQTT client ID |--------------------------------------------------------

//Modify this block if you need a custom client ID
let clientID_PREFIX = "_js";
let clientID = "";
function getClientID() {
	var randomString = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < 4; i++) {
		randomString += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	clientID = clientID_PREFIX + "_" + randomString;
	return clientID;
}

//-------------------------------------------------------| MQTT parameters |--------------------------------------------------------

// connect options
const options = {
	connectTimeout: 4000,

	// Authentication
	clientId: getClientID(),
	//username: '',
	//password: '',

	keepalive: 60,
	clean: true,
}

//----------------------------------------------------| WebSocket connect url |-----------------------------------------------------

const WebSocket_URL = 'ws://40.78.152.85:8083/mqtt'

//-------------------------------------------------------| MQTT Connection |--------------------------------------------------------

const client = mqtt.connect(WebSocket_URL, options)

//==================================================================================================================================
//---------------------------------------------| MAIN CODE FOR JAVASCRIPT/MQTT-SERVER |---------------------------------------------
//==================================================================================================================================

//-----------------------------------------------------| Subscribe functions |------------------------------------------------------

function subscribeTo(topic) {
	client.subscribe(topic, { qos: 0 }, (error) => {
		if (!error) {
			if (ArduinoToMQTTDebug) console.log('Subscription to \"' + topic + '\" succeeded')
		} else {
			if (ArduinoToMQTTDebug) console.log('Subscription to \"' + topic + '\" failed:', error)
		}
	})
}

function subscribeToTopics() {
	startSubscriptionTopics();
	startPublishTopics();
	subscribeTo(topic_datastations);
	subscribeTo(topic_realtime);
	subscribeTo(topic_StreamConfigData);
}

//------------------------------------------------------| On client message |-------------------------------------------------------

function getTopicString(topicString) {
	const topicArray = topicString.split("/");
	return topicArray[topicArray.length -1 ];
}

client.on('message', (topic, message) => {
	const messageString = message.toString();
	const topicString = topic.toString();
	//console.log(messageString, topicString);
	const jsonObj = JSON.parse(messageString);
	executeFunction(jsonObj, getTopicString(topicString));
})

