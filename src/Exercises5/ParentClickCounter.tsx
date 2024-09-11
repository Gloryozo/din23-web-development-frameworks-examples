import { useState } from 'react'
import ChildClickCounter from './ChildClickCounter';


export default function ParentClickCounter() {
const [counter, setCounter] = useState("0");

function incrementCounter(){
  setCounter(counter + 1);
  console.log('Clicked');  


 

  return (
    <div>
      <h1>Click Counter</h1>
      <h2>You have clicked the button {counter} times</h2>
      <ChildClickCounter buttonClick ={incrementCounter} />
      {/* Pass the incrementCounter function to the Child Component */}
      </div>
  )
}
}