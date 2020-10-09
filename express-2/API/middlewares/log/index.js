const fs = require("fs")
const log = (req, res, next) => {
    const date = new Date(Date.now()).toTimeString();
    const method = req.method;
    const path = req.path;
    const ip = req.ip;

    const linea = `${date} ${method} ${path} ${ip}\n`;

    const archivo = fs.createWriteStream("./logs/access.log", { 'flags': 'a'});
    archivo.once("open", (f) => {
        archivo.write(linea);
    });

    console.log(linea);
    next();
};

module.exports = log;