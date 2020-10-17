function desencriptar(esp8266_msg) {

    var AESKey = '2B7E151628AED2A6ABF7158809CF4F3C';
    var plain_iv = '00000000000000000000000000000000';

    var iv = CryptoJS.enc.Hex.parse(plain_iv);
    var key = CryptoJS.enc.Hex.parse(AESKey);

    // Decrypt
    var bytes = CryptoJS.AES.decrypt(esp8266_msg, key, { iv: iv });
    var decoded_b64msg = bytes.toString(CryptoJS.enc.Utf8);
    var decoded_msg = atob(decoded_b64msg.substring(0, decoded_b64msg.length - 1));
    
    //console.log("bytes message: ", bytes);
    //console.log("decoded_b64msg message: ", decoded_b64msg);
    //console.log("decoded_msg message:-", decoded_msg);

    return decoded_msg;

}