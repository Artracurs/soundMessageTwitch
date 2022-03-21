const express = require("express");
const router = express.Router();
const tmi = require("../../node_modules/tmi.js");

const bot = new tmi.Client({
  options: { debug: false },
  identity: {
    username: `uber_taxi_`,
    password: `oauth:lg3nd4ouq7t2rnkcuo838gfyjprxbb`,
  },
  channels: [`uber_taxi_`],
});

bot.connect().then(() => {
  bot
    .join(`uber_taxi_`)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

let getMessage = "";

bot.on("message", (channel, tags, message, self) => {
  console.log(message);
  getMessage = message;
});

router.get("/", (req, res, next) => {
  res.send({data: "555"});
  console.log(getMessage);
});

module.exports = router;
