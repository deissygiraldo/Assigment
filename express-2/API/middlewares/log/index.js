const log = (req, res, next) => {
    const date = new Date(Date.now()).toTimeString();
    const method = req.method;
    const path = req.path;
    const ip = req.ip
    console.log(`${date} ${method} ${path} ${ip}`);
    next();
};

module.exports = log;