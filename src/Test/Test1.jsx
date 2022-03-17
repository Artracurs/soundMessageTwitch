import axios from 'axios';

function axer() {
  return axios('https://www.myinstants.com/instant/talking-ben-yes-46136/', {
    headers: {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
      },
      withCredentials: true,
      credentials: 'same-origin',
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}


const Test1 = () => {
  return (<div>
    <h1></h1>
    <button onClick={axer}>Axer</button>
    {/* <iframe id="owwop" width="110" height="200" src="https://www.myinstants.com/instant/pussy-meme/embed/" frameborder="0" scrolling="no"></iframe> */}
  </div>);
}


export default Test1;