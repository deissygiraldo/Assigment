const express = require("express");
const app = express ();
const dotenv = require("dotenv").config(); // require for the library to read the .env file
const config = require("./config");
const api = require("./api");

app.use(express.json());
app.use("/api", api);
app.use("/api/v1", api);
app.listen(config.port, () => {
    console.log("Servidor iniciado ...");
});

/* metodo get es que permite hacer la busqueda desde el navegador.
// el primer parametro es la ruta y el ultimo e smi funcion call back que debe tener siempre dos parametros.
app.get("/",(req,res) => {
    res.send("Esta es la ruta principal");
    console.log(`${new Date(Date.now()).toTimeString()} ${req.method} ${req.path} ${req.ip}`);//get the time, methoth, path and ip of who is requesting my app.
    /*console.log(req.headers);
    console.log(req.method);
    console.log(req.path);
});

app.get( "/users",(req,res) =>{
    console.log(`${new Date(Date.now()).toTimeString()} ${req.method} ${req.path} ${req.ip}`);//log
    res.send("Estsa es la ruta de ususarios")
})

app.get("/tweets", (req, res) => {
    console.log(`${new Date(Date.now()).toTimeString()} ${req.method} ${req.path} ${req.ip}`);//log
    const { id, username } = req.query;//destructutacion
    res.send(`Esta es el tweet ${id} y el ususario ${username}`);
});

/*app.listen(port, ()=>{
    console.log("Servidor inciando...");
});
const express = require("express");
const app = express();
app.use(express.json()); //recibir info en formato json
const port = 3000;
app.use(logMiddleware); //log en toda la app
*/



