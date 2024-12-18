import React from "react";
import { useCounter } from "./useCounter";

function DecrementCounterApp() {
  const { count, decrementCount } = useCounter(); // Use custom hook

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default DecrementCounterApp;
