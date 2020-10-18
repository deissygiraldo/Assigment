const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("./../../models/users");
const config = require("./../../../config");
const response = require("./../../lib/response");

const login = (req, res) => {
    const { username, password } =  req.body;
    const user = users.find( user => user.username === username);
    if (user){
        const findUser = bcrypt.compareSync(password, user.password);
        if (findUser) {
            const token = jwt.sign({ username }, config.jwtKey);
            res.json(response(true, [{token}]));
        }else{
            res.json(response(false, undefined, "Datos no válidos"));
        }
    }else{
        res.json(response(false, undefined, "Datos no válidos"));
    }

};


const getUsers = (req, res) => {
    res.json(response(true, users));
};

const newUser = (req, res)=>{
    const saltRounds = bcrypt.genSaltSync(config.SALT);
    const passwordHashed = bcrypt.hashSync(req.body.password, saltRounds);

    const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: passwordHashed
    };

    const findUser = users.find(u => u.username === user.username);
    if (findUser === undefined){
        users.push(user);
        res.status(200).json(response(true, [user]));
    }else{
        res.status(500).json(response(false, undefined, "El usuario ya existe"));
    }  
};

const deleteUser = (req, res) => {
    const username = req.params.username;
    const findUser = users.find(u => u.username === username);
    if( findUser === undefined ){
        res.status(500).json(response(false, undefined, "El usuario consultado no existe"));
    }else{
        const result = users.filter(u => u.username !== username);
        users = result;
        res.status(200).json(response(true, users));
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
        res.status(500).json(response(false, undefined, "El usuario consultado no existe"));
    }else{
        const elementsIndex = users.findIndex(u => u.username === username );
        users[elementsIndex] = user;
        res.status(200).json(response(true, users));
    }
};

const getUser = (req, res) => {
    const username = req.params.username;
    const findUser = users.find(u => u.username === username);
    if( findUser === undefined ){
        res.status(500).json(response(false, undefined, "El usuario consultado no existe"));
    }else{
        res.status(200).json(response(true, [findUser]));
    }
};

module.exports = {getUsers, newUser, deleteUser, updateUser, getUser, login};