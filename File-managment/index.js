const fs = require('fs');


const bmi=require("./modules/bmi");

//console.log(`El BMI de deissy es ${bmi(86,1.8)}`);

const datos=require("./files/personas.json");
const { SSL_OP_LEGACY_SERVER_CONNECT } = require('constants');

console.log(datos);
datos.map(persona=>console.log(`el BMI de ${persona.name} es : ${bmi(persona.weight,persona.height)}`));

// estoy creando un archivo para escribir en el el BMI de todas las personas, lo podria ahcer con console pero como lo quiero en un archivo lo hago con el metodo.write.
const archivo = fs.createWriteStream("./files/bmi.txt",{ 'flags' : 'a'});
archivo.once("open",(f) => {
datos.map(persona => archivo.write (`\nEl calculo del BMI de ${persona.name} es ${bmi(persona.weight,persona.height)}`));});

fs.readFile("./files/actors.csv", "utf8",(err, datos) =>{
    if(err)
    return console.log(err);
    /*console.log(datos); */
const lineas = datos.split("\n"); //AQUI ESTOY SEPARANDO EL ARCHIVO POR FILAS
lineas.map(linea => {
    const columns = linea.split(","); // Y AQUI ESTOY SEPARANDO EN COLUMNAS
    console.log(columns[1]);
   })
});