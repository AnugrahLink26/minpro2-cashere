import { HomePage } from "./pages/homePage";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "./redux/userSlice";
import { Box } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SettingsPage } from "./pages/settingsPage";
import { Category } from "./components/manageCategory/category";
import { AddProduct } from "./components/addProduct";
import { UpdateProduct } from "./components/updateProduct";
import { ModalDelete } from "./components/modalDelete";
import { ManageCategory } from "./components/manageCategory/manageCategory";

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

  useEffect(() => {
    keepLogIn();
  }, []);

  return (
    <BrowserRouter>
      <Box bg={"#F1F3F4"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/A-Z" element={<HomePage />} />
          <Route path="/category/Z-A" element={<HomePage />} />
          <Route path="/category/cheaper" element={<HomePage />} />
          <Route path="/category/expensive" element={<HomePage />} />
          <Route path="/category/:id" element={<HomePage />} />
          <Route path="/settings/my-profile" element={<SettingsPage />} />
          <Route path="/settings/manage-cashiers" element={<SettingsPage />} />
          <Route path="/settings/manage-products" element={<SettingsPage />} />
          <Route path="/settings/security" element={<SettingsPage />} />
          <Route path="/settings/about-us" element={<SettingsPage />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/delete/:id" element={<ModalDelete />} />
          <Route path="/category" element={<Category />} />
          <Route
            path="/settings/manage-products/manage-category"
            element={<ManageCategory />}
          />
          <Route
            path="/settings/manage-product/add-product"
            element={<AddProduct />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
