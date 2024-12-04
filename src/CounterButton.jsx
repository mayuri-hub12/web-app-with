import { useState } from "react";

function CounterButton(){
const [count,setCount] =useState(0);
return(
    <div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
);
}

export default CounterButton;