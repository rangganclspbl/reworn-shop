import './App.css'
import Navbar from './components/Navbar'
import  Login  from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword'
import Verification from './pages/Verification'
import NewPassword from './pages/NewPassword'

function App() {


  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/verification' element={<Verification />} />
      <Route path='new-password' element={<NewPassword />} />

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
