import s from "./Test_SoundLibrary.module.scss"
import { v4 as uuidv4 } from 'uuid';



const ButtonDelateTrack = (props) => {
  return ( <div>
    <button onClick={()=>console.log("button delete")} className={s.id}>Delete {props.id}</button>
  </div> );
}


export const PlayAudioFile =(props)=>{
  return (<div>
    <button onClick={()=>console.log("button play")} className={s.id}>Play{props.delete}</button>
  </div>)

}
 
export default ButtonDelateTrack;