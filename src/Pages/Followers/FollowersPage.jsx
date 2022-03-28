import s from "./Followers.module.scss"
import FollowersFirstMessage from "./FollowersFirstMessage.jsx/FollowersFirstMessage";
import FollowersStandartMessage from "./FollowersFirstMessage.jsx/FollowersStandartMessage";

const FollowersPage = () => {


  return (<div className={s.container}>
    <FollowersFirstMessage />
    <FollowersStandartMessage />
  </div>);
}

export default FollowersPage;