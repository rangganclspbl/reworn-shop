import '../App.css'
import Navbar from '../components/layout/Navbar'
import  Login  from '../features/auth/pages/Login'
import { Routes, Route } from 'react-router-dom'
import ForgotPassword from '../features/auth/pages/ForgotPassword'
import Verification from '../features/auth/pages/Verification'
import NewPassword from '../features/auth/pages/NewPassword'
import Signup from '../features/auth/pages/Signup'

function App() {


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/verification' element={<Verification />} />
      <Route path='new-password' element={<NewPassword />} />
      <Route path="/signup" element={<Signup />} />

      <Route 
        path='/*'
        element={
          <>
            <Navbar />
          </>
        }
      /> 
    </Routes>
  )
}

export default App
