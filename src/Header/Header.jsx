import { Container, Navbar, Nav, Form } from "react-bootstrap-v5";
import st from "./Header.module.scss"
import { Link, NavLink, Route, Routes } from "react-router-dom"
import Player, { PlayAudio, ToggleSound } from "../AudioPlayer/Player";
import Grapher from "../Grapher/Grapher";
import HomePage from "../Pages/HomePage";
import SoundPage from "../Pages/SoundPage";
import { v4 as uuidv4 } from 'uuid';
import PomodoroPage from "../Pages/PomodoroTimer";
import PlayerHeader from "../AudioPlayer/PlayerHeader";

const Header = () => {
  const headerChannelName = localStorage.getItem("ChannelName")
  const setActive = ({isActive}) => isActive ? st.active : st.link;

  const mute = () => {
    let ranger = document.getElementById("ranger")
    let muteLabel = document.getElementById("muteLabel")

    let getVol = localStorage.getItem("volume")
    let getOldVol = localStorage.getItem("oldVolume")
    let oldVol = localStorage.setItem("oldVolume", getVol)
    if (getVol === '0') {
      // ranger.value = getOldVol
      // ranger.disabled = true
      localStorage.setItem("volume", getOldVol)
      localStorage.setItem("volumeStatus", 1)
    }
    if (getVol != '0') {
      // ranger.value = 0
      // ranger.disabled = false
      localStorage.setItem('volume', 0)
      localStorage.setItem("volumeStatus", 0)
    }
    let ff = document.getElementById("muter")
    if (ff.checked == true){
      ToggleSound()
      console.log("LOG >>> Global Sound On")
      muteLabel.innerText = "Sound On"
    } else {
      muteLabel.innerText = "Not Active"
      console.log("LOG >>> Global Sound Off")
    } 
  }

  return (
    <div className={st.container}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="home">@{headerChannelName}</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={setActive} to="home">Followers</NavLink>
            <NavLink className={setActive} to="sound">Sound Library</NavLink>
            <NavLink className={setActive} to="pomodoro">Pomodoro</NavLink>
            <NavLink className={setActive} to="settings">Channel Settings</NavLink>
          </Nav>
          <Form className={st.volumeController}>
            <PlayerHeader />
            <Form.Check className={st.checker} id="muter" value="" inline onChange={mute} defaultChecked={false} type="switch" />
            <span className={st.vlmLabel} value="c" id="muteLabel">Not Active</span>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;