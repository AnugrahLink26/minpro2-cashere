import { Box, Grid, GridItem, Center, Flex, Divider } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { OrderMenu } from "../components/orderMenu";
import { CheckOut } from "../components/checkout";
import { SearchBar } from "../components/searchBar";
import { Welcome } from "../components/welcome";
import { Login } from "../components/login";
import { NavProfile } from "../components/navProfile";

export const HomePage = () => {
  const token = localStorage.getItem("token")
  
  return (
    <Grid
      templateAreas={`"nav header header"
                  "nav main footer"
                  "nav main footer"
                  `}
      gridTemplateRows={{
        base:"0px",
        md:"70px 1fr 50px",
        lg: "55px 1fr",                
      }}
      gridTemplateColumns={{
        base: "0px 1fr",
        md: "130px 1fr 250px ",
        lg: "150px 1fr 300px",
        xl: "200px 1fr 500px",
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
        display={{ base: "none", md: "flex" }} 
        alignItems={'center'} 
        borderBottom={"1px"} 
        borderColor={"gray.200"}
        as={GridItem}
        area={"nav"}
        w={{ base: "100vh", md: "15vw", lg: "12vw" }}
        h={"100vh"}
        position={"sticky"}
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
        <OrderMenu />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"nav"}
        h={"100vh"}
        position={"sticky"}
        top={"55px"}
        borderRight={"1px"}
        borderColor={"gray.200"}
      >
        <Sidebar />
      </Box>
        <Box 
          display={{ base: "none", md: "block" }}
          as={GridItem}
          area={"main"}
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
        >
          <Center>
            <Login />
          </Center>
        </Box>
      }
    </Grid>
  );
};

