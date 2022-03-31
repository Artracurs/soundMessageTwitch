import s from "./LinksFromChat.module.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import st from "./Button_effect.module.scss"




const LinksFromChat = () => {
  // const [messagesSession, setMessagesSession] = useState(sessionStorage.getItem("messages"))


  function GetDomain(url) {
    let domain = (new URL(url));
    return domain.host
  }

  // function nickNameColor(nick){
  //   let getNick = localStorage.getItem(nick)
  //   if (getNick){}
  //   let result = "#4385a8"
  //   return result
  // }


  const messagesSession = sessionStorage.getItem("messages");
  let messages = JSON.parse(sessionStorage.getItem("messages"));
  messages.reverse();


  let chatList = messages.map((m) => {

    return (
      <div key={uuidv4()} className={s.chatLine}>
        <div className={s.headerLink}>
          <div className={s.date} > ({m.date}) </div>
          <div style={{ color: `${m.color}`, textAlign: 'center', paddingRight: '10px' }} > {m.nickname.toUpperCase()} </div>
          <div > {m.message} </div>
        </div>
        <div className={s.footerLink}>
          {m.url === "null" ? <></> : <div className={st.buttonContainer} > <a title={m.url} href={m.url} className={st['btn-flip']} target="_blank" data-back="Open" data-front={GetDomain(m.url)}></a>  </div>   }
        </div>
        
      </div>
    );
  });

  const [value, setValue] = useState("")

  useEffect(() => {
    async function init() {
      const data = await sessionStorage.getItem("messages")
      setValue(JSON.parse(data))

    }
    init()
  }, [])





  return (
    <div className={s.container}>
      <div className={s.main}>
        <div id="chatRight" className={s.right}>
          {chatList}
        </div>
      </div>

      <footer>Latest release 1 April 2022</footer>
    </div>
  );
};

export default LinksFromChat;
