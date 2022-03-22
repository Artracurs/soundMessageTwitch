import s from "./LinksFromChat.module.scss"

const LinksFromChat = () => {
  return (<div className={s.container}>
    <header>
      <h4>Links from Chat</h4>
    </header>
    <div className={s.main}>
      <div  className={s.left}>left</div>
      <div id="chatRight" className={s.right}>right</div>
    </div>
    <footer>Last Release 21 March 2022</footer>
  </div>);
}

export default LinksFromChat;