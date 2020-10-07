const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/users");

router.route("/")
    .post(controller.newUser)
    .get(controller.getUsers);

router.route("/:username")
    .get(controller.getUser)
    .put(controller.updateUser)
    .delete(controller.deleteUser);


module.exports = router;