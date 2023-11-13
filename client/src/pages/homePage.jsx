import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { OrderMenu } from "../components/orderMenu";
import { CheckOut } from "../components/checkout";
import { SearchBar } from "../components/searchBar";
import { NavProfile } from "../components/navProfile";
import { Welcome } from "../components/welcome";
import { Login } from "../components/login";

export const HomePage = () => {
  const token = localStorage.getItem("token")
  
  return (
    <Grid
      templateAreas={{
        base: `"nav header header"
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
        md: "60px 1fr 300px",
        lg: "90px 1fr 400px",
        xl: "120px 1fr 450px",
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
        {
          token ? <OrderMenu /> : <Welcome />
        }
      </Box>
      {
        token ? 
        <Box
          display={{ base: "none", md: "block" }}
          as={GridItem}
          area={"footer"}
          position={"sticky"}
          top={"70px"}
          bg={"white"}
        >
          <CheckOut />
        </Box>
        : 
        <Box
          display={{ base: "none", md: "block" }}
          as={GridItem}
          area={"footer"}
          position={"sticky"}
          borderLeft={"1px"} 
          borderColor={"gray.200"}
          bg={"white"}
        >
          <Center>
            <Login />
          </Center>
        </Box>
      }
    </Grid>
  );
};