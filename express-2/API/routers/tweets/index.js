const express = require("express");
const router = express.Router();
const controller = require("./../../controllers/tweets");
const authentication = require("./../../middlewares/authentication");
const audits = require("./../../middlewares/audits");

router.route("/")
    .post(authentication, audits, controller.newTweet)
    .get(controller.getTweets);

router.route("/:id")
    .get(controller.getTweet);


module.exports = router;