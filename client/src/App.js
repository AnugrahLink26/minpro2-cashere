import { HomePage } from "./pages/homePage";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setData } from "./redux/userSlice";

function App() {
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const keepLogIn = async () => {
    try {
      const response = await axios
        .get(`http://localhost:2000/users/keep-login`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      dispatch(setData(response.data))
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    keepLogIn()
  }, [])

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
