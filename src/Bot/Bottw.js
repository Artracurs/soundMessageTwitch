import s from "./Bottw.module.scss"
import { PlayAudio } from "../AudioPlayer/Player";
const tmi = require("tmi.js");

let date = new Date()

const client = new tmi.Client({
  channels: ["uber_taxi_"],
});

let ggJson = ''

client.connect();

const Bottw = (props) => {
  client.on("message", async (channel, tags, message, self) => {
    let data = {Date: date, stdSound: "Follower"}

    PlayAudio();
    if(localStorage.getItem(tags["display-name"])) {
      console.log("old user")
    } else {
      localStorage.setItem(tags["display-name"], JSON.stringify(data));
      let gg = localStorage.getItem(tags["display-name"])
      ggJson = JSON.parse(gg)
    }
  });

  return <div className={s.container}>
  </div>;
};

export default Bottw;
