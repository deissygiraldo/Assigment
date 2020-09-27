const CryptoJS = require("crypto-js");

const text = "hola mundo";
const key = "1039459138";

//encrypt

const textCrypto = CryptoJS.AES.encrypt(text,key).toString();
console.log(textCrypto);

//Decrypt

const bytes = CryptoJS.AES.decrypt(textCrypto,key);
const originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText);