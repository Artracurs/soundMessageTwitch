import s from './RangePage.module.scss'
import { useEffect, useState } from 'react'


const RangePage = (props) => {
  useEffect(() => {
    const style = `radial-gradient(rgba(${0}, ${75}, ${146}, ${0.425}), rgba(${0}, ${18}, ${53}, ${0.863})),
    url(${localStorage.getItem("style")})`
    document.body.style.backgroundImage = style
  })

  const [red, setRed] = useState(localStorage.getItem("red"))
  const [green, setGreen] = useState(localStorage.getItem("green"))
  const [blue, setBlue] = useState(localStorage.getItem("blue"))
  const [alpha, setAlpha] = useState(localStorage.getItem("alpha"))

  console.log(red)

  useEffect(() => {
    // document.body.style.backgroundColor = `rgb(${localStorage.getItem("red")}, ${localStorage.getItem("green")}, ${localStorage.getItem("blue")})`
    // document.getElementById("testbox").style.backgroundImage = `radial-gradient(rgba(${red}, 75, 146, 0.425), rgba(0, 18, 53, 0.863)),
    // url(${localStorage.getItem("style")})`

    document.body.style.backgroundImage = `radial-gradient(rgba(${red}, ${green}, ${blue}, ${alpha}), rgba(0, 18, 53, 0.863)),
    url(${localStorage.getItem("style")})`

    
  })







  return (<div className={s.container}>

    <div className={s.oneColorLine}>
      <div className={s.label}>R</div>
      <input className={s.range} id="rangeRed" type="range" onChange={(e) => {
        setRed(actual => actual = e.target.value)
        localStorage.setItem("red", red)
      }} value={red} min="0" max="255" step="1" /> {red}
    </div>

    <div className={s.oneColorLine}>
      <div className={s.label}>G</div>
      <input className={s.range} id="rangeRGBA" type="range" onChange={(e) => {
        setGreen(actual => actual = e.target.value)
        localStorage.setItem("green", green)
      }} value={green} min="0" max="255" step="1" /> {green}
    </div>

    <div className={s.oneColorLine}>
      <div className={s.label}>B</div>
      <input className={s.range} id="rangeRGBA" type="range" onChange={(e) => {
        setBlue(actual => actual = e.target.value)
        localStorage.setItem("blue", blue)
      }} value={blue} min="0" max="255" step="1" /> {blue}
    </div>

    <div className={s.oneColorLine}>
      <div className={s.label}>A</div>
      <input className={s.range} id="rangeRGBA" type="range" onChange={(e) => {
        setAlpha(actual => actual = e.target.value)
        localStorage.setItem("alpha", alpha)
      }} value={alpha} min="0" max="1" step="0.01" /> {alpha}
    </div>


  </div>);
}

export default RangePage;