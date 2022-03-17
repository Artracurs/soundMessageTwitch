import axios from 'axios';

const url1 = "https://jsonplaceholder.typicode.com/todos"
const url2 = "https://www.myinstants.com/instant/talking-ben-yes-46136/"

async function axer() {
  let resp = await fetch(url2, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'X-Requested-With',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    credentials: 'same-origin',
    referrerPolicy: 'no-referrer'
  })
 

  let content = await resp.text()

  console.log(content)
  // axios('http://www.myinstants.com/instant/talking-ben-yes-46136/', {
  //   headers: {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'GET, POST',
  //       'Access-Control-Allow-Headers': 'X-Requested-With',
  //       'Access-Control-Allow-Headers': 'text/html',
  //     }
  //   }
  // })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })

  // const testURL = 'https://dashboard.heroku.com/apps/twitch-sound-alerts/deploy/github';
  // const myInit = {
  //   method: 'GET',
  //   mode: 'no-cors',
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json'
  //   },
  //   withCredentials: true,
  //   credentials: 'same-origin',
  // };

  // const myRequest = new Request(testURL, myInit);

  // fetch(myRequest).then(function (response) {
  //   return response;
  // }).then(function (response) {
  //   console.log(response);
  // }).catch(function (e) {
  //   console.log(e);
  // });
}


const Test1 = () => {
  return (<div>
    <h1></h1>
    <button onClick={axer}>Axer</button>
    {/* <iframe id="owwop" width="110" height="200" src="https://www.myinstants.com/instant/pussy-meme/embed/" frameborder="0" scrolling="no"></iframe> */}
  </div>);
}


export default Test1;