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
    audio.volume = 0.5
    audio.play()
    document.getElementById(props.url).style.background = "#0d6dfd"
  }


  const TrackDuration = () => {
    document.getElementById(props.url).style.background = "#0a6dfd"
    document.getElementById(props.url).innerHTML = `${audio.duration.toFixed(2)} | sec`
  }
  const ResetDuration = () => {
    document.getElementById(props.url).style.background = "rgba(128, 128, 128, 0.192)"
    document.getElementById(props.url).innerHTML = "Play"
  }

  useEffect(() => {
    audio.addEventListener('ended', setaudioEnd = () => {
      document.getElementById(props.url).style.background = "rgba(128, 128, 128, 0.192)"
    });
  })

  return (<div>
    <button onMouseLeave={ResetDuration} onMouseEnter={TrackDuration} id={props.url} className={s.id} onClick={PlayByID} >Play</button>
  </div>);
}





const ButtonDelateTrack = (props) => {
  let soundLibrary = localStorage.getItem("SoundLibrary")
  let soundLibraryJSON = JSON.parse(soundLibrary)



  const [slist, setSlist] = useState(soundLibraryJSON)


  const DeleteTrack = () => {

    const index = slist.findIndex(n => n.id === props.id);
    if (index !== -1) {
      soundLibraryJSON.splice(index, 1)
      localStorage.setItem("SoundLibrary", JSON.stringify(soundLibraryJSON))}
      window.location.reload()

    }


  



  const Selected = () => {
    document.getElementById(props.id).style.background = "red"
  }
  const Unselected = () => {
    document.getElementById(props.id).style.background = "rgba(128, 128, 128, 0.192)"
  }

  return (<div>
    <button id={props.id} onMouseLeave={Unselected} onMouseEnter={Selected} onClick={DeleteTrack} className={s.id}>Delete{props.delete}</button>
  </div>)

}

export default ButtonDelateTrack;