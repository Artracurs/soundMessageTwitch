import s from "./Followers.module.scss"
import FollowersFirstMessage from "./FollowersFirstMessage.jsx/FollowersFirstMessage";
import FollowersStandartMessage from "./FollowersFirstMessage.jsx/FollowersStandartMessage";

const FollowersPage = () => {


  return (<div >
    <h4>Sound settings</h4>
    <div className={s.container}>
      <FollowersFirstMessage />
      <FollowersStandartMessage />
    </div>

  </div>);
}

export default FollowersPage;