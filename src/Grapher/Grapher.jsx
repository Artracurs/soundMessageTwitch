import s from "./Grapher.module.scss"
import axios from "axios";
import { useEffect, useState } from "react"


const Grapher = (props) => {

  return (<div className={s.container}>
    <h1>{}</h1>
    <h2>{}</h2>
  </div>);
}

export default Grapher;