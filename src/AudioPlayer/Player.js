import { Button, Form } from "react-bootstrap-v5";
import bitok from "./bitok.mp3";
import knob from "./knob.mp3";
import rington from "./rington.mp3";
import { v4 as uuidv4 } from "uuid";
import s from "./Player.module.scss";
import { useState, useEffect } from "react";


const volume = localStorage.getItem("volume");

const audio = new Audio(knob)
const toggleAudio = new Audio(knob)
toggleAudio.volume = 0.5;
audio.volume = localStorage.getItem("volume") / 100;

export const PlayAudio = () => {
  audio.play();
};

export const ToggleSound = () => {
  toggleAudio.play();
};

const Player = (props) => {
  const [rangeval, setRangeval] = useState(localStorage.getItem("volume"));
  // const [act, setAct] = useState(localStorage.getItem("volumeStatus"));

  return (
    <div className={s.container}>
      <div>
        <h4 value="csa">Volume = {localStorage.getItem("volume")} %</h4>
        <Form.Range
          type="range"
          defaultValue={localStorage.getItem("volume")}
          className="mainRange"
          id="ranger"
          min="1"
          max="101"
          onChange={(event) => {
            setRangeval(event.target.value);
            localStorage.setItem("volume", rangeval);
          }}
        />
        <Button className={s.playButton} onClick={PlayAudio} >
          {" "}
          Play{" "}
        </Button>
      </div>
    </div>
  );
};

export default Player;
