import { Box, Center, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { OrderMenu } from "../components/orderMenu";
import { CheckOut } from "../components/checkout";
import { SearchBar } from "../components/searchBar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { NavProfile } from "../components/navProfile";
import { Welcome } from "./welcome";
import { Login } from "./login";
import { useDispatch, useSelector } from "react-redux";
import { startTransaction } from "../redux/transactionSlice";
import { Payment } from "../components/payment";

export const HomePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const isTransaction = useSelector((state) => state.transaction.isTransaction)

  const handleStartTransaction = () => {
    dispatch(startTransaction());
  }

  const updateProduct = (data) => {
    setProduct(data);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav header footer"
                "nav main footer"
                "nav main footer"`,
      }}
      gridTemplateRows={{
        base: "0px",
        md: "70px 1fr 50px",
      }}
      gridTemplateColumns={{
        base: "0px 1fr",
        sm: "30px 1fr 200px",
        md: "60px 1fr 250px",
        lg: "90px 1fr 400px",
        xl: "50px 1fr 300px",
        "2xl": "120px 1fr 500px",
      }}
    >
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"header"}
        w={"full"}
        position={"sticky"}
        top={"0"}
        zIndex={1}
      >
        <SearchBar updateProduct={updateProduct} />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        w={{ md: "7%", xl: "4%", "2xl": "8%" }}
        area={"nav"}
        top={"0%"}
        left={"0"}
        position={"fixed"}
        zIndex={"1"}
      >
        <Sidebar />
      </Box>
      <Box
        as={GridItem}
        area={"main"}
        w={{ base: "100vw", md: "50vw", lg: "full" }}
        h={"100vh"}
      >
        <OrderMenu id={id} products={product} />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"footer"}
        position={"fixed"}
        w={{ md: "28vw", xl: "23.4vw", "2xl": "30vw" }}
        right={"0"}
        bottom={"0"}
        bg={"white"}
      >
        <CheckOut />
      </Box>
    </Grid>
  );
};
