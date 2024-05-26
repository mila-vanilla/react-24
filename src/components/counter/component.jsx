export const Counter = ({ count, max = 5, min = 0, onPlus, onMinus }) => {
  return (
    <div>
      <button onClick={ onMinus } disabled={ count === min }>-</button>
      { count }
      <button onClick={ onPlus } disabled={ count === max }>+</button>
    </div>
  )
}
