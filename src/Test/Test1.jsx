import { useState } from "react"
import { Button } from "react-bootstrap-v5";
import { v4 as uuidv4 } from 'uuid';

const Test1 = () => {

  const elements = ['a', 'b', 'c', 'd']
  
  const mapp = elements.map((elements) => {
    return <Test2 key={uuidv4()}/>})
  
  return ( <div>
    <h1>{mapp}</h1>
  </div> );
}

export const Test2  = () => {
  
  return (
    <></>
   );
}

export default Test1;