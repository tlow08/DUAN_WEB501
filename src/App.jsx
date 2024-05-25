import { useEffect, useState } from "react";
// import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFoundPages from "./pages/NotFoundPages";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import instance from "./axios";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";


function App() {
  // const [count, setCount] = useState(0);

  // const [products, setProducts] = useState([]);
  // useEffect(()=>{
  //   fetch("http://localhost:3000/products")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setProducts(data);
  //   })
  //   .catch((error) => console.log(error));
  // }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        console.log(data);
        setProducts(data); // Đã sửa lỗi đánh máy: setProducts thay vì setProduct
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage data={products} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<Dashboard data ={products} />} /> 
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
