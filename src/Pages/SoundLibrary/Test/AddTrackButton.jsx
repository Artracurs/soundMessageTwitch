import s from "./Test_SoundLibrary.module.scss"
import { useEffect, useState, useRef } from "react"
import { v4 as uuidv4 } from 'uuid';
import Sound_library_Main from "./Sound_Library_Main";

let count = 0

const AddTrackButton = () => {
  const [track, setTrack] = [{
    id: "0",
    name: "Discord Notification",
    url: "https://www.myinstants.com/media/sounds/discord-notification.mp3",
  }, {
    id: "1",
    name: "Cute UwU",
    url: "https://www.myinstants.com/media/sounds/cute-uwu.mp3"
  },
  {
    id: "2",
    name: "Mac Quack",
    url: "https://www.myinstants.com/media/sounds/mac-quack.mp3"
  }]

  function isURL(string) {
    let url_validation;
    try {
      url_validation = new URL(string);
    } catch (_) {
      return false;
    }
    return url_validation.protocol === "http:" || url_validation.protocol === "https:";
  }

  const [clrIntupAfterApply, setClrInputAfterApply] = useState("")

  const AddTrack = () => {
    let track_name = document.getElementById("trackNAME").value
    let track_url = document.getElementById("trackURL").value
    let oldList = localStorage.getItem("SoundLibrary")
    const oldlistJSON = JSON.parse(oldList)

    const nextID = Object.keys(oldlistJSON).length

    oldlistJSON.push({
      id: nextID,
      name: track_name,
      url: track_url,
    })

    if (track_name === "" || track_url === "") {
      console.log("заполнены не все поля")
      alert("Заполнены не все поля")
    }
    else if (isURL(track_url) === false) {
      console.log("неккоректная ссылка на аудио файл")
      alert("Неккоректная ссылка на аудио файл")
    } else {
      if (track_url.slice(-3) === "mp3") {
        for (let i = 0; i < oldlistJSON.length - 1; i++) {
          const find_url_dublicate = oldlistJSON[i].url
          if (find_url_dublicate === track_url) {
            alert("Такой файл уже добавлен")
            console.log("такой файл уже добавлен", i)
            break
          }
          else if (find_url_dublicate !== track_url) {
            count++
            console.log(count)
            if (count === oldlistJSON.length - 1) {
              console.log(`запись ${nextID} дообавлена`)
              localStorage.setItem("SoundLibrary", JSON.stringify(oldlistJSON))
            }
          }
        }
      }
    }
    count = 0

    setClrInputAfterApply(() => {
      document.getElementById("trackNAME").value = "";
      document.getElementById("trackURL").value = "";
    })
    window.location.reload();
  }

  return (<div className={s.containter}>
    <button type="submit" onClick={AddTrack} className={s.lineContainer}>ADD</button>

  </div>);
}

export default AddTrackButton;