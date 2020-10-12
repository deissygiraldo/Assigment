const express = require("express");
const router = express.Router();
const log = require("./middlewares/log");
const users = require("./routers/users");
const tweets = require("./routers/tweets");
const weather = require("./routers/weather");

router.use(log);
router.use("/users", users);
router.use("/tweets", tweets);
router.use("/weather", weather);

module.exports = router;