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

const users = [];
const logMiddleware = (req, res, next) => {
    console.log(`${new Date(Date.now()).toTimeString()} ${req.method} ${req.path} ${req.ip}`);
    next();
};

app.use(logMiddleware); //log en toda la app
app.use(express.json()); //recibir info en formato json

app.get("/", logMiddleware, (req, res) => { 
    res.send("Esta es la ruta raiz");
});

//class 22th
app.route("/users")
    .get((req,res)=>{
        res.send(users);

    }) 
    .post((req,res)=>{
        const user = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        const findUser = users.find(u => u.username === user.username);
        if (findUser === undefined){
            users.push(user);
            res.status(200).send(`El usuario creado es: ${user.name}`);
        }else{
            res.status(500).send("El usuario ya existe");
        }  
    }) 


    app.route("/users/:username")
    .get((req, res) => {
        const username = req.params.username;
        const findUser = users.find(u => u.username === username);
        if( findUser === undefined ){
            res.status(500).send("El usuario consultado no existe");
        }else{
            res.status(200).send(findUser);
        }
    })
    .put((req, res) => {
        const username = req.params.username;
        const user = {
            name: req.body.name,
            username: username,
            email: req.body.email,
            password: req.body.password
        };
        const findUser = users.find(u => u.username === username);
        if( findUser === undefined ){
            res.status(500).send("El usuario consultado no existe");
        }else{
            const elementsIndex = users.findIndex(u => u.username === username );
            users[elementsIndex] = user;
            res.status(200).send(users);
        }
    })    
    .delete((req, res) => {
        const username = req.params.username;
        const findUser = users.find(u => u.username === username);
        if( findUser === undefined ){
            res.status(500).send("El usuario consultado no existe");
        }else{
            const result = users.filter(u => u.username !== username);
            users = result;
            res.status(200).send(users);
        }
    });
    


app.get("/tweets", logMiddleware, (req, res) => {
    const { id, username } = req.query;
    res.send(`Esta es el tweet ${id} y el ususario ${username}`);
});




