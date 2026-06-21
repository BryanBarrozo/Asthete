import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import AllProductsPage from './pages/allProducts/AllProductsPage'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/collection' element={<AllProductsPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
