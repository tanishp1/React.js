import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  function Increase() {
    setCount(count + 1)
  }

  function Decrease() {
    setCount(count - 1)
  }

  function Increase () {
    setCount(count + 5)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Increase}>Increase by 5</button>
    </div>
  )
}

export default App
