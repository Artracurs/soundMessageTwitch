import { Button, Form } from "react-bootstrap-v5";
import bitok from "./bitok.mp3";
import knob from "./knob.mp3";
import rington from "./rington.mp3";
import { v4 as uuidv4 } from "uuid";
import s from "./PlayerHeader.module.scss";
import { useState, useEffect } from "react";

// const audio = new Audio(knob);
const volume = localStorage.getItem("volume");

export const PlayAudio = () => {
  const audio = new Audio(knob)
  audio.volume = localStorage.getItem("volume") / 100;
  audio.play();
};

const PlayerHeader = (props) => {
  const [rangeval, setRangeval] = useState(localStorage.getItem("volume"));
  const [act, setAct] = useState(localStorage.getItem("volumeStatus"));

  return (
    <div className={s.container}>
        <h4 value="csa">{localStorage.getItem("volume")}%</h4>
        <Form.Range type="range" defaultValue={localStorage.getItem("volume")} className="mainRange" id="ranger"
          min="0"
          max="100"
          onChange={(event) => {
            setRangeval(event.target.value);
            localStorage.setItem("volume", rangeval);
          }}
        />
    </div>
  );
};

export default PlayerHeader;
