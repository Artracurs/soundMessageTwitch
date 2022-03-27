import s from "./FollowersFirstMessage.module.scss"
import { v4 as uuidv4 } from 'uuid';

const FollowersStandartMessage = () => {

  const soundLibrary = localStorage.getItem("SoundLibrary")

  const soundLibraryJSON = JSON.parse(soundLibrary)

  const sounds = soundLibraryJSON

  const sound = sounds.map((sound) => 
    // console.log(sound.name)

    <option key={uuidv4()} value={sound.id}>{sound.name}</option>
    
  )


  return (<div className={s.container}>
    <label className={s.label}>Standart Message in Chat</label>
    <select name="" id="">
      {sound}
    </select>
  </div>);
}

export default FollowersStandartMessage;