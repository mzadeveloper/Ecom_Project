import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Products";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AddProduct from "../pages/AddProduct";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} /> 
       
      <Route path="/add-product" element={<AddProduct />} />
    </Routes>
  );
}
