import s from "./SoundLibrary.module.scss"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import Test_SoundLibrary from "./Test/Test_SoundLibrary_Line";

const Player = (trackURL) => {
  const audio = new Audio("https://www.myinstants.com/media/sounds/yoshi-tongue.mp3")
  audio.volume = 0.5
  audio.play()
}

const GetTrackNumber = () => {
  if (localStorage.getItem("SoundLibraryTrackNumber")) {
    return localStorage.getItem("SoundLibraryTrackNumber")
  } else {
    localStorage.setItem("SoundLibraryTrackNumber", 0)
  }
}
GetTrackNumber()

function CreateLine() {
  return <>Added</>
}



const SoundLibrary = (props) => {

  return (<div className={s.container}>
    <div className={s.main}>
      <div id="chatRight" className={s.right}>

        {/* <RightLines /> */}
        <Test_SoundLibrary />

        <button onClick={CreateLine} className={s.plus}>Add track</button>
      </div>
    </div>

    <footer>Latest Release 21 March 2022</footer>
  </div>);
}


const RightLines = (props) => {

  const TrackListID = localStorage.getItem("SoundLibraryTrackNumber")

  const tracksLines = [{ trackID: { TrackListID }, fileName: "crime", url: "https://www.sounds.com/audio/crime.mp3" }]

  const trackLine = tracksLines.map((trackline) => (
    <div key={uuidv4()} className={s.container2}>
      <label id="trackNumber" >{tracksLines.trackID}</label>
      <input maxLength={40} defaultValue={tracksLines.fileName} className={s.url} id="trackName" />
      <input className={s.urlLink} defaultValue={tracksLines.url} id="trackURL" />
      <button onClick={Player}>Play</button>
    </div>
  ))



  return (<>
    {trackLine}
  </>)


  // return (
  //   <div className={s.container2}>
  //     <label htmlFor="">{tracksLines.number}</label>
  //     <input maxlength={40} defaultValue={tracksLines.fileName} className={s.url} id="trackName" />
  //     <input className={s.urlLink} defaultValue={tracksLines.url} id="trackURL" />
  //     <button id={""} >Play</button>
  //   </div>
  // )
}


export default SoundLibrary;