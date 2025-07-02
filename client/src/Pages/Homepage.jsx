import React, { useState } from 'react'
import ChatContainer from '../components/ChatContainer'
import RightSlidebar from '../components/RightSlidebar'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
  const [SelectedUser, SetSelectedUser] = useState(false)

  return (
    <div className='border w-full h-screen'>
        <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${SelectedUser ? "grid-cols-3" : "grid-cols-2"}`}>
       
           <Sidebar />
            <ChatContainer/>
            
            <RightSlidebar/>
        </div>
       
    </div>
  )
}

export default Homepage
