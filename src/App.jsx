import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/login/LoginPage'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
