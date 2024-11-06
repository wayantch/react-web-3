import React from 'react'
import Pertemuan2 from './pages/Pertemuan2'
import Pertemuan3 from './pages/Pertemuan3'
import Navbar from './components/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Todo from './pages/Todo'
import Login from './pages/Login'
import ShoppingCart from './pages/ShoppingCart'
import Complete from './pages/Complete'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/shopping_cart" element={<ShoppingCart />} />
      <Route path="/complete" element={<Complete />} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
