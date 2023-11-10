import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { OrderMenu } from "../components/orderMenu";
import { CheckOut } from "../components/checkout";
import { SearchBar } from "../components/searchBar";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={`"nav header header"
                  "nav main footer"
                  "nav main footer"
                  `}
      gridTemplateRows={{base:"0px",md:"70px 1fr 50px"}}
      gridTemplateColumns={{
        base: "0px 1fr 100px",
        md: "90px 1fr 300px ",
        lg: "150px 1fr 300px",
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
      <Box as={GridItem} area={"main"} h={"100vh"}>
        <OrderMenu />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"footer"}
        h={"87vh"}
        position={"sticky"}
        top={"70px"}
      >
        <CheckOut />
      </Box>
    </Grid>
  );
};
