import { Container, Navbar, Nav, Form } from "react-bootstrap-v5";
import st from "./Header.module.scss"
import { Link, NavLink, Route, Routes } from "react-router-dom"
import Player, { PlayAudio, ToggleSound } from "../../AudioPlayer/Player";
import PlayerHeader from "./PlayerHeader";
import { useState, useEffect } from "react";

const Header = () => {
  const headerChannelName = localStorage.getItem("ChannelName")
  const setActive = ({ isActive }) => isActive ? st.active : st.link;

  const Mute = () => {
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
    if (ff.checked === true) {
      localStorage.setItem("volume", getOldVol)
      document.getElementById("ranger").disabled = false
      ToggleSound()
      console.log("LOG >>> Global Sound On")
      muteLabel.innerText = "Sound On"
    } else {
      document.getElementById("ranger").disabled = true
      localStorage.setItem("volume", 0)
      muteLabel.innerText = "Not Active"
      console.log("LOG >>> Global Sound Off")
    }
  }


  let ranger = document.getElementById("ranger")
  let muteLabel = document.getElementById("muteLabel")
  let getVol = localStorage.getItem("volume")
  let getOldVol = localStorage.getItem("oldVolume")
  let oldVol = localStorage.setItem("oldVolume", getVol)
  let ff = document.getElementById("muter")

  // const Mute = () => {

  // }

  // useEffect(() => {
  //   document.querySelector("#settingChannelButton").style.color = "red"
  //   if (localStorage.getItem("ConectionStatus") === "Connected") {
  //     document.querySelector("#settingChannelButton").style.color = "green"
  //   }
  //   if (localStorage.getItem("volumeStatus") === "1") {
  //     document.getElementById("ranger").value = getOldVol

  //   }
  //   if (localStorage.getItem("volumeStatus") === "0") {
  //     document.getElementById("ranger").value = 0
  //   }
  //   if (ff.checked === true) {
  //     // ToggleSound()
  //     localStorage.setItem("volumeStatus", 1)
  //     console.log("LOG >>> Global Sound On")
  //     muteLabel.innerText = "Sound On"
  //   } else {
  //     localStorage.setItem("volume", 0)
  //     muteLabel.innerText = "Not Active"
  //     localStorage.setItem("volumeStatus", 0)
  //     console.log("LOG >>> Global Sound Off")
  //   }
  // })

  useEffect(() => {
    if (localStorage.getItem("ConectionStatus") === "Connected") {
      document.getElementById("settingChannelButton").style.color = "rgb(1, 190, 255)"
      // document.getElementById("connectionsStatus").style.color = "orange"
    }
    if (localStorage.getItem("ConectionStatus") === "Disconnected") {
      document.getElementById("settingChannelButton").style.color = "red"
      // document.getElementById("connectionsStatus").style.color = "red"
    }
  })


  return (
    <div className={st.container}>

      <Navbar className={st.headerContainer} variant="dark">
        <div className={st.channelNameText} to="home">@{headerChannelName}</div>
        <div className={st.headerButtons}>
          <NavLink className={setActive} to="followers">ALERT</NavLink>
          <NavLink className={setActive} to="chat">CHAT</NavLink>
          <NavLink className={setActive} to="sound">SOUNDS</NavLink>
          <NavLink className={setActive} to="pomodoro">POMODORO</NavLink>
          <NavLink className={setActive} to="style">STYLE</NavLink>
          <NavLink className={setActive} to="settings">{<span id="settingChannelButton">???  </span>}LOGIN</NavLink>
          <div ></div>
        </div>
        <Form className={st.volumeController}>
          <PlayerHeader />
          <Form.Check className={st.checker} id="muter" value="" inline onChange={Mute} defaultChecked={false} type="switch" />
          <span className={st.vlmLabel} value="c" id="muteLabel">Not Active</span>
        </Form>

      </Navbar>
      <div className={st.underline}></div>
    </div>
  )
}

export default Header;