import s from "./LinksFromChat.module.scss";
import { useEffect, useState, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import st from "./Button_effect.module.scss"
import { relative } from "path";





function GetDomain(url) {
  let domain = (new URL(url));
  console.log(domain);
  return domain.href
}

const LinksFromChat = () => {

  // const [msg, setMsg] = useState(props)
 
  
  const messagesSession = sessionStorage.getItem("messages");
  let messages = JSON.parse(sessionStorage.getItem("messages"));
  messages.reverse();

  // let chatList = messages.map((m) => {
  
  //   return (
  //     <div key={uuidv4()} className={s.chatLine}>
  //       <div className={s.headerLink}>
  //         <div className={s.date} style={{ fontSize: "13px" }}> ({m.date}) </div>
  //         <div style={{ color: `${m.color}`, textAlign: 'left', paddingRight: '8px', fontSize: "13px" }} > {m.nickname.toUpperCase()} </div>
  //         <div style={{ fontSize: "14px", position: "relative", top: "-1px" }}> {m.message} </div>
  //         {/* <div style={{ fontSize: "15px", position: "relative", top: "-1px" }}> {()=>setMsg(actual=> actual)} </div> */}
  //          <div className={s.footerLink}>
  //         {m.url === "null" ? <></> : <a data-tooltip="tooltip"  target="_blank" title={GetDomain(m.url)} href={m.url}> <img className={s.fovicon} src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${m.url}`} alt={m.url} placeholder={m.url} /> </a>}
        
  //       </div>
        
  //       </div>

     

  //     </div>
  //   );
  // });



  let chatList = messages.map((m) => {
    return (
      <div key={uuidv4()} className={s.chatLine}>
        <div className={s.headerLink}>
          <div className={s.date} style={{ fontSize: "14px" }}> ({m.date}) </div>
          <div style={{ color: `${m.color}`, textAlign: 'center', paddingRight: '10px', fontSize: "14px" }} > {m.nickname.toUpperCase()} </div>
          <div style={{ fontSize: "15px", position: "relative", top: "-1px" }}> {m.message} </div>
          {/* <div style={{ fontSize: "15px", position: "relative", top: "-1px" }}> {()=>setMsg(actual=> actual)} </div> */}
        </div>
        <div className={s.footerLink}>
          {m.url === "null" ? <></> : <div className={st.buttonContainer} > <a title={m.url} href={m.url} className={st['btn-flip']} target="_blank" data-back="Open" data-front={GetDomain(m.url)}></a>  </div>}
        </div>

      </div>
    );
  });


  const [value, setValue] = useState([])
  const data = sessionStorage.getItem("messages")


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
