const Twitter = require("twitter");
const tweets = require("./../../models/tweets");
const lib = require("./../../lib/dates");
const response = require("./../../lib/response");
const config = require("../../../config");

const getTweets = (req, res)=>{
    res.send(tweets);
};

const newTweet = (req, res)=>{
    const tweet = {
        content: req.body.content,
        date: lib.getCanadaDate(),
        username: req.username
    };
    tweets.push(tweet);
    res.status(200).json(response(true, [tweet]));
};

const getTweet = (req, res) => {
    const id = req.params.id;
    if(id >= tweets.length){
        res.status(500).json(response(false, undefined, "El tweet consultado no existe"));
    }else{
        res.status(200).json(response(true, [tweets[id]]));
    }
};

const getTweetsStream = (req, res) => {
    const username = req.params.username;
    const client = new Twitter({
        consumer_key: config.twitter.consumerKey,
        consumer_secret: config.twitter.consumerSecret,
        access_token_key: config.twitter.accessTokenKey,
        access_token_secret: config.twitter.accessTokenSecret
      });
    client.get("statuses/user_timeline", {screen_name: username}, (err, tweets, reponse) => {
        if (err) {
            res.status(500).json(response(false, undefined, [ {message: "Ocurrió un error"}]));
        } else
            res.status(200).json(response(true, tweets));
    });  
};

module.exports = {getTweets, getTweet, newTweet, getTweetsStream}; 