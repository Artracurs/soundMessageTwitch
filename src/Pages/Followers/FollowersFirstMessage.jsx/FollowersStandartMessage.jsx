import s from "./FollowersFirstMessage.module.scss"
import { v4 as uuidv4 } from 'uuid';
import FollowersOption from "./FollowersOption";
import { useEffect } from "react";

const FollowersStandartMessage = () => {
  const Change = () => {
    const selectTrack = document.getElementById("option");
    let e = selectTrack
    let active = e.options[e.selectedIndex]
    let link = e.options[e.selectedIndex].id

    const audio = new Audio(link)
    audio.volume = localStorage.getItem("volume") / 100
    audio.play()

    localStorage.setItem("StandartSound", link)

    let selectStandartMessage = document.getElementById("option").value = active.value
    
    localStorage.setItem("ActiveOptionsStandartMEssage", selectStandartMessage)

    console.log(selectStandartMessage);

  }

  useEffect(() => {
    document.getElementById("option").value = localStorage.getItem("ActiveOptionsStandartMEssage")
  })

  return (<div className={s.container}>
    <label className={s.label}>Standart Message in Chat</label>
    <select onChange={Change} name="" id="option">
      <FollowersOption />
    </select>
    {/* <button onClick={() => window.location.reload()} className={s.button}>Save</button> */}
  </div>);
}

export default FollowersStandartMessage;