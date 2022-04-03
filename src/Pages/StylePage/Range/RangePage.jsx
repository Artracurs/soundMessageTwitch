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

  const [red2, setRed2] = useState(localStorage.getItem("red2"))
  const [green2, setGreen2] = useState(localStorage.getItem("green2"))
  const [blue2, setBlue2] = useState(localStorage.getItem("blue2"))
  const [alpha2, setAlpha2] = useState(localStorage.getItem("alpha2"))

  useEffect(() => {
    document.body.style.backgroundImage = `radial-gradient(rgba(${red}, ${green}, ${blue}, ${alpha}), rgba(${red2}, ${green2}, ${blue2}, ${alpha2})),
    url(${localStorage.getItem("style")})`
  })

  return (<div className={s.container}>
    <hr />
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

<hr />

    <div className={s.oneColorLine}>
      <div className={s.label}>R</div>
      <input className={s.range} id="rangeRGBA" type="range" onChange={(e) => {
        setRed2(actual => actual = e.target.value)
        localStorage.setItem("red2", red2)
      }} value={red2} min="0" max="255" step="1" /> {red2}
    </div>
    <div className={s.oneColorLine}>
      <div className={s.label}>G</div>
      <input className={s.range} id="rangeRGBA" type="range" onChange={(e) => {
        setGreen2(actual => actual = e.target.value)
        localStorage.setItem("green2", green2)
      }} value={green2} min="0" max="255" step="1" /> {green2}
    </div>
    <div className={s.oneColorLine}>
      <div className={s.label}>B</div>
      <input className={s.range} id="rangeRGBA" type="range" onChange={(e) => {
        setBlue2(actual => actual = e.target.value)
        localStorage.setItem("blue2", blue2)
      }} value={blue2} min="0" max="255" step="1" /> {blue2}
    </div>
    <div className={s.oneColorLine}>
      <div className={s.label}>A</div>
      <input className={s.range} id="rangeRGBA" type="range" onChange={(e) => {
        setAlpha2(actual => actual = e.target.value)
        localStorage.setItem("alpha2", alpha2)
      }} value={alpha2} min="0" max="1" step="0.1" /> {alpha2}
    </div>
  </div>);
}

export default RangePage;