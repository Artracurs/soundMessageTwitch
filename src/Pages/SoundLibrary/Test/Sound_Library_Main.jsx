import { useEffect, useState } from "react"
import ButtonDelateTrack, { PlayAudioFile } from "./ButtonDelateTrack"
import s from "./Test_SoundLibrary.module.scss"
import { v4 as uuidv4 } from 'uuid';



const Sound_library_Main = () => {

  const [trackline, setTrackline] = useState(<div>c</div>)

  const AllTracks = localStorage.getItem("SoundLibrary")
  const AllTracksJSON = JSON.parse(AllTracks)

  let tracks = AllTracksJSON.map(track =>
    <div key={uuidv4()}>
      <div className={s.container}>
        <input value={track.id} disabled className={s.id}></input>
        <input value={track.name} disabled className={s.lineContainer}></input>
        <input value={track.url} disabled className={s.lineContainer}></input>
        <PlayAudioFile url={track.url} id={track.id} className={s.id} />
        <ButtonDelateTrack url={track.url} id={track.url} className={s.id} />
      </div>
    </div>
  )


  return (<>
    {/* <button type="submit" onClick={()=>(setTrackline(trackline = tracks))} >Click</button> */}
    <div style={{height: "600px", overflowY: "auto"}}>{tracks}</div>

  </>);

}


export default Sound_library_Main;