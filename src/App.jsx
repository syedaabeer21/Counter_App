import { useState } from "react";


function App() {

  let [num, setNum] = useState(0)

  function addCounter() {
    setNum(num + 1)
   
  }
  function lessCounter(){
    if(num==0){
      setNum(num)
    }
    else{
    setNum(num-1)
    }
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={addCounter}>Add Counter </button>
      <button onClick={lessCounter}>Less Counter</button>
    </>
  )
}

export default App;