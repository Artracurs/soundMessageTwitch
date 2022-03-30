import s from "./LinksFromChat.module.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import st from "./Button_effect.module.scss"

const LinksFromChat = () => {
  // const [messagesSession, setMessagesSession] = useState(sessionStorage.getItem("messages"))


  function GetDomain(url){
    let domain = (new URL(url));
    return domain.host
  }


  const messagesSession = sessionStorage.getItem("messages");
  let messages = JSON.parse(sessionStorage.getItem("messages"));
  messages.reverse();

  let chatList = messages.map((m) => {

    return (
      <div key={uuidv4()} className={s.chatLine}>
        <div className={s.nickname}> {m.nickname.toUpperCase()} </div>
        <div className={s.date}> ({m.date}) </div>

        {/* <div className={s.message}> <a className={s.message} target="_blank" href={`${m.message}`}>{m.message}</a></div> */}
        {/* <div>{urlify(s.message)}</div> */}
        {/* <div className={s.message}> {urlify(m.message)} </div> */}

        {/* {detectURLs(m.message)? <div className={s.message}><a className={s.message} target="_blank" href={detectURLs(m.message)}>{m.message}</a></div> : <div className={s.message}>{m.message} </div> } */}
        <div className={s.message}> {m.message} </div>
        {/* <a  target="_blank" href={m.url}>  <div >    {m.url}  </div>    </a> */}

        {/* <a className={s.message} target="_blank" href={m.url}><button className={s.link} > Link </button></a> */}



        {m.url === "null" ? <></> : <div className={st.buttonContainer} >
          <a href={m.url} className={st['btn-flip']} target="_blank" data-back="Open" data-front={GetDomain(m.url)}></a>
          <p className={s.linkText}> {m.url} </p>
        </div>
        }





      </div>
    );
  });

  return (
    <div className={s.container}>
      <div className={s.main}>
        <div id="chatRight" className={s.right}>
          {chatList}
        </div>
      </div>

      <footer>Latest Release 29 March 2022</footer>
    </div>
  );
};

export default LinksFromChat;
