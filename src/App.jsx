import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router-dom'
import Home from './component/home_page/Home'
import './App.css'
import Navbar from './component/Navbar'
import Register from './component/RegisterPage/Register'
import Login from './component/LoginPage/Login'
import AdminHome from './component/admin_pages/AdminHome'
import UserHome from './component/user_pages/UserHome'
function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/admin' element={<AdminHome/>}/>
    <Route path='/user' element={<UserHome/>}/>
   </Routes>
      </div>
  )

}
export default App
