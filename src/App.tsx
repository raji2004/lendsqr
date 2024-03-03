import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
//routes
import { Routes, Route } from 'react-router-dom';
//Page Imports
import { Home, Login } from './pages';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Home' element={<Home />} />


      </Routes>
    </div>
  )
}

export default App
