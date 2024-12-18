import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import IncrementCounterApp from "./components/counters/IncrementCounterApp";
// import DecrementCounterApp from "./components/counters/DecrementCounterApp";
// import IncrementByAmount from './components/counters/IncrementedByAmount';
import TodoApp from './components/TodoApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
      <IncrementCounterApp />
      <DecrementCounterApp />
      <IncrementByAmount/>
    </div> */}
    <TodoApp />

    </>
  )
}

export default App
