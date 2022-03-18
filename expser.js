const axios = require("axios");
const express = require("express");
let cors = require("cors");
const app = express();
const port = 3003;

app.use(cors());

app.get("/", (req, res) => {
  const gg = fetch("https://www.myinstants.com/instant/talking-ben-yes-46136/");
  const tt = gg;
  res.send(tt);
  console.log(tt);
});

fetch("", {
  mode: ''
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
