import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menus from './pages/Menus'
import Order from './pages/Order'
import ProductPage from './pages/ProductPage'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/:id" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
