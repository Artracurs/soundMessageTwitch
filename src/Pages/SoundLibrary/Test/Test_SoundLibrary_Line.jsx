import s from "./Test_SoundLibrary.module.scss"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import AddTrackButton from "./AddTrackButton";
import SoundLibrary from "../SoundLibrary";
import Test_Show_lines from "./Test_Show_Lines";
import Sound_library_Main from "./Sound_Library_Main";


const soundList = [{
  id: 0,
  name: "minecraft_click",
  url: "https://www.myinstants.com/media/sounds/minecraft_click.mp3",
}]

const CreateLibrary = () => {
  if (localStorage.getItem("SoundLibrary") === null) {
    localStorage.setItem("SoundLibrary", JSON.stringify(soundList))
  }
}


const Test_SoundLibrary = () => {
  CreateLibrary()

  const Clear = () => {
    document.getElementById("trackNAME").value = ""
    document.getElementById("trackURL").value = ""
  }

  useEffect(() => {
    document.getElementById("trackNAME").value = ""
    document.getElementById("trackURL").value = ""
  })

  return (<div>
    <h4>Add Sound</h4>
    <div className={s.container}>
      <input disabled id="trackID" className={s.id}></input>
      <input placeholder="Save file as name" id="trackNAME" className={s.lineContainer}></input>
      <input placeholder="Enter the URL of mp3 file" type="url" id="trackURL" className={s.lineContainer}></input>
      <AddTrackButton />
      <button  className={s.id} onClick={Clear}>CLEAR</button>
    </div>
    <br />
    <h4>Sounds List</h4>
    {/* <Test_Show_lines /> */}
    <Sound_library_Main />
  </div>)
}





export default Test_SoundLibrary;