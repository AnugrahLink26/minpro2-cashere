import { HomePage } from "./pages/homePage";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "./redux/userSlice";
import { Box } from "@chakra-ui/react";
import { SettingsPage } from "./pages/settingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/settings", element: <SettingsPage /> },
]);

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
    <div>
      <Box bg={"#F1F3F4"}>
        <RouterProvider router={router} />
      </Box>
    </div>
  );
}

export default App;
