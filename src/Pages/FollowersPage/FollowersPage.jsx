import Main from "../Main/Main";
import { v4 as uuidv4 } from 'uuid';


const HomePage = () => {
  return ( <div>
    {/* <Header key={uuidv4()}/> */}
    <Main key={uuidv4()}/>
  </div>  );
}
 
export default HomePage;