
import { AuthProvider } from './context/AuthContext'
import  Authentication  from './pages/Authentication'
import LandingPage  from './pages/Landing'
import {Route, BrowserRouter as Router,  Routes} from 'react-router-dom'
import VideoMeetComponent from './pages/VideoMeet'
import HomeComponent from './pages/Home'
import History from './pages/History'

function App() {

  return (
  <>
  <Router>
  <AuthProvider>
    <Routes>
     <Route path='/' element={<LandingPage/>} />
     <Route path='/auth' element= {<Authentication/>} />
     <Route path='/home' element={<HomeComponent/>}/>
     <Route path='/history' element={<History/>} />
     <Route path='/:url' element={<VideoMeetComponent/>}/>
   </Routes>
  </AuthProvider>
  </Router>
  </>
  )
}

export default App
