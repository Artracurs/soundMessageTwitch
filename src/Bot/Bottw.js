import { useState, useEffect } from "react";
import s from "./Bottw.module.scss";
import { PlayAudio } from "../AudioPlayer/Player";
import tmi from "tmi.js";
import SettingsPage from "../Pages/SettingPage";

let date = new Date();
let ggJson = "...";

const audio = new Audio(
  "https://www.myinstants.com/media/sounds/ping_missing.mp3"
);

const bot = new tmi.Client({
  options: { debug: true },
  identity: {
    username: `${localStorage.getItem("ChannelName")}`,
    password: `${localStorage.getItem("Token")}`,
    // password: 'oauth:lg3nd4ouq7t2rnkcuo838gfyjprxbb'
  },
  channels: [`${localStorage.getItem("ChannelName")}`],
});
bot
  .connect(`${localStorage.getItem("ChannelName")}`)
  .then((date) => {
    console.log(date);
    // localStorage.setItem("ConectionStatus", "Connected")
    // alert(date)
  })
  .catch((err) => {
    console.log("Error!");
    localStorage.setItem("ConectionStatus", "Disconected");
    // alert(err);
  });

const Bottw = () => {
  useEffect(() => {
    bot.on("message", (channel, tags, message, self) => {
      let data = { Date: date, stdSound: "Follower" };
      let ffd = document.getElementById("muter");
      // PlayAudio();
      audio.play();
      audio.volume = localStorage.getItem("volume") / 100;
      if (localStorage.getItem(tags["display-name"])) {
        console.log("old user");
      } else {
        localStorage.setItem(tags["display-name"], JSON.stringify(data));
        let gg = localStorage.getItem(tags["display-name"]);
        ggJson = JSON.parse(gg);
      }
    });
  });

  return (
    <div className={s.container}>
      <h4></h4>
    </div>
  );
};

export default Bottw;
