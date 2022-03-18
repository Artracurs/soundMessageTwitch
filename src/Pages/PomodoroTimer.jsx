import st from "./PomodoroPage.module.scss"

import { Card, Button, Form } from "react-bootstrap-v5";

const PomodoroPage = () => {
  let releaseDay = 30
  let today = new Date()
  
  return (<div className={st.container}>
    
    <Card className="bg-dark text-white">
      <Card.Body>
        <Card.Title>The Pomodoro Technique</Card.Title>
        <Card.Text>
          The Pomodoro Technique is a time management system that encourages <br /> people to work with the time  they have—rather than against it.<br /> Using this method, you break your workday into 25-minute chunks <br />separated by five-minute breaks. <br /> These intervals are referred to as pomodoros.
        </Card.Text>
        <Button onClick={() => { window.open('https://github.com/Artracurs/soundMessageTwitch'); }}>Take part in the development</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> {releaseDay - today.getDate()} days left until release Ver 0.1</Card.Footer>
    </Card>
  </div>);
}

export default PomodoroPage;