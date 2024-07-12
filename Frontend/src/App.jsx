import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Auth/Login'
import SignUp from './components/Auth/SignUp'
import { useAuthContext } from './context/AuthContext'
import { Toaster } from 'react-hot-toast'

function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} ></Route>
      </Routes>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />}></Route>
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />}></Route>

        </Routes>
      </div>
      <Toaster />
      <div>

      </div>
    </div>
  )
}

export default App
