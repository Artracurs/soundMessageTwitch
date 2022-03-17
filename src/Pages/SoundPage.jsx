import Player from "../AudioPlayer/Player";
import { v4 as uuidv4 } from 'uuid';
import { InputGroup } from "react-bootstrap-v5";
import Test1 from "../Test/Test1";


const SoundPage = () => {
  function filebutton() {
    const butwn = document.getElementById("oowp")
    butwn.play()
    console.log(butwn)
  }

  return (<div>
    <Player key={uuidv4()} />
    
    {/* <audio id="oowp" src="https://www.myinstants.com/media/sounds/cute-uwu.mp3" type="audio/mpeg"></audio> */}
    {/* <input type="url" name="url" id="" /> */}
    {/* <button onClick={filebutton}>Test Play</button> */}

    </div>);
}

      export default SoundPage;