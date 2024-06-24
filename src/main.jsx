import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContext.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import UserContextProvider from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
    <AuthContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
      </AuthContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
