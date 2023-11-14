import { HomePage } from "./pages/homePage";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "./redux/userSlice";
import { Box } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SettingsPage } from "./pages/settingsPage";

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
          <Route path="/settings/my-profile" element={<SettingsPage />} />
          <Route path="/settings/manage-cashiers" element={<SettingsPage />} />
          <Route path="/settings/manage-products" element={<SettingsPage />} />
          <Route path="/settings/security" element={<SettingsPage />} />
          <Route path="/settings/about-us" element={<SettingsPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
