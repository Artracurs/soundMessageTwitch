import s from "./Test_SoundLibrary.module.scss"
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useRef, useState } from "react";


export const PlayAudioFile = (props) => {
  let library = localStorage.getItem("SoundLibrary")
  const libraryJSON = JSON.parse(library)
  let getVolume = localStorage.getItem("volume") / 100

  const [volume, setVolume] = useState(getVolume)

  const audio = new Audio(props.url)
  let [audioEnd, setaudioEnd] = useState(audio.ended)

  
  const PlayByID = () => {
    audio.volume = volume
    audio.play()
    document.getElementById(props.id).style.background = "#0d6dfd"
  }


  const TrackDuration = () => {
    document.getElementById(props.id).style.background = "#0a6dfd"
    document.getElementById(props.id).innerHTML = `${audio.duration.toFixed(2)} | sec`
  }
  const ResetDuration = () => {
    document.getElementById(props.id).style.background = "rgba(128, 128, 128, 0.192)"
    document.getElementById(props.id).innerHTML = "Play"
  }

  useEffect(() => {
    audio.addEventListener('ended', setaudioEnd = () => {
      document.getElementById(props.id).style.background = "rgba(128, 128, 128, 0.192)"
    });
  })

  return (<div>
    <button onMouseLeave={ResetDuration} onMouseEnter={TrackDuration} id={props.id} className={s.id} onClick={PlayByID} >Play</button>
  </div>);
}






const ButtonDelateTrack = (props) => {
  const DeleteTrack = () => {
    console.log("deleted")



  }













  const Selected = () => {
    document.getElementById(props.url).style.background = "red"
  }
  const Unselected = () => {
    document.getElementById(props.url).style.background = "rgba(128, 128, 128, 0.192)"
  }

  return (<div>
    <button id={props.url} onMouseLeave={Unselected} onMouseEnter={Selected} onClick={DeleteTrack} className={s.id}>Delete{props.delete}</button>
  </div>)

}

export default ButtonDelateTrack;