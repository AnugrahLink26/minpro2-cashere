import { Box, Center, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { OrderMenu } from "../components/orderMenu";
import { CheckOut } from "../components/checkout";
import { SearchBar } from "../components/searchBar";
import { NavProfile } from "../components/navProfile";
import { Welcome } from "./welcome";
import { Login } from "./login";
import { useDispatch, useSelector } from "react-redux";
import { startTransaction } from "../redux/transactionSlice";
import { Payment } from "../components/payment";

export const HomePage = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const isTransaction = useSelector((state) => state.transaction.isTransaction)

  const handleStartTransaction = () => {
    dispatch(startTransaction());
  }

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
        <SearchBar />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"nav"}
        h={"100vh"}
        position={"sticky"}
        top={"0"}
        zIndex={1}
      >
        <Sidebar />
      </Box>
      <Box
        as={GridItem}
        area={"main"}
        w={{ base: "100vw", md: "50vw", lg: "full" }}
        h={"100vh"}
      >
        {token ? <OrderMenu /> : <Welcome />}
      </Box>
        <Box
          display={{ base: "none", md: "block" }}
          as={GridItem}
          area={"footer"}
          position={"sticky"}
          borderLeft={"1px"}
          borderColor={"gray.200"}
          h={'100vh'}
          top={"0"}
          bg={"white"}
        >
          { token ? 
            <CheckOut /> 
            // <Payment />
            : <Login /> 
          }
        </Box>
    </Grid>
  );
};
