import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom"
import "./App.module.css";
import Bottw from "./Bot/Bottw";
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header/Header";
import Player from "./AudioPlayer/Player";


function App() {
  return (
    <div className="App">
      <Header key={uuidv4()}/>
      <Bottw key={uuidv4()}/>
      {/* <Player key={uuidv4()}/> */}
    </div>
  );
}

export default App;
