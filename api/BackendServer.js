const express = require("express")
const tmi = require("../node_modules/tmi.js");
const PORT = process.env.PORT || 9000
const app = express()
const path = require('path')

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

app.use('/static', express.static(path.join(__dirname, 'public')))

bot.on("message", (channel, tags, message, self) => {
  console.log(message);
  getMessage = message;
});

app.listen(PORT, (req, res)=>{
  console.log(`Server is started on ${PORT} PORT` )
})

app.get("/api", (req, res) =>{
  // const id = setInterval(() => (new Date().toLocaleString()), 1000);
  res.json({ message: `Message from Server: ${getMessage}` })
  // clearInterval(id);
})