import { useState, useEffect, useRef } from "react";
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


bot.connect().then(() => {
  bot.join(`${localStorage.getItem("ChannelName")}`).then((info) => {
    const fer = localStorage.getItem("ChannelName")
    if (info[0] === (`#${fer}`)){
      localStorage.setItem("ConectionStatus", "Connected")
      Sucsess(info)
    } 
  })
  .catch((error) =>{
    localStorage.setItem("ConectionStatus", "Disconnected")
    Sucsess(error)
  })
});

export async function Sucsess(st){
  console.log(st)
  if (st === 'No response from Twitch.'){
    return await false
  } else {
    return await true
  } 
}

const Bottw = () => {
  useEffect(() => {
    Sucsess()
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
