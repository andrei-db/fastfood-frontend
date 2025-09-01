import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from "./context/CartContext"
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SideCartButton from './components/SideCartButton.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <App />
        <Footer />
        <SideCartButton />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
