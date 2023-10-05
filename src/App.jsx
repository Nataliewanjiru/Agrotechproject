import { useState } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Register/>
    <Login/>
    </>
  )
}

export default App
