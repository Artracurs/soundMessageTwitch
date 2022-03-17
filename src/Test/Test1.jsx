import axios from "axios";

const xhr = new XMLHttpRequest()

function axer() {
  const geturl = document.getElementById("owwop").src

  xhr.open("GET", "https://www.myinstants.com/instant/cute-uwu-73482/")
  xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
  xhr.setRequestHeader('Content-Type', 'application/xml');
  xhr.send()

  xhr.onload = () => {
    console.log(xhr.status)
  }
}

const Test1 = () => {
  return (<div>
    <h1></h1>
    {/* <button onClick={axer}>Axer</button> */}
    {/* <iframe id="owwop" width="110" height="200" src="https://www.myinstants.com/instant/pussy-meme/embed/" frameborder="0" scrolling="no"></iframe> */}
  </div>);
}


export default Test1;