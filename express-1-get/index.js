const express = require("express");
const app = express();

const port = 3000;

//definir rutas (GET, POST, PUT, DELETE)
//en el protocolo HTTP se pueden hacer requests y obtener responses
app.get("/", (request, response) => {
    response.send("Este es el home");
});
app.get("/users", (request, response) => {
    response.send("Esta es la ruta de usuarios");
});

//inicializar el servidor web
app.listen(port, () => {
    console.log("Servidor iniciado ...");
});