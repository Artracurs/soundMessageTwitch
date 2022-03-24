import s from "./Test_SoundLibrary.module.scss"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import AddTrackButton from "./AddTrackButton";
import UseState_Bleat from "./useState_bleat";

const soundList = [{
  0: {
    trackName: "...",
    url: "..."
  }
}]

const CreateLibrary = () => {
  if (localStorage.getItem("SoundLibrary") === null) {
    localStorage.setItem("SoundLibrary", JSON.stringify(soundList))
  }
}
CreateLibrary()

const Test_SoundLibrary = () => {

  // useEffect(() =>{
  //   document.getElementById("trackNAME").value = ""
  //   document.getElementById("trackURL").value = ""
  // })

  return (<div key={uuidv4()} className={s.container}>
    <input disabled id="trackID" className={s.id}></input>
    <input id="trackNAME" className={s.lineContainer}></input>
    <input type="url" id="trackURL" className={s.lineContainer}></input>
    <AddTrackButton />
    <UseState_Bleat />
    {/* <button onClick={SaveTrack} className={s.lineContainer}>Save</button> */}
  </div>);
}





export default Test_SoundLibrary;