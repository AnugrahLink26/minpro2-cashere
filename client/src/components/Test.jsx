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
      templateAreas={`"nav header profile"
                  "nav main footer"
                  "nav main footer"
                  `}
      gridTemplateRows={{
        base:"0px",
        md:"70px 1fr 50px"
      }}
      gridTemplateColumns={{
        base: "0px 1fr 100px",
        sm: "50px 1fr 200px",
        md: "100px 1fr 300px",
        lg: "150px 1fr 400px",
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
        area={"profile"}
        position={"sticky"}
        zIndex={1}
      >
        <Divider orientation='vertical' my={5}/>
        <Box >
          <NavProfile />
        </Box>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"nav"}
        h={"100vh"}
        position={"sticky"}
        top={"0"}
        zIndex={1}
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