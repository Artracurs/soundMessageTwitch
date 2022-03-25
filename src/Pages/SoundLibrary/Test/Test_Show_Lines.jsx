import s from "./Test_SoundLibrary.module.scss"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ButtonDelateTrack, { PlayAudioFile } from "./ButtonDelateTrack";
let trackList = localStorage.getItem("SoundLibrary")
let tracks = JSON.parse(trackList)



const Test_Show_lines = (props) => {
  let track_id = tracks[0]["id"]
  let track_name = tracks[0]["trackName"]
  let track_url = tracks[0]["url"]
  const [lines, setLines] = useState(<>React LIne</>)

  // const CreateLine =()=> {
  //   const line = soundList.map((soundline) => soundline )
  // }

  return (<>
    <div key={track_id} className={s.container}>
      <input defaultValue={"12"} value={track_id} disabled className={s.id}></input>
      <input value={track_name} disabled className={s.lineContainer}></input>
      <input value={track_url} disabled className={s.lineContainer}></input>
      <PlayAudioFile />
      <ButtonDelateTrack />
    </div>

  </>);
}

export default Test_Show_lines;