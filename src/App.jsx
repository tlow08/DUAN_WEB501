
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFoundPages from "./pages/NotFoundPages";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import ProductDetail from "./pages/ProductDetail";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import Users from "./pages/admin/Users";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";

import AdminLayout from "./pages/admin/AdminLayout";
import AboutUser from "./pages/AboutUser";
import ListProduct from "./pages/admin/ListProduct";
import Dashboard from "./pages/admin/Dashboard";
import AuthForm from "./pages/AuthForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <main className="container xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md m-auto lg:pt-[170px]">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/home" element={<Navigate to="/" />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route
                    path="/product-detail/:id"
                    element={<ProductDetail />}
                  />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/login" element={<AuthForm />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFoundPages />} />
                  <Route path="/register" element={<AuthForm isRegister />} />
                  <Route path="/about-user" element={<AboutUser />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="products" element={<ListProduct />} />
            <Route path="users" element={<Users />} />
            <Route path="product-add" element={<ProductAdd />} />
            <Route path="product-edit/:id" element={<ProductEdit />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
