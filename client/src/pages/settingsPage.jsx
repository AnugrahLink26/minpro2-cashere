import { Box, Center, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { Sidebar } from "../components/sidebar";
import { SearchBar } from "../components/searchBar";
import { SettingsMenu } from "../components/settingsMenu";
import { BrowserRouter as Router, Route, useNavigate, Routes, useLocation } from "react-router-dom";
import { MyProfile } from "../components/myProfile";
import { ManageCashiers } from "../components/manageCashiers";
import { ManageProducts } from "../components/manageProducts";
import { Security } from "../components/security";
import { AboutUs } from "../components/aboutUs";

const Components = ({ match }) => {
  const { path } = match;

  switch (path) {
    case '/settings/my-profile':
      return <MyProfile />;
    case '/settings/manage-cashiers':
      return <ManageCashiers />;
    case '/settings/manage-products':
      return <ManageProducts />;
    case '/settings/security':
      return <Security />;
    case '/settings/about-us':
      return <AboutUs />;
    default:
      return null;
  }
};

export const SettingsPage = () => {
  const token = localStorage.getItem("token")
  const location = useLocation();
  const { pathname } = location

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  
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
        <SettingsMenu onNavigate={handleNavigation} />
      </Box>
      <Box 
        display={{ base: "none", md: "flex" }}
        bg={'white'}
        my={'1rem'}
        mr={'1rem'}
        borderBottom={"1px solid"} 
        borderColor={"gray.200"}
        rounded={"xl"}
        as={GridItem}
        area={"main"}
        position={"sticky"}
        zIndex={1}
      >
        <Components match={{ path: pathname }} />
      </Box>
    </Grid>
  );
};