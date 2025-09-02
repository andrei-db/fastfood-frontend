import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menus from './pages/Menus'
import Order from './pages/Order'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import SideCart from './components/SideCart'
import SideCartButton from './components/SideCartButton'

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="relative">
      <div className={`transition-all duration-500 ${cartOpen ? 'opacity-50' : 'opacity-100'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>

      <SideCartButton onOpen={() => setCartOpen(true)} />

      <SideCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}

export default App
