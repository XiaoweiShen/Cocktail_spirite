import React, { useState} from 'react'
// import ReactRouter from ReactRouter
import {Link} from "react-router-dom"

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count+1);
  const decrease = () => setCount(count-1);
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </div>
  )
}
export default Counter;