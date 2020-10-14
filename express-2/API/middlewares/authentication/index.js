const jwt = require("jsonwebtoken");
const config = require("./../../../config");
const response = require("./../../lib/response");

const authentication = (req, res, next) => {
    const token = req.headers["x-access-token"];
    try {
        const decoded = jwt.verify(token, config.jwtKey);
        const username = decoded.username;
        req.username = username;
        next();
    } catch(e) {
        res.json(response(false, undefined, "No autorizado"));
    }
};

module.exports = authentication;