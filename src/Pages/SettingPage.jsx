import { Modal, Button, Table, NavDropdown, Form, FormCheck } from "react-bootstrap-v5";
import s from './SettingPage.module.scss'
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  const conStatus = localStorage.getItem("ConectionStatus")

  const createChannelName = () => {
    const chname = document.getElementById("channelName")
    const tokname = document.getElementById("token")
    console.log(chname, tokname)

    if (chname !== undefined || tokname !== undefined){
      
      localStorage.setItem("ChannelName", chname.value);
      localStorage.setItem("Token", tokname.value);
    } else {
      console.log("pole")
    }
  }


  return (<div className={s.container}>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Channel Name</Form.Label>
        <Form.Control id="channelName" defaultValue={localStorage.getItem("ChannelName")} placeholder="channel name"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>TMI Token </Form.Label>
        <div className={s.tmi}>
          <Button onClick={() => { window.open('https://twitchapps.com/tmi/'); }}>Get Token</Button>
          <Form.Control defaultValue={localStorage.getItem("Token")} type="password" autoComplete="on" id="token" placeholder="********************"  />
        </div>
      </Form.Group>
      <Button type="submit" onClick={createChannelName} className={s.btnOK}>Connect</Button>
      {/* <Button type="submit" onClick={() => { navigate('/home') }} className={s.btnOK}>OK</Button> */}
      <h6 id="connectionsStatus" >{conStatus}</h6>
    </Form>

  </div>);
}

export default SettingsPage;