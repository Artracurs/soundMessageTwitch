import s from "./FollowersFirstMessage.module.scss"
import { v4 as uuidv4 } from 'uuid';
import FollowersOption from "./FollowersOption";
import { useEffect } from "react";


const FollowersFirstMessage = (props) => {

  const Change = () => {
    const selectTrack = document.getElementById("options");
    let e = selectTrack
    let active = e.options[e.selectedIndex]
    let link = e.options[e.selectedIndex].id

    const audio = new Audio(link)
    audio.volume = localStorage.getItem("volume")/100
    audio.play()

    localStorage.setItem("FirstMessageSound", link)

    let selectFirstMessage = document.getElementById("options").value = active.value
    localStorage.setItem("ActiveOptionsFirstMEssage", selectFirstMessage)

    console.log(selectFirstMessage);

  }

  useEffect(()=>{
    document.getElementById("options").value = localStorage.getItem("ActiveOptionsFirstMEssage")
  })

  return (<div className={s.container}>
    <label className={s.label}>First Message in Chat</label>
    <select onChange={Change} name="" id="options">
      <FollowersOption />
    </select>
    <button onClick={() => window.location.reload()} className={s.button}>Save</button>
  </div>);
}

export default FollowersFirstMessage;