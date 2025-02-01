import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(1)


  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter+1)

  }

  const subValue = () => {
    setCounter(counter - 1);
    console.log("clicked", counter);
  };
  

  return (
    <>
      <h1>Counter app</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <br />

      <button
      onClick={subValue}
      >Subtract Value</button>
    </>
  )
}

export default App
