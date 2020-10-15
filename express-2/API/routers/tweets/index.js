const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/tweets");
const authentication = require("./../../middlewares/authentication");

router.route("/")
    .post(authentication, controller.newTweet)
    .get(controller.getTweets);

router.route("/:id")
    .get(controller.getTweet);


module.exports = router;