import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const FollowersOption = () => {
  const soundLibrary = localStorage.getItem("SoundLibrary")
  const soundLibraryJSON = JSON.parse(soundLibrary)
  const sounds = soundLibraryJSON.reverse()

  const sound = sounds.map((sound) => 
    <option  key={uuidv4()} value={sound.name} id={sound.url} >{sound.name}</option>
  )




  return sound
}

export default FollowersOption;