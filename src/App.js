import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import "./App.module.css";
import Bottw from "./Bot/Bottw";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header/Header";
import Player from "./AudioPlayer/Player";
import HomePage from "./Pages/HomePage";
import SoundPage from "./Pages/SoundPage";
import PomodoroPage from "./Pages/PomodoroTimer";

function App() {
  return (
    <div className="App">
      <h4></h4>
      <Header />
      {/* <Bottw key={uuidv4()} /> */}
      {/* <Player /> */}
      <Routes>
        <Route path="/" to="/home" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
      </Routes>
    </div>
  );
}

export default App;
