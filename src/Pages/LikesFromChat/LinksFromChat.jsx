import s from "./LinksFromChat.module.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const LinksFromChat = () => {
  // const [messagesSession, setMessagesSession] = useState(sessionStorage.getItem("messages"))




 
  function detectURLs(message) {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return message.match(urlRegex)
  }



  const messagesSession = sessionStorage.getItem("messages");
  let messages = JSON.parse(sessionStorage.getItem("messages"));
  messages.reverse();

  let chatList = messages.map((m) => {
    console.log(detectURLs(m.message));
    return (
      <div key={uuidv4()} className={s.chatLine}>
        <div className={s.nickname}> {m.nickname.toUpperCase()} </div>
        <div className={s.date}> ({m.date}) </div>
        {/* <div className={s.message}> <a className={s.message} target="_blank" href={`${m.message}`}>{m.message}</a></div> */}
        {/* <div>{urlify(s.message)}</div> */}
        {/* <div className={s.message}> {urlify(m.message)} </div> */}

        {detectURLs(m.message)? <div className={s.message}><a className={s.message} target="_blank" href={detectURLs(m.message)}>{m.message}</a></div> : <div className={s.message}>{m.message}</div> }


        
        
        
        {/* <div>{s.message}</div> */}
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
