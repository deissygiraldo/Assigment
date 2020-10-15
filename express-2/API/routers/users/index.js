const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/users");
const authentication = require("./../../middlewares/authentication");
const authorization = require("./../../middlewares/authorization");
const audits = require("./../../middlewares/audits");

router.route("/")
    .post(controller.newUser)
    .get(authentication, audits, controller.getUsers);

router.router("/login")
    .post(controller.login)

router.route("/:username")
    .get(authentication, controller.getUser)
    .put(authentication, authorization, audits, controller.updateUser)
    .delete(authentication, authorization, audits, controller.deleteUser);


module.exports = router;