import { useState } from 'react'

export const Dish = ({ dish }) => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>{ dish.name }:{ dish.price }</div>
      <div>
        <button onClick={ () => count && setCount(count - 1) }>-</button>
        { count }
        <button onClick={ () => count < 5 && setCount(count + 1) }>+</button>
      </div>
    </>
  )
}
