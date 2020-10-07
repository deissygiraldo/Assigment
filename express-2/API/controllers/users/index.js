
const users = require("./../../models/users");

const getUsers = (req, res)=>{
    res.send(users);
};

const newUser = (req, res)=>{
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
};

const deleteUser = (req, res) => {
    const username = req.params.username;
    const findUser = users.find(u => u.username === username);
    if( findUser === undefined ){
        res.status(500).send("El usuario consultado no existe");
    }else{
        const result = users.filter(u => u.username !== username);
        users = result;
        res.status(200).send(users);
    }
};

const updateUser = (req, res) => {
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
};

const getUser = (req, res) => {
    const username = req.params.username;
    const findUser = users.find(u => u.username === username);
    if( findUser === undefined ){
        res.status(500).send("El usuario consultado no existe");
    }else{
        res.status(200).send(findUser);
    }
};

module.exports = {getUsers, newUser, deleteUser, updateUser, getUser};