import { Modal, Button, Table, NavDropdown, Form, FormCheck } from "react-bootstrap-v5";
import Test1 from "../Clock/Clock";
import s from "./Main.module.scss"
import Player, { PlayAudio } from "../../AudioPlayer/Player";
import { useState } from 'react'
import MainCenter from "./MainCenter";
import { v4 as uuidv4 } from 'uuid';
import { Lines } from "./Lines";

export const Main = (props) => {

  return (
    <div className={s.container}>
      <Form className={s.scontainer}>
        <Table striped bordered hover variant="dark">
        {/* <Table striped bordered hover > */}
          <thead>
            <tr>
              <th>#</th>
              <th>NickName</th>
              <th>Sound</th>
              <th>Messages</th>
              <th>First Message on Channel</th>
            </tr>
          </thead>
          <tbody>
            <Lines />
            <Lines />
          </tbody>
        </Table >
        <MainCenter />
      </Form>

    </div>
  );
}

export default Main;
