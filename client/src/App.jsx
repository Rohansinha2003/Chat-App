import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Loginpage from './Pages/Loginpage'
import Profilepage from './Pages/Profilepage'
import Homepage from './Pages/Homepage'

const App = () => {
  return (
    <div className='bg-[url("./assets/bgImage.svg")]'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Loginpage />} />
        <Route path="/Profile" element={<Profilepage />} />
      </Routes>
    </div>
  )
}

export default App
