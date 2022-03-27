import s from "./FollowersFirstMessage.module.scss"
import { v4 as uuidv4 } from 'uuid';

const FollowersFirstMessage = (props) => {
  const soundLibrary = localStorage.getItem("SoundLibrary")

  const soundLibraryJSON = JSON.parse(soundLibrary)

  const sounds = soundLibraryJSON

  const sound = sounds.map((sound) => 
 
    <option key={uuidv4()} value={sound.id} >{sound.name}</option>
    
  )


  return (<div className={s.container}>
    <label className={s.label}>First Message in Chat</label>
    <select onChange={()=>console.log("dsa")}  name="" id="">
      {sound}
    </select>
  </div>);
}

export default FollowersFirstMessage;