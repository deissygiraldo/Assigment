const express = require("express");
const app = express ();

const port = 3000; 

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

const port = 3000;
*/

app.listen(port, () => {
    console.log("Servidor iniciado ...");
});

const logMiddleware = (req, res, next) => {
    console.log(`${new Date(Date.now()).toTimeString()} ${req.method} ${req.path} ${req.ip}`);
    next();
};

app.get("/", logMiddleware, (req, res) => { 
    res.send("Esta es la ruta raiz");
});

app.route("/users")
    .get((req,res)=>{

    }) 
    .post((req,res)=>{

    }) 
    .put((req,res)=>{

    })
    .delete((req,res)=>{

    });  
    

app.get("/users/:id", logMiddleware, (req, res) => {
    const id = req.params.id;
    res.send(`Esta es la página del usuario ${id}`);
});

app.get("/tweets", logMiddleware, (req, res) => {
    const { id, username } = req.query;
    res.send(`Esta es el tweet ${id} y el ususario ${username}`);
});


//class sep 22 other methots

