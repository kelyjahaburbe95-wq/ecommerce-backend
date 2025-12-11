console.log("API =", import.meta.env.VITE_API_URL);

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
