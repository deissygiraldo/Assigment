const express = require("express");
const app = express ();

const port = 3000; 

// metodo get es que permite hacer la busqueda desde el navegador.
// el primer parametro es la ruta y el ultimo e smi funcion call back que debe tener siempre dos parametros.
app.get("/",(req,res) => {
    res.send("Esta es la ruta principal");
    console.log(`${new Date(Date.now()).toTimeString()} ${req.method} ${req.path} ${req.ip}`);//get the time, methoth, path and ip of who is requesting my app.
    /*console.log(req.headers);
    console.log(req.method);
    console.log(req.path);*/
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


app.listen(port, ()=>{
    console.log("Servidor inciando...");
});