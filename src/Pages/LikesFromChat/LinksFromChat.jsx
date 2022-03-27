import s from "./LinksFromChat.module.scss"
import { useEffect } from 'react'
 
const LinksFromChat = () => {
  


  const messagesSession = sessionStorage.getItem("messages")


  return (<div className={s.container}>

    <div className={s.main}>
      <div  className={s.left}>left</div>
      <div id="chatRight" className={s.right}>right</div>
    </div>
    <footer>Latest Release 21 March 2022</footer>
  </div>);
}

export default LinksFromChat;