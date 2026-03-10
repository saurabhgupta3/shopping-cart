import Home from "./Home"
import Layout from "./layouts/layout"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Shop from "./Shop";
import Cart from "./Cart";
import Card from "./Card";
import { CartProvider } from "./context/CartContext";
//hello
export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Route>
          <Route path="/card" element={<Card />}></Route>
        </Routes>
      </Router>
    </CartProvider>
  )
}
