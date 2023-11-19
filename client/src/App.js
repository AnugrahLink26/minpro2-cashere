import { HomePage } from "./pages/homePage";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "./redux/userSlice";
import { setProduct } from "./redux/productSlice";
import { Box } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider, Route, Routes, BrowserRouter } from "react-router-dom";
import { SettingsPage } from "./pages/settingsPage";
import { Category } from "./components/category";
import { AddProduct } from "./components/addProduct";
import { Welcome } from "./pages/welcome";
import { Login } from "./pages/login";
import { Required } from "./components/required";

const router = createBrowserRouter([
  // { path: "/verify/:token", element: <Verify /> },
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  {  
    element: <Required />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/settings/my-profile", element: <SettingsPage /> },
      { path: "/settings/manage-cashiers", element: <SettingsPage /> },
      { path: "/settings/manage-products", element: <SettingsPage /> },
      { path: "/settings/security", element: <SettingsPage /> },
      { path: "/settings/about-us", element: <SettingsPage /> },
      { path: "/settings/manage-product/add-product", element: <AddProduct /> }
    ]
  },
])

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const keepLogIn = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/users/keep-login`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(setData(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const result = await axios.get(`http://localhost:2000/products`);
      console.log(result.data);
      dispatch(setProduct(result.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    keepLogIn();
    getProduct();
  }, []);

  return (
    <Box bg={"#F1F3F4"}>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings/my-profile" element={<SettingsPage />} />
          <Route path="/settings/manage-cashiers" element={<SettingsPage />} />
          <Route path="/settings/manage-products" element={<SettingsPage />} />
          <Route path="/settings/security" element={<SettingsPage />} />
          <Route path="/settings/about-us" element={<SettingsPage />} />
          <Route
            path="/settings/manage-product/add-product"
            element={<AddProduct />}
          />
        </Routes>
      </BrowserRouter> */}
    </Box>
  );
}

export default App;
