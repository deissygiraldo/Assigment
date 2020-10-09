const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/tweets");

router.route("/")
    .post(controller.newTweet)
    .get(controller.getTweets);

router.route("/:id")
    .get(controller.getTweet);


module.exports = router;