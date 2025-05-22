import { createRoot } from 'react-dom/client'
import CartProvider from "./context/CartProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </CartProvider>
  </BrowserRouter>


)


