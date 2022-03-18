import Main from "../Main/Main";
import { v4 as uuidv4 } from 'uuid';
import Player from "../AudioPlayer/Player";
import Test1 from "../Test/Test1";
import Header from "../Header/Header";
import { Card } from "react-bootstrap-v5";
import { Button } from "bootstrap";

console.log(uuidv4())

const HomePage = () => {
  return ( <div>
    {/* <Header key={uuidv4()}/> */}
    <Main key={uuidv4()}/>
  </div>  );
}
 
export default HomePage;