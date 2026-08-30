import './App.css'
import Navbar from './components/Navbar'
import  Login  from './pages/Login'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <Routes>
      <Route path='/login' element={<Login />} />

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
