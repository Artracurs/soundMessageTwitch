import { Modal, Button, Table, NavDropdown, Form, FormCheck } from "react-bootstrap-v5";
import Test1 from "../Test/Test1";
import s from "./Main.module.scss"
import Player, { PlayAudio } from "../AudioPlayer/Player";
import { useState } from 'react'

let date = new Date()
const elements = ['a', 'b', 'c', 'd']

export const Main = (props) => {

  return (
    <div className={s.container}>
      <h6></h6>
      
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Mute</th>
            <th>#</th>
            <th>NickName</th>
            <th>Sound</th>
            <th>Messages</th>
            <th>First Message on Channel</th>
          </tr>
        </thead>
        <tbody>
        <Lines />
        </tbody>
      </Table >
    </div>
  );
}


export const Lines = (props) => {
  const [msg, setMsg] = useState(0)

  return (
    <tr>
      <td><FormCheck onClick={Lines}></FormCheck></td>
      <td>1</td>
      <td>Nickname</td>
      <td>
        <Form.Select size="sm" aria-label="Default select example">
          <option onChange={()=>console.log("subscriber")} value="subscriber">Subscriber</option>
          <option onChange={()=>console.log("moderator")} value="moderator">Moderator</option>
          <option onChange={()=>console.log("follower")} value="follower">Follower</option>
        </Form.Select>
      </td>
      <td>{msg}</td>
      <td>{date.toUTCString()}</td>
    </tr>
  )
}

export default Main;
