import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Lifestyle from "./pages/lifestyle/lifestyle";
import Fashion from "./pages/fashion/Fashion";
import Favorite from "./pages/favorate/Favorate";
import Navbar from "./components/Navbar/Navbar"; // Assuming Navbar is in src/components/Navbar.js
import Signup from "./pages/sign_up/Signup";
import Cataloge from "./pages/cataloge/Cataloge";
import { CartProvider } from "./components/contex/CartContext"; // Ensure CartProvider is imported

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/catalouge" element={<Cataloge />} />
          <Route path="/favorate" element={<Favorite />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
