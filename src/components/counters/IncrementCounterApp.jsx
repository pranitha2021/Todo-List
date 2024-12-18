import React from "react";
import { useCounter } from "./useCounter";

function IncrementCounterApp() {
  const { count, incrementCount } = useCounter(); // Use custom hook

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
export default IncrementCounterApp