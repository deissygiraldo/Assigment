const express = require("express");
const router = express.Router();
const log = require("./middlewares/log");
const users = require("./routers/users");

router.use(log);
router.use("/users", users);

module.exports = router;