const CryptoJS = require("crypto-js");
const parametros = process.argv;

const text = "hola mundo";
const key = "1039459138";
const parametro = parametros[2];

 if (parametro === "1") {
textCrypto = CryptoJS.AES.encrypt(text,key).toString();
console.log(textCrypto);
}
else if (parametro === "2") {
    
textCrypto = CryptoJS.AES.encrypt(text,key).toString();
//console.log(textCrypto);

const bytes = CryptoJS.AES.decrypt(textCrypto,key);
const originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText);
};





