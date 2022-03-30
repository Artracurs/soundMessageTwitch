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

  function nickNameColor(nick){
    let getNick = localStorage.getItem(nick)
    if (getNick){}
    let result = "#4385a8"
    return result
  }



  const messagesSession = sessionStorage.getItem("messages");
  let messages = JSON.parse(sessionStorage.getItem("messages"));
  messages.reverse();

  let chatList = messages.map((m) => {

    return (
      <div key={uuidv4()} className={s.chatLine}>
        {/* {m.url === "null"?         <div className={s.codeSandBoxButtonContainer}> 
        <button className={s.codeSandBoxButton}> 
        <img className={s.codeSandBoxButtonImage} src="https://ci.codesandbox.io/static/favicon.ico" title="Send code from message to Codesandbox.io" /></button></div> : <></>}
 */}




        <div style={{color: `#${m.color}`}} className={s.nickname}> {m.nickname.toUpperCase()} </div>
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

  const [value, setValue] = useState("")

  useEffect(() =>{
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

      <footer>Latest Release 29 March 2022</footer>
    </div>
  );
};

export default LinksFromChat;
