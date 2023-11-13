import { Box, Center, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { OrderMenu } from "../components/orderMenu";
import { CheckOut } from "../components/checkout";
import { SearchBar } from "../components/searchBar";
import { NavProfile } from "../components/navProfile";
import { Welcome } from "../components/welcome";
import { Login } from "../components/login";
import { SettingsMenu } from "../components/settingsMenu";

export const SettingsPage = () => {
  const token = localStorage.getItem("token")
  
  return (
    <Grid
      templateAreas={{
        base: `"nav header header"
                "nav subnav main"
                "nav subnav main"`,
      }}
      gridTemplateRows={{
        base: "0px",
        md: "70px 1fr 50px",
      }}
      gridTemplateColumns={{
        base: "0px 0px 1fr",
        md: "90px 250px 1fr",
        lg: "120px 250px 1fr",
        xl: "150px 350px 1fr",
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
        display={{ base: "none", md: "block" }}
        bg={'white'}
        m={'1rem'}
        alignItems={'center'}
        border={'1px solid'}
        borderColor={"gray.200"}
        rounded={"xl"}
        as={GridItem}
        area={"subnav"}
        position={"sticky"}
        zIndex={1}
      >
        <SettingsMenu />
      </Box>
      <Box 
        display={{ base: "none", md: "flex" }}
        bg={'white'}
        my={'1rem'}
        mr={'1rem'}
        alignItems={'center'} 
        borderBottom={"1px solid"} 
        borderColor={"gray.200"}
        rounded={"xl"}
        as={GridItem}
        area={"main"}
        position={"sticky"}
        zIndex={1}
      >
        <Welcome />
      </Box>
    </Grid>
  );
};