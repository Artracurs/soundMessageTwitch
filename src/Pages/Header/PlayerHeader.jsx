import { Button, Form } from "react-bootstrap-v5";
import bitok from "../../AudioPlayer/Audiofiles/bitok.mp3";
import knob from "../../AudioPlayer/Audiofiles/knob.mp3";
import s from "./PlayerHeader.module.scss";
import { useState, useEffect } from "react";
import Slider from '@mui/material/Slider';


// const audio = new Audio(knob);
const volume = localStorage.getItem("volume");
const defaultVolume = 0
const audio = new Audio(knob)

export const PlayAudio = () => {
  audio.volume = localStorage.getItem("volume") / 100;
  audio.play();
};

const PlayerHeader = (props) => {
  const [rangeval, setRangeval] = useState(localStorage.getItem("volume"));
  const [act, setAct] = useState(localStorage.getItem("volumeStatus"));

  const Changer = () => {

  }

  useEffect(() => {

    document.getElementById("ranger").defaultValue = localStorage.getItem("volume")
  })



  return (
    <div className={s.container}>
      <label id="volumeLabelHeader" className={s.volmValue}  value="volume"></label>
      <Slider id="ranger" aria-label="Default" valueLabelDisplay="auto" onChange={(event) => {
          setRangeval(event.target.value);
          localStorage.setItem("volume", rangeval);
        }} />
    </div>

  );
};

export default PlayerHeader;
