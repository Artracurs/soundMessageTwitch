import Main from "../Main/Main";
import { v4 as uuidv4 } from 'uuid';
import Player from "../AudioPlayer/Player";

console.log(uuidv4())

const HomePage = () => {
  return ( <div>
    <Main key={uuidv4()}/>
    
  </div>  );
}
 
export default HomePage;