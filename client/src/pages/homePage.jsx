import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { OrderMenu } from "../components/orderMenu";
import { CheckOut } from "../components/checkout";
import { SearchBar } from "../components/searchBar";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav header header"
                "nav main footer"
                "nav main footer"`
                  ,
      }}
      gridTemplateRows={{
        base: "0px",
        md: "70px 1fr 50px",
        lg: "55px 1fr",
      }}
      gridTemplateColumns={{
        base: "0% 1fr",
        md: "130px 1fr 250px ",
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
        w={{ base: "100vh", md: "15vw", lg: "12vw" }}
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
        <OrderMenu />
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        as={GridItem}
        area={"footer"}
        h={"87vh"}
        position={"sticky"}
        top={"55px"}
      >
        <CheckOut />
      </Box>
    </Grid>
  );
};