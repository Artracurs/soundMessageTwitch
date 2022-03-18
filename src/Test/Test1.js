import axios from 'axios';

const url1 = "https://jsonplaceholder.typicode.com/todos"
const url2 = "https://www.myinstants.com/instant/talking-ben-yes-46136/"
const url3 = "http://localhost:3000"

async function axer() {
  let resp = await fetch(url1,{
    method: "GET",
    mode: "cors",
  })
  let content = await resp.text()
  console.log(content)
}

const Test1 = () => {
  return (<div>
    <h1></h1>
    <button onClick={axer}>Axer</button>
    {/* <iframe id="owwop" width="110" height="200" src="https://www.myinstants.com/instant/pussy-meme/embed/" frameborder="0" scrolling="no"></iframe> */}
  </div>);
}


export default Test1;