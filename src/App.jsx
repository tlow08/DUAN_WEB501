import { useEffect, useState } from "react";
// import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFoundPages from "./pages/NotFoundPages";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import instance, { getProducts } from "./axios";
import ProductDetail from "./pages/ProductDetail";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import Register from "./pages/Register";
import Users from "./pages/admin/Users";
import ShopPage from "./pages/ShopPage";
import PrivateRoute from "./pages/admin/PrivateRoute";
import ContactPage from "./pages/ContactPage";

import AdminLayout from "./pages/admin/AdminLayout";
import AboutUser from "./pages/AboutUser";
import ListProduct from "./pages/admin/ListProduct";
import Dashboard from './pages/admin/Dashboard';


function App() {
  const [products, setProducts] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/users");
        setUsers(data);
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  }, []);

  const removeProduct = (id) => {
    (async () => {
      try {
        if (confirm("Bạn muốn xóa?")) {
          await instance.delete(`/products/${id}`);
          const newData = products.filter(
            (product) => product.id !== id && product
          );
          setProducts(newData);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const productAdd = (data) => {
    (async () => {
      try {
        const result = await instance.post("/products", data);
        setProducts([...products, result.data]);
        if (confirm("Thêm thành công, có muốn về trang danh sách sản phẩm không")) {
          nav("/admin/products");
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  };
  const productEdit = (data) => {
    (async () => {
      try {
        await instance.patch(`/products/${data.id}`, data);
        const newData = await getProducts();
        setProducts(newData);
        if (confirm("Thêm thành công, có muốn về trang danh sách sản phẩm không?")) {
          nav("/admin/products");
        }
      } catch (error) {
        console.error("Error app:", error);
      }
    })();
  };
  return (
    <>
      <Routes>
       <Route path="*" element={
        <>
         <Header />
        <main className="container xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md m-auto lg:pt-[170px]">
          <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/shop" element={<ShopPage data={products} />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPages />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-user" element={<AboutUser />}/>
          </Routes>
        </main>
        <Footer />
        </>
       }/>
        <Route path="/admin" element={<PrivateRoute />}>
        <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/admin"  element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />}/>
    
            <Route
              path="products"
              element={
                <ListProduct data={products} removeProduct={removeProduct} />
              }
            />
            <Route path="users" element={<Users data={users} />} />
            <Route
              path="product-add"
              element={<ProductAdd pAdd={productAdd} />}
            />
            <Route
              path="product-edit/:id"
              element={<ProductEdit pEdit={productEdit} />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
