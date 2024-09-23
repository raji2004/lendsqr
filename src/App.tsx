import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
//routes
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
//Page Imports
import { Home, Login, User } from './pages';
function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()

  return (

    <QueryClientProvider client={queryClient}>

    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Home' element={<Home />} />
         <Route path='/user/:userId' element={<User/>}/>

      </Routes>
    </div>
    </QueryClientProvider>
  )
}

export default App
