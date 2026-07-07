import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Card user="Atharva patil" age={23}/>
      <Card user="Rahul Yadav" age={25} />
    </div>
  )
}

export default App
