import { useState, useEffect, useRef } from "react";
import s from "./Bot.module.scss";
import tmi from "tmi.js";
import { Sucsess } from "../Pages/Authorisation/AuthorisationPage";
import uwup from "../AudioPlayer/Audiofiles/uwup.mp3"


let ggJson = "...";

const audioFirstMessage = new Audio(localStorage.getItem("FirstMessageSound"));
// const audioStandartMessage = new Audio(localStorage.getItem("StandartSound"));


const allUsers = [{
  nickname: "Nick Name",
  date: "Date()",
  messages: "0",
  status: "Status of user",
  mute: false,
  individualAlert: "individual Alert"
}]



// const CreateUser = () =>{
//   if(GetMessage === true){
//     localStorage.setItem("AllUsers", allUsers)
//   }
// }





const listOfAllUsers = allUsers.map(listOfAllUser => allUsers)



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
        // Sucsess(info);
      }
    })
    .catch((error) => {
      localStorage.setItem("ConectionStatus", "Disconnected");
      localStorage.setItem("Info", error)
      // Sucsess(error);
    });
});


export const Disconnect = () => {

};






const Bottw = () => {


  function detectURLs(message) {
    let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.match(urlRegex)
  }

  function MessageWithoutUrl(text) {
    let link = detectURLs(text)
    let str = text
    let ds = str.split(" ")
    for (let i = 0; i < ds.length; i++) {
      try {
        if (ds[i] === link[0]) {
          let strCopy = ds
          delete strCopy[i]
          let gg = strCopy.join(" ")
          console.log(gg);
          return gg
        }
      }
      catch {
        return text
      }
    }
  }


  

  function ColorGen(nick) {
    try {
      let getNick = sessionStorage.getItem("messages")
      let getNickJSON = JSON.parse(getNick)

      if (getNickJSON[0].nickname === nick) {
       
        for (let i = 0; i < getNickJSON.length; i++) {
          if (getNickJSON[i].color !== "undefined") {

            let setColor = getNickJSON[i].color


            let getLine = sessionStorage.getItem("messages")
            let getLineJSON = JSON.parse(getLine)[i]

            let newColor = getLineJSON["color"] = setColor

            sessionStorage.setItem("messages", JSON.stringify(newColor))
            console.log(setColor);
            return setColor
          }
        }
      } else {
        return "fff"
      }
    } catch {
      return Math.floor(Math.random() * 16777215).toString(16)
    }
  }


  const [msg, setMsg] = useState(0)

  useEffect(() => {
    bot.on("message", (channel, tags, message, self) => {

      let time = new Date();
      let date2 = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      let data = { Date: date2, stdSound: "Follower" };
      let ffd = document.getElementById("muter");

      let getMessages = sessionStorage.getItem("messages")
      let getMessagesJSON = JSON.parse(getMessages)

      let strin = { date: `${date2}`, nickname: `${tags["display-name"]}`, message: `${MessageWithoutUrl(message)}`, url: `${detectURLs(message)}`, color: `${ColorGen(tags["display-name"])}` }

      getMessagesJSON.push(strin)
      sessionStorage.setItem("messages", JSON.stringify(getMessagesJSON))

      document.title = tags["display-name"]


      if (localStorage.getItem(tags["display-name"])) {
        // console.log(message);

        const audioStandartMessage = new Audio(localStorage.getItem("StandartSound"));
        audioStandartMessage.volume = localStorage.getItem("volume") / 100
        // audioStandartMessage.volume = 1
        audioStandartMessage.play();

      } else {
        // console.log("message");
        localStorage.setItem(tags["display-name"], JSON.stringify(data));
        let gg = localStorage.getItem(tags["display-name"]);
        ggJson = JSON.parse(gg);

        audioFirstMessage.volume = localStorage.getItem("volume") / 100;
        audioFirstMessage.play();
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
