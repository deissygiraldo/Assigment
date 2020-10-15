const fs = require("fs")
const dates = require("./../../lib/dates");

const audits = (req, res, next) => {
    const date = dates.getCanadaDate();
    const method = req.method;
    const path = req.path;
    const ip = req.ip;
    const username = req.username;
    const data = JSON.stringify(req.body);

    const linea =  `${date}::${username}::${ip}::${method}::${path}::${data} \n`;

    const archivo = fs.createWriteStream("./logs/access.log", { 'flags': 'a'});
    archivo.once("open", (f) => {
        archivo.write(linea);
    });

    console.log(linea);
    next();
};

module.exports = audits;