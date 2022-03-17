import { Container, Navbar, Nav, Form } from "react-bootstrap-v5";
import s from "./Header.module.scss"
import { Link, Route, Routes } from "react-router-dom"
import Player, { PlayAudio } from "../AudioPlayer/Player";
import Grapher from "../Grapher/Grapher";
import HomePage from "../Pages/HomePage";
import SoundPage from "../Pages/SoundPage";
import { v4 as uuidv4 } from 'uuid';
import PomodoroPage from "../Pages/PomodoroTimer";


const Header = () => {
  const mute = () => {
    let ranger = document.getElementById("ranger")
    let muter = document.getElementById("muteLabel")

    const getVol = localStorage.getItem("volume")
    const getOldVol = localStorage.getItem("oldVolume")
    const oldVol = localStorage.setItem("oldVolume", getVol)
    if (getVol === '0') {
      ranger.value = getOldVol
      ranger.disabled = false
      muter.innerHTML = "Unmute"
      localStorage.setItem("volume", getOldVol)
      localStorage.setItem("volumeStatus", 1)
    }
    if (getVol != '0') {
      ranger.value = 0
      ranger.disabled = true
      muter.innerHTML = "Muted"
      localStorage.setItem('volume', 0)
      localStorage.setItem("volumeStatus", 0)
    }
  }

  return (
    <div className={s.container}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">@ITNaRog</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/"></Nav.Link>
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="sound">Sound</Nav.Link>
            <Nav.Link as={Link} to="pomodoro">Pomodoro</Nav.Link>
          </Nav>
          <Form>
            <Form.Check onClick={PlayAudio} id="muter" inline onChange={mute} defaultChecked={localStorage.getItem("volumeStatus")} type="switch" />
            <span value="c" id="muteLabel">Muted</span>
          </Form>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/pomodoro" element={<PomodoroPage />} />
      </Routes>
    </div>
  )
}

export default Header;