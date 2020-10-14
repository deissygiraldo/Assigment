const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/users");

router.route("/")
    .post(controller.newUser)
    .get(authentication, audits, controller.getUsers);

router.router("/login")
    .post(controller.login)

router.route("/:username")
    .get(controller.getUser)
    .put(controller.updateUser)
    .delete(controller.deleteUser);


module.exports = router;