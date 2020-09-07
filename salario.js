
"user strict"
const horasStandart=40;
const valorHorastandart=2000;
const incrementoHoraExtra=1.5;
const valorhoraExtra= valorHorastandart*incrementoHoraExtra;
let horasTrabajadas=45;
let totalOrdinario=horasStandart*valorHorastandart;


const calculohorasExtras= function (horasTrabajadas,horasStandart) {
if (horasTrabajadas>horasStandart) {
return horasTrabajadas-horasStandart; }
else { console.log(`Este mes usted no realizo horas extras.`)}};

let horaExtra=calculohorasExtras(horasTrabajadas,horasStandart)
let valorTotalHorasEXtra=horaExtra*valorhoraExtra;
let totalMensual=totalOrdinario+valorTotalHorasEXtra;
    
console.log( `Para este mes su salario mensual es reflejado de acuerdo los siguientes valores:
Total Ordinario:`+totalOrdinario);
console.log(`sus horas extras son:`+ horaExtra);
console.log(`El valor de recargo por sus horas extras es:`+ valorhoraExtra);
console.log( `El valor total por sus horas extras es:`+ valorTotalHorasEXtra);
console.log(`el valor final de su salario es:`+totalMensual);
 
