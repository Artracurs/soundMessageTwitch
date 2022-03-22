import s from './MainContainer.module.scss'
import { Card } from "react-bootstrap-v5";

const MainCenter = () => {
  return (
    <div className={s.container} >
      <Card className="bg-dark ">
        <Card.Footer className="text-muted">Latest Release - Monday March 23, 2022 - ver 0.2</Card.Footer>
      </Card>
    </div>);
}

export default MainCenter;