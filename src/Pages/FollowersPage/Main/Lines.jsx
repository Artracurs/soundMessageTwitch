import { useState } from 'react'
import { Modal, Button, Table, NavDropdown, Form, FormCheck } from "react-bootstrap-v5";
import { v4 as uuidv4 } from 'uuid';

let date = new Date()

export const Lines = (props) => {
  const [msg, setMsg] = useState(0)

  return (
    <tr>
      <td>1</td>
      <td>Nickname</td>
      <td>
        <Form.Select size="sm" aria-label="Default select example">
          <option onClick={console.log("subscriber")} value="subscriber">Subscriber</option>
          <option onChange={console.log("moderator")} value="moderator">Moderator</option>
          <option onChange={console.log("follower")} value="follower">Follower</option>
          <option onChange={console.log("none")} value="none">None</option>
        </Form.Select>
      </td>
      <td>{msg}</td>
      <td>{date.toUTCString()}</td>
    </tr>
  
  )
}