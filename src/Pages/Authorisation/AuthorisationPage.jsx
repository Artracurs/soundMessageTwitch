import { Modal, Button, Table, NavDropdown, Form, FormCheck } from "react-bootstrap-v5";
import s from './SettingPage.module.scss'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import st from "./Button_effect.module.scss"



export function Sucsess(st) {
  console.log(st)
  // if (localStorage.getItem("Info") === 'No response from Twitch.') {
  //   document.getElementById("connectionsStatus").innerHTML = "Disconnected"
  //   if (localStorage.getItem("ConectionStatus") === "Disconnected" || document.getElementById("connectionsStatus").style.color === "red") {
  //     document.getElementById("connectionsStatus").style.color = "red"
  //     document.getElementById("connectionsStatus").innerHTML = localStorage.getItem("ConectionStatus")
  //     document.querySelector("#settingChannelButton").style.color = "red"
  //   }
  // } else {
  //   document.getElementById("connectionsStatus").innerHTML = "Disconnected"
  //   if (localStorage.getItem("ConectionStatus") === "Connected" || document.getElementById("connectionsStatus").style.color === "orange") {
  //     document.getElementById("connectionsStatus").innerHTML = localStorage.getItem("ConectionStatus")
  //     document.getElementById("connectionsStatus").style.color = "orange"
  //     document.querySelector("#settingChannelButton").style.color = "orange"
  //   }
  // }
}

const SettingsPage = (props) => {
  useEffect(() => {
    if (localStorage.getItem("ConectionStatus") === "Connected") {
      document.getElementById("connectionsStatus").style.color = "orange"
      document.querySelector("#settingChannelButton").style.color = "orange"

    }
    if (localStorage.getItem("ConectionStatus") === "Disconnected") {
      document.getElementById("connectionsStatus").style.color = "red"
      document.querySelector("#settingChannelButton").style.color = "red"
    }
  })


  const navigate = useNavigate();
  const createChannelName = () => {
    const chname = document.getElementById("channelName")
    const tokname = document.getElementById("token")
    console.log(chname, tokname)

    if (chname !== undefined || tokname !== undefined) {
      localStorage.setItem("ChannelName", chname.value);
      localStorage.setItem("Token", tokname.value);
    } else {
      console.log("pole")
    }
  }

  return (<div className={s.container}>
    <div className={s.scontainer}>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Channel Name</Form.Label>
        <Form.Control id="channelName" defaultValue={localStorage.getItem("ChannelName")} placeholder="channel name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>TMI Token </Form.Label>
        <div className={s.tmi}>
          {/* <Button onClick={() => { window.open('https://twitchapps.com/tmi/'); }}>Get Token</Button> */}
          {/* <Button onClick={() => { window.open('https://twitchapps.com/tmi/'); }}>Get Token</Button> */}
          <a href="https://twitchapps.com/tmi/" target="_blank" id={st.tokenGet} className={st['btn-flip']} data-back="get" data-front="Token"></a>
          <Form.Control defaultValue={localStorage.getItem("Token")} type="password" autoComplete="on" id="token" placeholder="********************" />
        </div>
      </Form.Group>
      <div className={s.buttonsGroup}>
        {/* <Button type="submit" onClick={Disconnect()} className={s.btnOK}>Disconnect</Button> */}
        {/* <Button type="submit" onClick={createChannelName} className={s.btnOK}>Connect</Button> */}
        <a href="/settings" id="flipConnectBtn" className={st['btn-flip']} onClick={createChannelName} data-back="Connect" data-front="Change Status"></a>
      </div>

      {/* <Button type="submit" onClick={() => { navigate('/home') }} className={s.btnOK}>OK</Button> */}
      <h6 id="connectionsStatus" >{localStorage.getItem("ConectionStatus")}</h6>
    </Form>
    </div>
  </div>);
}

export default SettingsPage;