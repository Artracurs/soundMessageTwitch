import Player from "../AudioPlayer/Player";
import { v4 as uuidv4 } from 'uuid';

const SoundPage = () => {
  return ( <div>
    <Player key={uuidv4()} />
  </div> );
}
 
export default SoundPage;