import {useState} from "react";
import { useCounter} from "./useCounter";

function IncrementByAmount() {
    const [insvalue,setInsValue]=useState()
  const { count, incrementByAmountCount } = useCounter();

  const handleChange=(event)=>{
    setInsValue(parseInt(event.target.value))
    console.log(insvalue)
  }
//   const sub=(event)=>{
//     event.preventDefault()
//     console.log(insvalue)

//   }


  return (
    <div>
       
            <input type="number" value={insvalue} onChange={handleChange}/>
     
      <h1>Count: {count}</h1>
      <button onClick={()=>incrementByAmountCount(insvalue)}>Increment by {insvalue}</button>
    </div>
  );
}
export default IncrementByAmount