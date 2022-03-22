import { useState, useEffect, useRef } from "react";
import s from "./Bottw.module.scss";
import { PlayAudio } from "../AudioPlayer/Player";
import tmi from "tmi.js";
import SettingsPage from "../Pages/SettingPage";
import { Sucsess } from "../Pages/SettingPage";
import axios from "axios";
import uwup from "./uwup.mp3"


let date = new Date();
let ggJson = "...";

const audio = new Audio(uwup);

const bot = new tmi.Client({
  options: { debug: false },
  identity: {
    username: `${localStorage.getItem("ChannelName")}`,
    password: `${localStorage.getItem("Token")}`,
  },
  channels: [`${localStorage.getItem("ChannelName")}`],
});



bot.connect().then(() => {
  bot
    .join(`${localStorage.getItem("ChannelName")}`)
    .then((info) => {
      const fer = localStorage.getItem("ChannelName");
      if (info[0] === `#${fer}`) {
        localStorage.setItem("ConectionStatus", "Connected");
        localStorage.setItem("Info", info)
        Sucsess(info);
      }
    })
    .catch((error) => {
      localStorage.setItem("ConectionStatus", "Disconnected");
      localStorage.setItem("Info", error)
      Sucsess(error);
    });
});

export const Disconnect = () => {
  // localStorage.setItem("ChannelName", "")
  // bot
  //   .disconnect()
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

// export async function Sucsess(st){
//   console.log(st)
//   if (st === 'No response from Twitch.'){
//     return await false
//   } else {
//     return await true
//   }
// }
function ShowMessage(){
  // document.getElementById("chatRight") = message
  // document.getElementById("chatRight") = "cds"
}


const Bottw = () => {       
  const [msg, setMsg] = useState(0)

  useEffect(() => {  
    bot.on("message", (channel, tags, message, self) => {
      let data = { Date: date, stdSound: "Follower" };
      let ffd = document.getElementById("muter");
      // PlayAudio();
      audio.volume = 1;
      audio.play();
      // ShowMessage(message)

      audio.volume = localStorage.getItem("volume") / 100;
      if (localStorage.getItem(tags["display-name"])) {
        console.log(message);

      } else {
        console.log("vdfvf user");
        localStorage.setItem(tags["display-name"], JSON.stringify(data));
        let gg = localStorage.getItem(tags["display-name"]);
        ggJson = JSON.parse(gg);
      }
    });
  });

  return (
    <div className={s.container}>
      {/* <h4>{msg}</h4> */}
    </div>
  );
};

export default Bottw;