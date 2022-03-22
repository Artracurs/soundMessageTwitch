import s from "./SoundLibrary.module.scss"

const SoundLibrary = (props) => {
  const tracksLine = {
    number: 0,
    fileName: ""
  }


  return (<div className={s.container}>
    <div className={s.main}>
      <div id="chatRight" className={s.right}>
        <RightLines fileName={"fileName"} number={1}/>
  
        <button className={s.plus}>Add track</button>
      </div>
    </div>
    <footer>Latest Release 21 March 2022</footer>
  </div>);
}


const RightLines = (props) => {
  return (
    <div className={s.container2}>
      <label htmlFor="">{props.number}</label>
      <input fileName={props.fileName} className={s.urlName} id="trackName"   />
      <input className={s.urlLink} defaultValue={""} id="trackURL" />
      <button>play</button>
    </div>
  )
}



export default SoundLibrary;