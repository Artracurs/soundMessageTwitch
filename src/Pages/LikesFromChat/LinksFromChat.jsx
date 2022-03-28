import s from "./LinksFromChat.module.scss"
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const LinksFromChat = () => {
  const [link, setLink] = useState("...")
  const messagesSession = sessionStorage.getItem("messages")
  let messages = JSON.parse(sessionStorage.getItem("messages"))
  messages.reverse()

  let chatList = messages.map((m) => {
    return (<div key={uuidv4()} className={s.chatLine}>
      <div className={s.nickname}> {m.nickname.toUpperCase()} </div>
      <div className={s.date}> ({m.date}) </div>
      {/* <div className={s.message}> <a href={`${m.message}`}>{m.message}</a></div> */}

      <div className={s.message}> <a href={`${m.message}`}></a>{m.message}</div>
    </div>
    )
  })

  return (<div className={s.container}>
    <div className={s.main}>
      <div id="chatRight" className={s.right}>{chatList}</div>
    </div>

    <footer>Latest Release 29 March 2022</footer>
  </div>);
}

export default LinksFromChat;