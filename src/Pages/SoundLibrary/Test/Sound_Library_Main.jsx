import { useEffect, useState } from "react"
import ButtonDelateTrack, { PlayAudioFile } from "./ButtonDelateTrack"
import s from "./Test_SoundLibrary.module.scss"
import { v4 as uuidv4 } from 'uuid';






const Sound_library_Main = () => {
  // const [trackline, setTrackline] = useState(<div>Good</div>)

  // const AllTracks = localStorage.getItem("SoundLibrary")
  // const AllTracksJSON = JSON.parse(AllTracks)


  // const Click = () => {

  // for (let i = 0; i < AllTracksJSON.length - 1; i++) {
  //   let id_track = AllTracksJSON.length-1
  //   let url_track = AllTracksJSON[i][i].url
  //   let name_track = AllTracksJSON[i][i].trackName

  //   console.log(url_track)

  //   setTrackline(trackline =>
  //     <h6>
  //       <div key={id_track} className={s.container}>
  //         <input value={id_track} disabled className={s.id}></input>
  //         <input value={name_track} disabled className={s.lineContainer}></input>
  //         <input value={url_track} disabled className={s.lineContainer}></input>
  //         <PlayAudioFile id={id_track}/>
  //         <ButtonDelateTrack delete={id_track}/>
  //       </div>
  //     </h6>
  //   )

  // }
  // }



  // for (let i = 0; i < AllTracksJSON.length - 1; i++) {
  //   let id_track = AllTracksJSON.length - 1
  //   let url_track = AllTracksJSON[i][i].url
  //   let name_track = AllTracksJSON[i][i].trackName
  //   console.log(url_track)
  // }


  // let id_track = AllTracksJSON.length - 1
  // let url_track = AllTracksJSON[0][0].url
  // let name_track = AllTracksJSON[0][i].trackName

  // let gg = { ...AllTracksJSON }





  // console.log(ddd[1][1].url)

//   let bb = [{ dd: "yer", dd: "kyu", dd: "cxz", dd: "reg", dd: "fewrv", dd: "vwef" }]
//   console.log(bb.dd)


//   let lines = bb.map(el => (
//     <div key={uuidv4()}>
//       <div>{el.dd}</div>
//     </div>
//  ))

  // let lines = bb.map((el) => {
  //   return (<div key={uuidv4()}>
  //     <div>{el.dd}</div>
  //     <div>{el.cc}</div>
  //     <div>{el.rr}</div>
  //     <div>{el.tt}</div>
  //     <div>{el.nn}</div>
  //     <div>{el.ee}</div>
  //     </div>)
  // })



  // return (
  //   <div key={uuidv4()}>
  //     <div className={s.container}>
  //       <input value={AllTracksJSON[i][i].id} disabled className={s.id}></input>
  //       <input value={AllTracksJSON[i][i].url} disabled className={s.lineContainer}></input>
  //       <input value={AllTracksJSON[i][i].name} disabled className={s.lineContainer}></input>
  //       <PlayAudioFile />
  //       <ButtonDelateTrack />
  //     </div>
  //   </div>)











  return (<>
    {/* <button  >Click</button> */}
    {/* <div key={uuidv4()} className={s.oop}>{lines}</div> */}

  </>);

}


export default Sound_library_Main;