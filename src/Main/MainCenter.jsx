import s from './MainContainer.module.scss'
import { Card, Modal, Button, Table, NavDropdown, Form, FormCheck } from "react-bootstrap-v5";

const MainCenter = () => {
  return (
    <div className={s.container} >
      <Card className="bg-dark text-white">
        <Card.Footer className="text-muted">Last Release - Friday March 18, 2022 - ver 0.1</Card.Footer>
      </Card>
    </div>);
}

export default MainCenter;