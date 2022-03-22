import { Button, Form } from "react-bootstrap-v5";
import bitok from "../../AudioPlayer/Audiofiles/bitok.mp3";
import knob from "../../AudioPlayer/Audiofiles/knob.mp3";
import s from "./PlayerHeader.module.scss";
import { useState, useEffect } from "react";

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

  const Changer =()=>{

  }

  useEffect(() => {
    if (localStorage.getItem("volume") > 90){
      document.querySelector("#ranger").style.color = "red"
    } else {
      document.querySelector("#ranger").style.color = "white"
    }
    document.getElementById("ranger").defaultValue = localStorage.getItem("volume")
  })

  

  return (
    <div className={s.container}>
      <label id="volumeLabelHeader" className={s.volmValue} defaultValue={localStorage.getItem("volume")} value="volume">{localStorage.getItem("volume")}%</label>
      <Form.Range type="range" defaultValue={localStorage.getItem("volume")} className={s.mainRange} id="ranger"
        min="0"
        max="100"
        onChange={(event) => {
          setRangeval(event.target.value);
          localStorage.setItem("volume", rangeval);
          // PlayAudio()
        }}
      />
      {/* <h4 value="volume">{localStorage.getItem("volume")}%</h4>
      <Form.Range type="range" defaultValue={localStorage.getItem("volume")} className="mainRange" id="ranger"
        min="0"
        max="100"
        onChange={(event) => {
          setRangeval(event.target.value);
          localStorage.setItem("volume", rangeval);
        }}
      /> */}
    </div>

  );
};

export default PlayerHeader;
