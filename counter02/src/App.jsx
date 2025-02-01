import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1

  }

  return (
    <>
      <h1>Counter app</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button>Subtract Value</button>
    </>
  )
}

export default App
