import { useState } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {currentForm === "login" ? <Route exact path="/login" element={<Login changeForm={changeForm} />} /> : <Route exact path="/login" element={<Register changeForm={changeForm} />} />}
    </>
  )
}

export default App
