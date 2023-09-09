import React from "react";
import { Outlet, Route, BrowserRouter, Routes } from "react-router-dom";

import AdminProducts from "./Pages/admin/product/AdminProducts";
import Products from "./Components/Products";
import MainLayout from "./Layout/MainLayout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Login from "./Pages/auth/Login";
import Detail from "./Pages/Detail";
import AdminAddProduct from "./Pages/admin/product/AdminAddProduct";
import AdminEditProduct from "./Pages/admin/product/AdminEditProduct";
import AdminCategories from "./Pages/admin/category/AdminCategories";
import AdminEditCategory from "./Pages/admin/category/AdminEditCategory";
import AdminAddCategory from "./Pages/admin/category/AdminAddCategory";
import { useSelector } from "react-redux";
import AdminMessages from "./Pages/admin/messages/AdminMessages";
import ProductsByCategory from "./Pages/ProductsByCategory";

function App() {
  const { token, isAuth } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cat/:id" element={<ProductsByCategory/>} />
          <Route path="details/:id" element={<Detail />} />
          {isAuth && (
            <Route path="user" element={<Outlet />}>
              <Route index element={<AdminProducts />} />
              <Route path="addproduct" element={<AdminAddProduct />} />
              <Route path=":id" element={<AdminEditProduct />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="categories/:id" element={<AdminEditCategory />} />
              <Route path="addcategory" element={<AdminAddCategory />} />
              <Route path="messages" element={<AdminMessages />} />
            </Route>
          )}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
