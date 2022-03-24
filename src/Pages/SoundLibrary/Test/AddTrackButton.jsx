import s from "./Test_SoundLibrary.module.scss"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const AddTrackButton = () => {
  const [track, setTrack] = [{
    trackID: {
      trackName: "",
      url: ""
    }
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


  const AddTrack = () => {
    let track_name = document.getElementById("trackNAME").value
    let track_url = document.getElementById("trackURL").value
    let oldList = localStorage.getItem("SoundLibrary")
    const oldlistJSON = JSON.parse(oldList)

    const nextID = Object.keys(oldlistJSON).length

    oldlistJSON.push({
      [nextID]: {
        trackName: track_name,
        url: track_url
      }
    })

    if (track_name === "" || track_url === "") {
      console.log("заполнены не все поля")
      // alert("Заполнены не все поля")
    }
    else if (isURL(track_url) === false) {
      console.log("неккоректная ссылка на аудио файл")
      // alert("неккоректная ссылка на аудио файл")
    } else {
      if (track_url.slice(-3) === "mp3") {
        // localStorage.setItem("SoundLibrary", JSON.stringify(oldlistJSON))
        // console.log(`запись ${nextID} дообавлена`)
      } else {
        console.log("Неккоректное расширение файла. Только формат mp3")
        // alert("Неккоректное расширение файла. Только формат mp3")
      }

      console.log({...oldlistJSON})

    }


    // if (track_name === "" || track_url === "") {
    //   console.log("заполнены не все поля")
    //   // alert("Заполнены не все поля")
    // }
    // else if (isURL(track_url) === false) {
    //   console.log("неккоректная ссылка на аудио файл")
    //   // alert("неккоректная ссылка на аудио файл")
    // } else {
    //   if (track_url.slice(-3) === "mp3") {

    //     for (const link of JSON.parse(oldList)) {
    //       console.log(link.url)
    //       let url_is_exist = link.url.includes(track_url)

    //       if (url_is_exist) {

    //       }


    //     }






    //   } else {
    //     console.log("Неккоректное расширение файла. Только формат mp3")
    //     // alert("Неккоректное расширение файла. Только формат mp3")
    //   }
    // }






  }




  return (<div className={s.containter}>
    <button type="submit" onClick={AddTrack} className={s.lineContainer}>ADD</button>
  </div>);
}

export default AddTrackButton;